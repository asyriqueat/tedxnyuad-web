var keystone = require('keystone');

exports = module.exports = function(req, res) {
	
	var view = new keystone.View(req, res),
		locals = res.locals;
	
	// locals.section is used to set the currently selected
	// item in the header navigation.
	locals.section = 'event';
    
    locals.content = [{ template:'focus',
                        macro:'standard',
                        arguments:{ text:'<p>At TEDxNYUAD we believe in opening new horizons and broadening our perspectives. As we dream to inspire people to make an impact, this year we have assembled a host of speakers who question how we view the world. We want to take our audience on a journey of the unconventional.</p><p>For TEDxNYUAD 2015 we will be exploring the theme <span style="color:red">Question.</span>Our speakers will be sharing their untold stories as they redefine the concepts of home and memory, provide a fresh look on traditions and videogaming, change the way we see – or don’t see – chess, and show the true power of youth.',
                                    theme:'Question.'
                        }
                      },
                      { template:'panorama',
                        macro:'standard',
                        arguments:{src:'venue.jpg',
                                   text:'<h4>Venue</h4>TEDxNYUAD 2015 will take place in the modern Conference Center at the new campus of New York University Abu Dhabi.'
                                  }
                      }];
    
	// Render the view
	view.render('event');
	
};
