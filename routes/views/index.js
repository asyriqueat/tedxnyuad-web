var keystone = require('keystone');
    Newsletter = keystone.list('Newsletter'); //Required for newsletter signup
var Parser = require('csv-parse');
var fs = require('fs')
var Invitation = keystone.list('Invitation');

exports = module.exports = function(req, res) {
	
	var view = new keystone.View(req, res),
		locals = res.locals;
	
	// locals.section is used to set the currently selected
	// item in the header navigation.
    var data = require('./../../public/js/data/index.js');
    locals.content = data.content;
    
    
    
    //Required for newsletter signup
    locals.formData = req.body || {};
    view.on('post', { action: 'newsletter' }, function(next) {
		var newNewsletter = new Newsletter.model(),
			updater = newNewsletter.getUpdateHandler(req);

        updater.process(req.body, {
			flashErrors: false,
			fields: 'firstName, lastName, email',
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
    
    
/*
    var source = fs.createReadStream('invitations.csv');

    var linesRead = 0;

    var parser = Parser({
        delimiter: ';', 
    });

    parser.on("readable", function(){
        var record;
        while (record = parser.read()) {
            linesRead++;
            Invitation.model.create({guestName:record[0],invitationCode:record[1]});
        }
    });

    parser.on("error", function(error){
        console.log(error);
    });

    parser.on("end", function(){
        console.log(linesRead);
    });

    source.pipe(parser);
    */
    
	// Render the view
	view.render('index');
	
};
