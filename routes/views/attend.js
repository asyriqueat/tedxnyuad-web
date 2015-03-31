var keystone = require('keystone'),
    Registration = keystone.list('Registration'),
    Invitation = keystone.list('Invitation');

exports = module.exports = function(req, res) {
    
    function sendMail(data,to){
        var nodemailer = require('nodemailer');

        // create reusable transporter object using SMTP transport
        var transporter = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
                user: 'admin@tedxnyuad.org',
                pass: 'tedxnyuadsaadiyat'
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
                console.log(error);
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
                                  text:'<p>If you are interested in attending the event, sign up below. Because of TEDx regulations, please note that the live event has limited seats and an invitation is required. If you are still interested in attending the live event but haven\t gotten an invitation, you can sign for the streaming event and tick the box to put your name in the raffle for a limited amount of live event seats. You are guaranteed a spot at the streaming event, but this is not the same as a spot at the live event.</p>'
                                 }
                      }];
    
    //Required for newsletter signup
    locals.formData = req.body || {};
	locals.validationErrors = {flag:0};
    locals.registrationSuccess = false;

    view.on('post', { action: 'registerInvitation' }, function(next) {
        console.log('in');
        if(locals.formData.termsInvitation!='true'){
            locals.validationErrors.termsInvitation=1;
            locals.validationErrors.flagInvitation=1;
            next();
            return;
        }
        
        if(!locals.formData.hasOwnProperty('invitationCode') || !locals.formData.invitationCode || !locals.formData.guestName  || !locals.formData.hasOwnProperty('guestName')){
            locals.validationErrors.mismatch=1;
            locals.validationErrors.flagInvitation=1;
            next();
            return;
        }

        
        var newGuest = new Invitation.model(),
            updater = newGuest.getUpdateHandler(req);
        
        //Check for match
        Invitation.model.find().where('guestName',locals.formData.guestName).where('invitationCode',locals.formData.invitationCode).exec(function(err, posts){
            if(err){
                locals.validationErrors.queryError=1;
            }else{
                if(posts.length>0){
                    if(posts[0].invitationCode == locals.formData.invitationCode){
                        if(posts[0].going==true){
                            locals.validationErrors.invitationAccepted=1;
                            locals.validationErrors.flagInvitation=1;
                        }else{
                            posts[0].going=true;
                            posts[0].save(function(err){
                                if(err){
                                    console.log('Error');
                                }
                            });
                            locals.guest=locals.formData.guestName;
                            locals.event="Live Event";
                            locals.registrationSuccess = true;
                            
                            sendMail({subject:"Guest Registration – "+locals.guest,html:"<p>Dear Organising Team,</p><p>Note that invitee <b>"+locals.guest+"</b> has confirmed his attendance with the code <b>"+locals.formData.invitationCode+"</b>.</p><p>Make sure to send him/her a confirmation email right away with details.</p><p>You're awesome!</p><p>Hugs,<br/>From yourself :-)</p>"},"abudhabi@tedxnyu.com");
                        }
                    }else{
                        locals.validationErrors.mismatch=1;
                        locals.validationErrors.flagInvitation=1;
                    }
                }else{
                    locals.validationErrors.mismatch=1;
                    locals.validationErrors.flagInvitation=1;
                }
            }
            next();
        });
	});
    
    
    view.on('post', { action: 'register' }, function(next) {
        locals[locals.formData.affiliation] = true;
        
        Registration.model.find().where('email',locals.formData.email).exec(function(err, attendees){
            if(attendees.length==0){
                if(locals.formData.termsRegister!='true'){
                    locals.validationErrors.termsRegister=1;
                    locals.validationErrors.flagRegister=1;
                    next();
                }else if(locals.formData.affiliation!="public" && locals.formData.email.indexOf("@nyu.edu") == -1){
                    locals.validationErrors.emailNYU = 1;
                    locals.validationErrors.flagRegister = 1;
                    next();
                }else{
                    var newAttendee = new Registration.model(),
                        updater = newAttendee.getUpdateHandler(req);

                    updater.process(req.body, {
                        flashErrors: false,
                        fields: 'name, email, phone, affiliation, streaming, raffle'
                    }, function(err) {
                        if (err) {
                            locals.validationErrors.flagRegister = 1;
                            for(key in err.errors)
                                locals.validationErrors[key] = err.errors[key];
                            console.log(JSON.stringify(locals.validationErrors));
                        } else {
                            locals.registrationSuccess = true;
                            console.log(JSON.stringify(locals.formData, null, 2));
                            locals.guest=locals.formData["name.first"];
                            locals.event="Streaming Event";
                            
                            sendMail({subject:"TEDxNYUAD 2015 Ticket Receipt",plain:"You have now registered.",html:"<div style='border-bottom:#e62b1e 3px solid;width:100%'><img src='http://www.tedxnyuad.org/images/logo.png' width='200px'/></div><h2 style='color:#e62b1e'>Ticket Receipt</h2><p>Dear "+locals.formData["name.first"]+" "+locals.formData["name.last"]+",</p><p>We hereby confirm your spot at the Streaming Event at the campus of New York University Abu Dhabi April 19th. We are excited to host your for the evening and look much forward to sharing interesting ideas with you.</p><p>Please bring this ticket receipt either as a printout or in digital copy with you to the event to secure your spot.</p><p>The streaming event will take place from <b>06.00PM - 09.00PM Sunday April 19, 2015</b> at New York University Abu Dhabi Saadiyat Island, East and West Forum, C2 Building. Look out for the signs upon arrival.</p><p>Should you have any questions, don't hesitate to contact us on.</p><p>We look forward to seeing you!</p><p>Best regards,<br/>The TEDxNYUAD Team</p>"},locals.formData.email);
                            
                        }
                        next();
                    });
                }
            }else{
                locals.validationErrors.emailExists=1;
                locals.validationErrors.flagRegister = 1;
                next();
            }
        });
	});
    
    view.render('attend');   
}