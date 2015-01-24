var keystone = require('keystone');

exports = module.exports = function(req, res) {
	
	var view = new keystone.View(req, res),
		locals = res.locals;
	
	// locals.section is used to set the currently selected
	// item in the header navigation.
	locals.section = 'event';
	locals.panoramaText = '<h4>Conference Center</h4>The TEDx event will take place in the modern Conference Center at the new campus of New York University Abu Dhabi.';
    
	// Render the view
	view.render('event');
	
};
