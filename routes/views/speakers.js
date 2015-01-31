var keystone = require('keystone');
    Newsletter = keystone.list('Newsletter'); //Required for newsletter signup

exports = module.exports = function(req, res) {
    
    var view = new keystone.View(req, res),
        locals = res.locals;
    
    // locals.section is used to set the currently selected
    // item in the header navigation.
    locals.section = 'speakers';
    
    locals.content = [{ template:'speakers',
                        macro:'standard',
                        arguments:{ 
                            speakers:[{ name:'Mohit Mandal',
                                        id:1,
                                        year:'Senior',
                                        origin:'India/Bangladesh',
                                        srcScreen:'/images/speakers/module/mohed.jpg',
                                        srcThumb:'/images/speakers/module/mohed-thumb.jpg',
                                        topic:'Street-cricket with Strangers',
                                        text:'<p>In spring of sophomore year, I played street-cricket with a group of Pakistani, Indian and Bangladeshi hairdressers in the abandoned parking lot of a mall in Abu Dhabi. They are only a few of the several millions of migrant workers in the Gulf whose rich stories, sadly, go untold.</p>'    
                                      },
                                      { name:'Vasily Rudchenko',
                                        id:2,
                                        year:'Sophomore',
                                        origin:'Ukraine',
                                        srcScreen:'http://hinhnenx.com/download/4639/1920x600_my-ipad-retina-wallpaper-landscapes-91_hinhnenx-wallpaperhd.jpg',
                                        srcThumb:'http://demo.duotive.org/duotive-5ive/wp-content/uploads/2012/06/slideshow_full-width_01.jpg',
                                        topic:'Human-centred Engineering',
                                        text:'<p>Most of us have heard of ‘TED Talks’, these awe-inspiring, sheer ingenuous and empowering talks that revolve around the theme of innovation, change and, simply said, thinking a little differently. TED has become a global phenomenon because it provides a platform for people to share their ideas and stories. What is truly resonating about TED itself, is the fact that anyone could be a TED speaker. Everyone has a story worth telling, and this year, NYUAD will bring these stories to Abu Dhabi. Everyone has a story worth telling, and this year, NYUAD will bring these stories to Abu Dhabi. Everyone has a story worth telling, and this year, NYUAD will bring these stories to Abu Dhabi.bring these</p>'    
                                      },
                                      { name:'Nikolai Kozak',
                                        id:3,
                                        year:'Senior',
                                        origin:'Chile/Argentina',
                                        srcScreen:'http://www.beach-backgrounds.com/wallpapers/kuramathi-island-maldives-wallpaper-1920x600-417.jpg',
                                        srcThumb:'http://demo.duotive.org/duotive-5ive/wp-content/uploads/2012/06/slideshow_full-width_01.jpg',
                                        topic:'Collective Mnemonics',
                                        text:'<p>A story about my father, my country, art, family, human rights, the future of our generation, and how to fix pretty much every problem in the world by understanding collective mnemonics - the memory we share and create collectively.</p>'    
                                      }]
                                  }
                      },
                      { template:'panorama',
                        macro:'standard',
                        arguments:{src:'venue.jpg',
                                   text:'<h4>Venue</h4>TEDxNYUAD 2015 will take place in the modern Conference Center at the new campus of New York University Abu Dhabi.'
                                  }
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
	view.render('speakers');
  
};

/*
// Takes in number of speakers.
//
// Returns Array [x,y,z] where x, y and z are the number of speakers per line and the Array.length + 1 is the number of rows. 
//
*/
function rowSetup(numOfSpeakers){
  var returnArray = [];
  while (numOfSpeakers >= 4){
    switch (returnArray[returnArray.length - 1]) {
      case 4:
        returnArray.push(3);
        numOfSpeakers -= 3;
        break;
      case 3:
        returnArray.push(4);
        numOfSpeakers -= 4;
        break;
      default:
        console.log("Error");
    }
  }
  switch (numOfSpeakers){
    case 0:
      break;
    case 1:
      if (returnArray[returnArray.length - 1] === 4){
        returnArray[returnArray.length - 1] = 3;
        returnArray.push(2);
      }
      else{
        returnArray.push(numOfSpeakers);
      }
      break;
    case 2:
      returnArray.push(numOfSpeakers);
      break;
    case 3:
      if (returnArray[returnArray.length - 1] === 4){
        returnArray.push(numOfSpeakers);
      }
      if (returnArray[returnArray.length - 1] === 3){
        returnArray[returnArray.length - 1] = 4;
        returnArray.push(2);
      }
      break;
    default:
      console.log("Failed at second condition");
  }
  return returnArray;
}
