var keystone = require('keystone');
    Newsletter = keystone.list('Newsletter'); //Required for newsletter signup

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
                      },
                      { template:'standard',
                       macro:'standard',
                       arguments:{ title:'About TEDx, x = independently organized event',
                                  text:'<p>In the spirit of ideas worth spreading, TEDx is a program of local, self-organized events that bring people together to share a TED-like experience. At a TEDx event, TED Talks video and live speakers combine to spark deep discussion and connection. These local, self-organized events are branded TEDx, where x = independently organized TED event. The TED Conference provides general guidance for the TEDx program, but individual TEDx events are self-organized.</p><p><a href="http://ted.com/tedx">Read more about TEDx</a></p>'}
                      },{
                          template:'standard',
                          macro:'standard',
                          arguments:{
                              title:'About TED',
                              text:'<p>TED is a nonprofit organization devoted to Ideas Worth Spreading. Started as a four-day conference in California 30 years ago, TED has grown to support its mission with multiple initiatives. The two annual TED Conferences invite the world\'s leading thinkers and doers to speak for 18 minutes or less. Many of these talks are then made available, free, at TED.com. TED speakers have included Bill Gates, Jane Goodall, Elizabeth Gilbert, Sir Richard Branson, Nandan Nilekani, Philippe Starck, Ngozi Okonjo-Iweala, Sal Khan and Daniel Kahneman.</p><p>The annual TED Conference takes place each spring in Vancouver, British Columbia, along with the TEDActive simulcast event in nearby Whistler. The annual TEDGlobal conference will be held this October in Rio de Janeiro, Brazil. TED\'s media initiatives include TED.com, where new TED Talks are posted daily; the Open Translation Project, which provides subtitles and interactive transcripts as well as translations from volunteers worldwide; the educational initiative TED-Ed. TED has established the annual TED Prize, where exceptional individuals with a wish to change the world get help translating their wishes into action; TEDx, which supports individuals or groups in hosting local, self- organized TED-style events around the world, and the TED Fellows program, helping world-changing innovators from around the globe to amplify the impact of their remarkable projects and activities.'}
                      }];
    
    
    //Required for newsletter signup
    locals.formData = req.body || {};
    view.on('post', { action: 'newsletter' }, function(next) {
		var newNewsletter = new Newsletter.model(),
			updater = newNewsletter.getUpdateHandler(req);

        updater.process(req.body, {
			flashErrors: true,
			fields: 'email',
			errorMessage: 'There was a problem submitting your enquiry:'
		}, function(err) {
			if (err) {
				locals.validationErrors = err.errors;
			} else {
				locals.newsletterSignup = true;
			}
			next();
		});
	});
    //--------------
    
	// Render the view
	view.render('about');
	
};
