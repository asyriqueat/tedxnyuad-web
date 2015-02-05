/*
// Takes in number of speakers.
//
// Returns Array [x,y,z] where x, y and z are the number of speakers per line and the Array.length + 1 is the number of rows. 
//
*/


//Start keystone templating
var keystone = require('keystone');
    Newsletter = keystone.list('Newsletter'); //Required for newsletter signup

exports = module.exports = function(req, res) {
    
    var view = new keystone.View(req, res),
        locals = res.locals;
    
    // locals.section is used to set the currently selected
    // item in the header navigation.
    locals.section = 'speakers';
    
    var data = require('./../../public/js/data/speakers.js');
    locals.content = data.content;
    
    //Required for newsletter signup
    locals.formData = req.body || {};
    view.on('post', { action: 'newsletter' }, function(next) {
		var newNewsletter = new Newsletter.model(),
			updater = newNewsletter.getUpdateHandler(req);

        updater.process(req.body, {
			flashErrors: true,
			fields: 'email',
			errorMessage: 'There was a problem submitting your enquiry:'
		}, function(err) {
			if (err) {
				locals.validationErrors = err.errors;
			} else {
				locals.newsletterSignup = true;
			}
			next();
		});
	});
    //--------------
    
	// Render the view
	view.render('speakers');
};