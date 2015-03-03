var keystone = require('keystone'),
    Registration = keystone.list('Registration');

exports = module.exports = function(req, res) {
    
    var view = new keystone.View(req, res);
	locals = res.locals;   
    
    locals.content = [{template:'standard',
                       macro:'standard',
                       arguments:{title:'Attend the Event',
                                  text:'<p>Lorem ipsum dolor...</p>'
                                 }
                      }];
    
    //Required for newsletter signup
    locals.formData = req.body || {};
	locals.validationErrors = {flag:0,sflag:0};
    locals.registrationSuccess = false;
    view.on('post', { action: 'register' }, function(next) {
        if(locals.formData.terms!='true'){
            locals.validationErrors.terms=1;
        }
        var newAttendee = new Registration.model(),
            updater = newAttendee.getUpdateHandler(req);

        updater.process(req.body, {
            flashErrors: false,
            fields: 'name, email, phone, affiliation, streaming, raffle'
        }, function(err) {
            if (err) {
                locals.validationErrors.flag = 1;
                for(key in err.errors)
                    locals.validationErrors[key] = err.errors[key];
                console.log(JSON.stringify(locals.validationErrors));
            } else {
                locals.registrationSuccess = true;
            }
            next();
        });
	});
    
    view.on('post', { action: 'sregister' }, function(next) {
        if(locals.formData.terms!='true'){
            locals.validationErrors.sterms=1;
        }
        var newAttendee = new Registration.model(),
            updater = newAttendee.getUpdateHandler(req);

        updater.process(req.body, {
            flashErrors: false,
            fields: 'name, email, phone, affiliation, streaming, raffle'
        }, function(err) {
            if (err) {
                locals.validationErrors.sflag = 1;
                for(key in err.errors)
                    locals.validationErrors['s'+key] = err.errors[key];
                console.log(JSON.stringify(locals.validationErrors));
            } else {
                locals.registrationSuccess = true;
            }
            next();
        });
	});
    
    view.render('attend');   
}