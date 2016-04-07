var keystone = require('keystone');
    Newsletter = keystone.list('Newsletter'); //Required for newsletter signup
var Parser = require('csv-parse');
var fs = require('fs')
var Invitation = keystone.list('Invitation');
var registration = keystone.list('Registration');

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
    
    /*registration.model.find({},function(err,docs){
        docs.forEach(function(doc){
            doc.waitlist=false;
            doc.save();
        });
    });*/
    
/*
    var source = fs.createReadStream('movedpeople.csv');

    var linesRead = 0;

    var parser = Parser({
        delimiter: ';', 
    });

    parser.on("readable", function(){
        var record;
        while (record = parser.read()) {
            linesRead++;
            
            
            //registration.model.remove({email:record[1]}).exec();
            Invitation.model.create({guestName:record[0],invitationCode:makeid()});
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
function makeid()
{
    var text = "";
    var possible = "abcdefghijklmnopqrstuvwxyz0123456789";

    for( var i=0; i < 5; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}