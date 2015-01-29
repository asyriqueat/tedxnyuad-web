var keystone = require('keystone');

exports = module.exports = function(req, res) {
	
	var view = new keystone.View(req, res),
		locals = res.locals;
    
    locals.section = 'about';
	
	// item in the header navigation.
    locals.content = [{ template:'standard',
                        macro:'ethos',
                        arguments:{ names:[{name:'Alf Lim',
                                            signature:'/images/signatures/alf.png',
                                            height:'80px'},
                                           {name:'Ramina Sotoudeh',
                                            signature:'/images/signatures/ramina.png',
                                            height:'80px',
                                            marginLeft:'-30px'}
                                            ],
                                    title:'Mission Statement',
                                    text:'<p>TEDxNYUAD aspires to create a platform for members of the NYU Abu Dhabi student body to share their innovative ideas, achievements, and challenges. NYU Abu Dhabi, as a world-class research university with a worldly community, is home to stories that can shape our future. We see it as our mission to share these stories with the world and aim to inspire Abu Dhabi and, in particular, its youth, and show them that making an impact in the world is not an unimaginable task.</p>'
                                  }
                      }];
    
	// Render the view
	view.render('about');
	
};
