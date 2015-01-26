var keystone = require('keystone');

exports = module.exports = function(req, res) {
	
	var view = new keystone.View(req, res),
		locals = res.locals;
	
	// locals.section is used to set the currently selected
	// item in the header navigation.
    locals.content = [{ template:'panorama',
                        macro:'standard',
                        arguments:{ right:'15px',
                                    text:'<h4>Jovan Jovancevic</h4>My talk is about raising awareness of and teach training methods connected to playing blindfold chess.',
                                    src:'speakers/Jovan.jpg'}
                      },
                      { template:'blog',
                        macro:'standard',
                        arguments:{ posts:[{title:'TEDxNYUAD 2015 in the Pipeline!',
                                            src:'http://demo.duotive.org/duotive-5ive/wp-content/uploads/2012/06/slideshow_full-width_01.jpg',
                                            comments:'Wuhu',
                                            published:'Awesome Sauce',
                                            text:'<p>Most of us have heard of ‘TED Talks’, these awe-inspiring, sheer ingenuous and empowering talks that revolve around the theme of innovation, change and, simply said, thinking a little differently. TED has become a global phenomenon because it provides a platform for people to share their ideas and stories. What is truly resonating about TED itself, is the fact that anyone could be a TED speaker. Everyone has a story worth telling, and this year, NYUAD will bring these stories to Abu Dhabi.</p><p>What’s your story?</p><p>We asked this simple question back in October 2014 and the responses we received, varied. We could honestly say that no two applications were alike. After calling for auditions, 60 applicants were narrowed down to just 12 speakers, each with a unique story to tell.</p><p>This April 2015, NYUAD will be hosting its very first TEDx conference. TEDxNYUAD is going to be a TEDx conference unlike any other. In a university that is still new and building from a blank slate, the student body has such varied and dynamic experiences that go unshared. Within this diverse community, countless students have incredible stories about what they have achieved before and during their time at NYUAD; stories of struggle, aspiration, and change. However these stories have yet to be told. TEDxNYUAD aims to provide the opportunity not only for individuals to convey their stories, but most importantly to give them the chance to move, inspire and truly affect the community of Abu Dhabi.</p><p>The university’s first TEDx conference will include speakers from the United Arab Emirates, Argentina, Brazil, Chile, Ethiopia, India, Montenegro, Ukraine, United Kingdom, Netherlands, and Qatar. Each speaker will address a personal topic in their talk and convince you of its moral.</p><p>A myriad of stories to be told</p>The creative writing instructor Robert McKee said that, “Stories are the creative conversion of life itself into a more powerful, clearer, more meaningful experience. They are the currency of human contact.”</p><p>TEDxNYUAD is not just an opportunity for everyone to engage in an exchange of ideas and experiences, but it will equally be an opportunity for the university to reach out to the local community and the larger region itself!</p><p>We hope that, this April, you will join us at the live event either in person or through live streaming as we unearth the stories that make NYUAD what it is today; a university which hosts a diverse and unique body of students that are in the process of finding themselves. Their shared feeling of belonging, their curiosity for the other and their ambitions are what makes our community what it is. Join us for a day when we not only listen to the unique stories students have to share, but also partake in the spirit of NYUAD.</p><p>Information on the speakers and their topics have been published online with the launch of our new website!</p>'
                                            }]
                                   }
                      }];
    
	// Render the view
	view.render('index');
	
};
