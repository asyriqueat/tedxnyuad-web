var keystone = require('keystone'),
	Enquiry = keystone.list('Enquiry');
    Newsletter = keystone.list('Newsletter'); //Required for newsletter signup

exports = module.exports = function(req, res) {
	
	var view = new keystone.View(req, res),
		locals = res.locals;
	
	// Set locals
	locals.section = 'contact';
	locals.enquiryTypes = Enquiry.fields.enquiryType.ops;
	locals.formData = req.body || {};
	locals.validationErrors = {};
	locals.enquirySubmitted = false;
    locals.apiKey=process.env.GOOGLE_API_KEY;
	

    function sendMail(data,to){
        var nodemailer = require('nodemailer');

        // create reusable transporter object using SMTP transport
        var transporter = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
                user: 'admin@tedxnyuad.org',
                pass: 'tedxnyuadrocks'
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

	// On POST requests, add the Enquiry item to the database
	locals.formData = req.body || {};
	view.on('post', { action: 'contact' }, function(next) {
	
		if(locals.formData.fullName == '' || locals.formData.fullName == undefined) {

		} else if (locals.formData.email == '' || locals.formData.email == undefined) {

		} else if (locals.formData.message == '' || locals.formData.message == undefined){

		} else {
			locals.enquirySubmitted = true;
			sendMail({subject:"Inquery from "+locals.formData.fullName,
	                  plain:"Message from "+locals.formData.fullName+", "+locals.formData.email+": "+ locals.formData.message,
	                  html:"Message from "+locals.formData.fullName+", "+locals.formData.email+": "+ locals.formData.message
	           }, 'admin@tedxnyuad.org');
		}
		
		next();
	});
 
	view.render('contact');
};
