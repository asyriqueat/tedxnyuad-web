var keystone = require('keystone'),
    Registration = keystone.list('Registration'),
    Invitation = keystone.list('Invitation');

exports = module.exports = function(req, res) {
        
    Registration.model.find({},function(err,docs){
        docs.forEach(function(doc){
            console.log(doc);
        });
    });



    function sendMail(data,to){
        var nodemailer = require('nodemailer');

        // create reusable transporter object using SMTP transport
        var transporter = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
                user: 'admin@tedxnyuad.org',
                pass: process.env.EMAIL_PASS
            }
        });

        // NB! No need to recreate the transporter object. You can use
        // the same transporter object for all e-mails

        // setup e-mail data with unicode symbols
        var mailOptions = {
            from: 'TEDxNYUAD <info@tedxnyuad.org>', // sender address
            to: to, // list of receivers
            subject: data.subject, // Subject line
            text: data.plain, // plaintext body
            html: data.html // html body
        };

        // send mail with defined transport object
        transporter.sendMail(mailOptions, function(error, info){
            if(error){
                console.log('Error sending message: '+error);
            }else{
                console.log('Message sent: ' + info.response);
            }
        });
    }
    
    var view = new keystone.View(req, res);
	locals = res.locals;   
    
    locals.content = [{template:'standard',
                       macro:'standard',
                       arguments:{title:'Attend the Event',
                                  text:'<p>If you are interested in attending the event, sign up below. Please note that there is a limited amount of spots available, and that they are reserved on a first-come, first-serve basis. If you don\'t manage to get tickets, you can show up to queue in the standby line on the day of the event to get any last spots that might be free.</p>'
                                 }
                      }];
    
    //Required for newsletter signup
    locals.formData = req.body || {};
    console.log(JSON.stringify(locals.formData));
	locals.validationErrors = {flag:0};
    locals.registrationSuccess = false;

    // Object for handling registraiton lengths
    var registrationLengths = {
        public:50,
        facultyStaff:50,
        student:100
    };
    view.on('post', { action: 'register' }, function(next) {
        locals[locals.formData.affiliation] = true;
        var errors = 0;
        if (!locals.formData.fullName || locals.formData.fullName == '' ) {
            locals.validationErrors.emptyName = 1;
            locals.validationErrors.empty = 1;
            errors = 1;
        }
        if (!locals.formData.email || locals.formData.email == '' ) {
            locals.validationErrors.emptyEmail = 1;
            locals.validationErrors.empty = 1;
            errors = 1;
        }

        if(errors == 1) {
            next();
        } else {
            Registration.model.find().where('email',locals.formData.email).exec(function(err, attendees){
                if(attendees.length==0){
                    if(locals.formData.affiliation=="student" && locals.formData.email.indexOf("@nyu.edu") == -1){
                        locals.validationErrors.emailNYU = 1;
                        locals.validationErrors.flagRegister = 1;
                        next();
                    }else if(locals.formData.termsRegister!='true'){
                        locals.validationErrors.termsRegister=1;
                        locals.validationErrors.flagRegister=1;
                        next();
                    }else{
                        var newAttendee = new Registration.model(),
                            updater = newAttendee.getUpdateHandler(req);
                        
                        Registration.model.find().where('affiliation', locals.formData.affiliation).exec(function(err,registrations){
                            // calculate tickets
                            var tickets = 0;
                            registrations.forEach(function(registration){
                                tickets+= parseInt(registration.tickets);
                            });

                            console.log('Tickets: '+tickets);

                            if(tickets>registrationLengths[locals.formData.affiliation]) {
                                // do something
                                locals.registrationFull = true;
                                return next();
                            }
                            
                            updater.process(req.body, {
                                flashErrors: false,
                                fields: 'fullName, email, affiliation, tickets'
                            }, function(err) {
                                if (err) {
                                    locals.validationErrors.flagRegister = 1;
                                    for(key in err.errors) {
                                        locals.validationErrors[key] = err.errors[key];
                                    }
                                    console.log('---------Failed with the following errors:');
                                    console.log(JSON.stringify(locals.validationErrors));
                                    console.log('----for');
                                    console.log(locals.formData);
                                    console.log('---------');
                                } else {
                                    locals.registrationSuccess = true;
                                    console.log(JSON.stringify(locals.formData, null, 2));
                                    locals.guest=locals.formData["fullName"];
                                    locals.tickets = locals.formData.tickets;
                                    sendMail({subject:"TEDxNYUAD 2015 Ticket Receipt",
                                              plain:"You have now registered.",
                                              html:"<div style='border-bottom:#e62b1e 3px solid;width:100%'><img src='http://www.tedxnyuad.org/images/logo.png' width='200px'/></div><h2 style='color:#e62b1e'>Ticket Receipt</h2><p>Dear "+locals.formData["fullName"]+",</p><p>We hereby confirm your spot at the TEDxNYUAD2016 at the campus of New York University Abu Dhabi April 10th. We are excited to host your for the evening and look much forward to sharing interesting ideas with you.</p><p>Please bring this ticket receipt either as a printout or in digital copy with you to the event to secure your spot.</p><p>The event will take place from <b>06.00PM - 09.00PM Sunday April 10, 2015</b> at New York University Abu Dhabi Saadiyat Island, The Institute, A6 Building. Look out for the signs upon arrival.</p><p>Should you have any questions, don't hesitate to contact us on.</p><p>We look forward to seeing you!</p><p>Best regards,<br/>The TEDxNYUAD Team</p>"},
                                              locals.formData.email);
                                }
                                next();
                            });
                        });
                    }
                }else{
                    locals.validationErrors.emailExists = 1;
                    locals.validationErrors.flagRegister = 1;
                    next();
                }
            });
        }
        
	});
    
    view.render('attend');   
}
