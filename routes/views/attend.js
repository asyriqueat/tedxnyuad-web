var keystone = require('keystone'),
    Registration = keystone.list('Registration'),
    Invitation = keystone.list('Invitation');

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
	locals.validationErrors = {flag:0};
    locals.registrationSuccess = false;
    
    
    view.on('post', { action: 'registerInvitation' }, function(next) {
        console.log('in');
        if(locals.formData.terms!='true'){
            locals.validationErrors.terms=1;
            locals.validationErrors.flag=1;
            console.log('terms');
        }
        
        if(!locals.formData.hasOwnProperty('invitationCode') || !locals.formData.invitationCode || !locals.formData.guestName  || !locals.formData.hasOwnProperty('guestName')){
            locals.validationErrors.mismatch=1;
            locals.validationErrors.flag=1;
            console.log('rest');
        }


        if(locals.validationErrors.flag==1){
            console.log(JSON.stringify(locals.validationErrors, null, 2));
            console.log("errorfound");
            next();
            return;
        }
        
        
        var newGuest = new Invitation.model(),
            updater = newGuest.getUpdateHandler(req);
        
        //Check for match
        Invitation.model.find().where('guestName',locals.formData.guestName).exec(function(err, posts){
            if(err){
                locals.validationErrors.queryError=1;
            }else{
                console.log("find");
                if(posts.length>0){
                     console.log("1");
                    console.log(JSON.stringify(posts, null, 2));
                    if(posts[0].invitationCode == locals.formData.invitationCode){
                        posts[0].going=true;
                        posts[0].save(function(err){
                            if(err){
                                console.log('Error');
                            }
                        });
                        locals.registrationSuccess = true;
                    }else{
                        locals.validationErrors.mismatch=1;
                        locals.validationErrors.flag=1;
                    }
                }else{
                    locals.validationErrors.mismatch=1;
                    locals.validationErrors.flag=1;
                }
            }
            next();
        });
	});
    
    
    view.on('post', { action: 'register' }, function(next) {
        console.log('in2');
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
    
    view.render('attend');   
}