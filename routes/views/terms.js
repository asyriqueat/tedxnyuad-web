var keystone = require('keystone');
    
exports = module.exports = function(req,res){
    var view = new keystone.View(req, res),
		locals = res.locals;
    
    locals.section = 'terms';

    var data = require('./../../public/js/data/terms.js');
    locals.content = data.content;
    
    // Render the view
	view.render('about'); //About offers the same fields
}




                                 

