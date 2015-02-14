var keystone = require('keystone');

exports = module.exports = function(req, res) {
    
    var view = new keystone.View(req, res);
	locals = res.locals;   
    
    locals.content = [{template:'standard',
                       macro:'standard',
                       arguments:{title:'Attend the Event',
                                  text:'<p>Lorem ipsum dolor...</p>'
                                 }
                      }];
    
    view.render('attend');   
}