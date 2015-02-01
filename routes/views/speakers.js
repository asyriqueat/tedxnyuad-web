/*
// Define speakers here.
//
// The Array will be passed into locals.content
//
*/

speakersArray = [{name:'Frederik Jensen',
                  id:1,
                  srcScreen:'http://demo.duotive.org/duotive-5ive/wp-content/uploads/2012/06/slideshow_full-width_01.jpg',
                  srcThumb:'http://demo.duotive.org/duotive-5ive/wp-content/uploads/2012/06/slideshow_full-width_01.jpg',
                  topic:'Teaching the Nation',
                  text:'<p>Most of us have heard of ‘TED Talks’, these awe-inspiring, sheer ingenuous and empowering talks that revolve around the theme of innovation, change and, simply said, thinking a little differently. TED has become a global phenomenon because it provides a platform for people to share their ideas and stories. What is truly resonating about TED itself, is the fact that anyone could be a TED speaker. Everyone has a story worth telling, and this year, NYUAD will bring these stories to Abu Dhabi.</p>'    
                },
                { name:'Frederik Jensen',
                  id:2,
                  srcScreen:'htt;p://hinhnenx.com/download/4639/1920x600_my-ipad-retina-wallpaper-landscapes-91_hinhnenx-wallpaperhd.jpg',
                  srcThumb:'http://demo.duotive.org/duotive-5ive/wp-content/uploads/2012/06/slideshow_full-width_01.jpg',
                  topic:'Teaching the Nation',
                  text:'<p>Most of us have heard of ‘TED Talks’, these awe-inspiring, sheer ingenuous and empowering talks that revolve around the theme of innovation, change and, simply said, thinking a little differently. TED has become a global phenomenon because it provides a platform for people to share their ideas and stories. What is truly resonating about TED itself, is the fact that anyone could be a TED speaker. Everyone has a story worth telling, and this year, NYUAD will bring these stories to Abu Dhabi.</p>'    
                },
                { name:'Frederik Jensen',
                  id:3,
                  srcScreen:'http://www.beach-backgrounds.com/wallpapers/kuramathi-island-maldives-wallpaper-1920x600-417.jpg',
                  srcThumb:'http://demo.duotive.org/duotive-5ive/wp-content/uploads/2012/06/slideshow_full-width_01.jpg',
                  topic:'Teaching the Nation',
                  text:'<p>Most of us have heard of ‘TED Talks’, these awe-inspiring, sheer ingenuous and empowering talks that revolve around the theme of innovation, change and, simply said, thinking a little differently. TED has become a global phenomenon because it provides a platform for people to share their ideas and stories. What is truly resonating about TED itself, is the fact that anyone could be a TED speaker. Everyone has a story worth telling, and this year, NYUAD will bring these stories to Abu Dhabi.</p>'    
                },
                { name:'Frederik Jensen',
                  id:4,
                  srcScreen:'http://www.beach-backgrounds.com/wallpapers/kuramathi-island-maldives-wallpaper-1920x600-417.jpg',
                  srcThumb:'http://demo.duotive.org/duotive-5ive/wp-content/uploads/2012/06/slideshow_full-width_01.jpg',
                  topic:'Teaching the Nation',
                  text:'<p>Most of us have heard of ‘TED Talks’, these awe-inspiring, sheer ingenuous and empowering talks that revolve around the theme of innovation, change and, simply said, thinking a little differently. TED has become a global phenomenon because it provides a platform for people to share their ideas and stories. What is truly resonating about TED itself, is the fact that anyone could be a TED speaker. Everyone has a story worth telling, and this year, NYUAD will bring these stories to Abu Dhabi.</p>'    
                },
                { name:'Frederik Jensen',
                  id:5,
                  srcScreen:'http://www.beach-backgrounds.com/wallpapers/kuramathi-island-maldives-wallpaper-1920x600-417.jpg',
                  srcThumb:'http://demo.duotive.org/duotive-5ive/wp-content/uploads/2012/06/slideshow_full-width_01.jpg',
                  topic:'Teaching the Nation',
                  text:'<p>Most of us have heard of ‘TED Talks’, these awe-inspiring, sheer ingenuous and empowering talks that revolve around the theme of innovation, change and, simply said, thinking a little differently. TED has become a global phenomenon because it provides a platform for people to share their ideas and stories. What is truly resonating about TED itself, is the fact that anyone could be a TED speaker. Everyone has a story worth telling, and this year, NYUAD will bring these stories to Abu Dhabi.</p>'    
                },
                { name:'Frederik Jensen',
                  id:6,
                  srcScreen:'http://www.beach-backgrounds.com/wallpapers/kuramathi-island-maldives-wallpaper-1920x600-417.jpg',
                  srcThumb:'http://demo.duotive.org/duotive-5ive/wp-content/uploads/2012/06/slideshow_full-width_01.jpg',
                  topic:'Teaching the Nation',
                  text:'<p>Most of us have heard of ‘TED Talks’, these awe-inspiring, sheer ingenuous and empowering talks that revolve around the theme of innovation, change and, simply said, thinking a little differently. TED has become a global phenomenon because it provides a platform for people to share their ideas and stories. What is truly resonating about TED itself, is the fact that anyone could be a TED speaker. Everyone has a story worth telling, and this year, NYUAD will bring these stories to Abu Dhabi.</p>'    
                },
                { name:'Frederik Jensen',
                  id:7,
                  srcScreen:'http://www.beach-backgrounds.com/wallpapers/kuramathi-island-maldives-wallpaper-1920x600-417.jpg',
                  srcThumb:'http://demo.duotive.org/duotive-5ive/wp-content/uploads/2012/06/slideshow_full-width_01.jpg',
                  topic:'Teaching the Nation',
                  text:'<p>Most of us have heard of ‘TED Talks’, these awe-inspiring, sheer ingenuous and empowering talks that revolve around the theme of innovation, change and, simply said, thinking a little differently. TED has become a global phenomenon because it provides a platform for people to share their ideas and stories. What is truly resonating about TED itself, is the fact that anyone could be a TED speaker. Everyone has a story worth telling, and this year, NYUAD will bring these stories to Abu Dhabi.</p>'    
                }];

/*
// Takes in number of speakers.
//
// Returns Array [x,y,z] where x, y and z are the number of speakers per line and the Array.length + 1 is the number of rows. 
//
*/
function rowSetup(numOfSpeakers){
  switch(numOfSpeakers){
    case 0:
      break;
    case 1:
      return [1];
      break;
    case 2:
      return [2];
      break;
    case 3:
      return [3];
      break;
    case 4:
      return [4];
      break;
    case 5:
      return [3,2];
      break;
    case 6:
      return [3,3];
      break;
    case 7:
      return [4,3];
      break;
    case 8:
      return [3,2,3];
      break;
    case 9:
      return [3,3,3];
      break;
    case 10:
      return [3,4,3];
      break;
    case 11:
      return [4,3,4]
      break;
    case 12:
      return [3,4,3,2];
      break;
    case 13:
      return [3,4,3,3];
      break;
    case 14:
      return [4,3,4,3];
      break;
    case 15:
      return [3,4,3,2,3];
      break;
    case 16:
      return [4,3,4,3,2];
      break;
    case 17:
      return [3,4,3,4,3];
      break;
    case 18:
      return [4,3,4,3,4];
      break;
    case 19:
      return [3,4,3,4,3,2];
      break;
    case 20:
      return [3,4,3,4,3,3];
      break;
    default:
      return [numOfSpeakers];
  }
}

function speakerArrangement(immutableSpeakersArray, arrangementArray){
  var speakerList = [];
  var speakersArray = immutableSpeakersArray.slice();
  for (num in arrangementArray) {
    console.log(arrangementArray[num]);
    var internalList = [];
    bsClass = 12/arrangementArray[num];
    for(var speaker = 0;speaker < arrangementArray[num]; speaker++){
      internalList.push(speakersArray[0]);
      internalList[speaker]["bsClass"] = bsClass;
      speakersArray.shift();
    }
    speakerList.push(internalList);
  }
  return speakerList;
}

//Start keystone templating
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
                            speakers: speakersArray,
                            arrangement: rowSetup(speakersArray.length),
                            speakerRows: speakerArrangement(speakersArray, rowSetup(speakersArray.length))
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