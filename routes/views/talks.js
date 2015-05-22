var keystone = require('keystone');

exports = module.exports = function(req, res){
    
    var view = new keystone.View(req, res);
		locals = res.locals;
    
    locals.section = 'talks';
    
    var data = require('./../../public/js/data/talks.js');
    locals.content = data.content;
    
    view.render('talks');   
}