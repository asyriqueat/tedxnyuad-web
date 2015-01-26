var keystone = require('keystone');

exports = module.exports = function(req, res) {
	
	var view = new keystone.View(req, res),
		locals = res.locals;
	
	// locals.section is used to set the currently selected
	// item in the header navigation.
	locals.section = 'speakers';
    
    locals.content = [{ template:'speakers',
                        macro:'standard',
                        arguments:{ 
                            speakers:[{ name:'Frederik Jensen',
                                        id:1,
                                        srcScreen:'http://demo.duotive.org/duotive-5ive/wp-content/uploads/2012/06/slideshow_full-width_01.jpg',
                                        srcThumb:'http://demo.duotive.org/duotive-5ive/wp-content/uploads/2012/06/slideshow_full-width_01.jpg',
                                        topic:'Teaching the Nation',
                                        text:'<p>Most of us have heard of ‘TED Talks’, these awe-inspiring, sheer ingenuous and empowering talks that revolve around the theme of innovation, change and, simply said, thinking a little differently. TED has become a global phenomenon because it provides a platform for people to share their ideas and stories. What is truly resonating about TED itself, is the fact that anyone could be a TED speaker. Everyone has a story worth telling, and this year, NYUAD will bring these stories to Abu Dhabi.</p>'    
                                      },
                                      { name:'Frederik Jensen',
                                        id:1,
                                        srcScreen:'http://demo.duotive.org/duotive-5ive/wp-content/uploads/2012/06/slideshow_full-width_01.jpg',
                                        srcThumb:'http://demo.duotive.org/duotive-5ive/wp-content/uploads/2012/06/slideshow_full-width_01.jpg',
                                        topic:'Teaching the Nation',
                                        text:'<p>Most of us have heard of ‘TED Talks’, these awe-inspiring, sheer ingenuous and empowering talks that revolve around the theme of innovation, change and, simply said, thinking a little differently. TED has become a global phenomenon because it provides a platform for people to share their ideas and stories. What is truly resonating about TED itself, is the fact that anyone could be a TED speaker. Everyone has a story worth telling, and this year, NYUAD will bring these stories to Abu Dhabi.</p>'    
                                      },
                                      { name:'Frederik Jensen',
                                        id:1,
                                        srcScreen:'http://demo.duotive.org/duotive-5ive/wp-content/uploads/2012/06/slideshow_full-width_01.jpg',
                                        srcThumb:'http://demo.duotive.org/duotive-5ive/wp-content/uploads/2012/06/slideshow_full-width_01.jpg',
                                        topic:'Teaching the Nation',
                                        text:'<p>Most of us have heard of ‘TED Talks’, these awe-inspiring, sheer ingenuous and empowering talks that revolve around the theme of innovation, change and, simply said, thinking a little differently. TED has become a global phenomenon because it provides a platform for people to share their ideas and stories. What is truly resonating about TED itself, is the fact that anyone could be a TED speaker. Everyone has a story worth telling, and this year, NYUAD will bring these stories to Abu Dhabi.</p>'    
                                      }]
                                  }
                      },
                      { template:'panorama',
                        macro:'standard',
                        arguments:{src:'venue.jpg',
                                   text:'<h4>Venue</h4>TEDxNYUAD 2015 will take place in the modern Conference Center at the new campus of New York University Abu Dhabi.'
                                  }
                      }];
    
	// Render the view
	view.render('speakers');
	
};
