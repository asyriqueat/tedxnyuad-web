var keystone = require('keystone');
    
exports = module.exports = function(req,res){
    var view = new keystone.View(req, res),
		locals = res.locals;
    
    locals.section = 'faq';

    var data = require('./../../public/js/data/faq.js');
    locals.content = data.content;
    
    // Render the view
	view.render('faq');
}




                                 


















 


