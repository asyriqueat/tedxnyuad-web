var locals = {};
locals.content = [{ template:'speakers',
                    macro:'standard',
                    arguments:{ 
                        speakers:[{
                              name:'Krishna Gaire',
                              id:1,                  
                              year:'Sophomore',
                              origin:'Nepal',
                              srcScreen:'/images/speakers/module/amer.jpg',
                              srcThumb:'/images/speakers/module/amer-thumb.jpg', 
                              topic:'Making students lucky',
                              text:'<p>Krishna made it to an U.S. American university from Nepal. He was lucky, though luck not in a four-leaf clover way, but through various opportunities. In his talk, Krishna describes his new initiative makes other students lucky.</p>'
                              },
                              {name:'Chaeri Lee',
                              id:2,            
                              year:'Alumni',
                              origin:'South Korea',
                              srcScreen:'/images/speakers/module/attilio.jpg',
                              srcThumb:'/images/speakers/module/attilio-thumb.jpg',
                              topic:'Where is Waldo really?',
                              text:'<p>Where is Waldo really? A seemingly simple question on a university application form got Chaeri thinking. What happens if we described ourselves not by what or who we are, but by where we are? In her talk, Chaeri will reflect on self-identity and how we define ourselves.</p>'
                              },
                              {name:'Mariam ElZoghbi',
                              id:3,        
                              year:'Sophomore',
                              origin:'Egypt',
                              srcScreen:'/images/speakers/module/charlotte.jpg',
                              srcThumb:'/images/speakers/module/charlotte-thumb.jpg',
                              topic:'Revolution of Home',
                              text:'<p>In January 2011, there were violent revolutions in Egypt. Mariam was trapped in her home, one day making molotov cocktails and the next baking a cake! In her talk, Mariam tells us her story of those revolutions and how Cairo remains as her home. </p>'
                              },
                              {name:'Amal Al Gergawi',               
                              id:4,        
                              year:'Sophomore',
                              origin:'United Arab Emirates',
                              srcScreen:'/images/speakers/module/hayat.jpg',
                              srcThumb:'/images/speakers/module/hayat-thumb.jpg',
                              topic:'',
                              text:'<p>As an Emirati, Amal is proud of the traditions and culture in which she lives. Yet sometimes she cannot help feeling a little distant as she thinks about her Egyptian roots through her mother. In her talk, Amal shares her thoughts on her transnationalism and encourages us to embrace the diversity of our heritage.</p>'
                              },
                              {name:'Doug Cutchins',
                              id:5,           
                              year:'Freshman',
                              origin:'USA',
                              srcScreen:'/images/speakers/module/jovan.jpg',
                              srcThumb:'/images/speakers/module/jovan-thumb.jpg',
                              topic:'How to win a Rhode’s Scholarship',
                              text:'<p>Doug is a beloved and successful careers advisor at NYUAD. He has an impressive track record of advising two dozen Rhodes national finalists, and four Rhodes scholarship recipients. In his talk, Doug will unveil his key to success and question what success really is!</p>'
                              },
                              {name:'Jessica Mow',
                              id:6,           
                              year:'Freshman',
                              origin:'USA',
                              srcScreen:'/images/speakers/module/maitha.jpg',
                              srcThumb:'/images/speakers/module/maitha-thumb.jpg',
                              topic:'',
                              text:'<p>After graduating from Tufts University, Jessica came to NYUAD to be a Research Assistant in the Neuroscience of Language Lab. As well as her interest in science, Jessica has a passion for media and has been involved in print and radio media. Science and media have a complicated relationship with the ability to educate or misinform. In her talk, Jessica explores this relationship and suggests ways we could be more effective in our efforts.</p>'
                              },
                              {name:'Yahya John Scaccia',
                              id:7,           
                              year:'Graduate',                               
                              origin:'USA',                    
                              srcScreen:'/images/speakers/module/meera.jpg',      
                              srcThumb:'/images/speakers/module/meera-thumb.jpg',
                              topic:'My Jihad ',
                              text:'<p>Jihad in Arabic means an act of struggle. On receiving his offer to attend New York University Abu Dhabi, Yahya received a less-than-supportive letter from his grandmother. She said ”Your decision that you make now will affect you for the rest of your life” and she was right. In his talk, Yahya addresses the letter and discusses his jihad is to raise awareness of the true values and beauty of Islam.</p>'
                              },
                              {name:'Joanna Bui',
                              id:8,
                              year:'Senior',
                              origin:'Australia',
                              srcScreen:'/images/speakers/module/mohit.jpg',
                              srcThumb:'/images/speakers/module/mohit-thumb.jpg',
                              topic:'Linear Kharma',
                              text:'<p>What goes around comes around? That’s what they say, but what if in your decisions today include thoughts of the past and future and what you do today goes on to affect someone else? Joey’s parents fled the Vietnam War and arrived in Australia as refugees. Today she has the immigrant drive to do well not only for herself, but also for her parents and her grandparents. In her talk, Joey will present the idea of linear kharma in which what you do today can inspire and impact others for the greater good.</p>'
                              }]
                              }
                  },
                  { template:'panorama',
                    macro:'standard',
                    arguments:{src:'venue.jpg',
                               text:'<h4>Venue</h4>TEDxNYUAD 2015 will take place in the modern Conference Center at the new campus of New York University Abu Dhabi.'
                              }
                  }];



$( document ).ready(function() {
    var speaker; //In ID
    speaker = getHash();
    
    //The url linked directly to a speaker
    if(speaker){
        $("#speakers-overview").hide();
        $("#speakers-presentation").hide();
        var speakerData = $.grep(locals.content[0].arguments.speakers, function(e){ return e.id == speaker; });
        
        $("#speakers-presentation-content").delay(0).queue(function(next){ 
            $(this).html("<h3>"+speakerData[0].topic+"</h3><h4>"+speakerData[0].name+", "+speakerData[0].origin+"</h4>"+speakerData[0].text);
            $("#speakers-presentation").fadeIn(200);
            next();
        });

        //Add the image to the HTML, i.e. lazy-load the image
        //http://stackoverflow.com/questions/12206443/click-thumbnail-and-load-image-into-empty-div
        $('.speakers').delay(0).queue(function(next){ 
            $(this).css('background-image','url('+speakerData[0].srcScreen+')'); 
            next();
        });
        
        $("#speakers-menu").delay(200).slideDown(200);
    }
    
    //Initialise tooltips
    $('[data-toggle="tooltip"]').tooltip({
        'placement': 'right'
    });
    
    $('a[id^="speaker-"]').click( function (e){
        
        //Get speaker id
        var id = getId($(this).attr('id'));
        //Get speaker data
        var speakerData = $.grep(locals.content[0].arguments.speakers, function(e){ return e.id == id; });
        if(!speaker){
            $("#speakers-overview").fadeOut(200);
            $("#speakers-menu").delay(200).slideDown(200);
        }
        
        $("#speakers-presentation").fadeOut(200);
        
        $("#speakers-presentation-content").delay(200).queue(function(next){ 
            $(this).html("<h3>"+speakerData[0].topic+"</h3><h4>"+speakerData[0].name+", "+speakerData[0].origin+"</h4>"+speakerData[0].text);
            $("#speakers-presentation").fadeIn(200);
            next();
        });

        //Add the image to the HTML, i.e. lazy-load the image
        //http://stackoverflow.com/questions/12206443/click-thumbnail-and-load-image-into-empty-div
        $('.speakers').delay(200).queue(function(next){ 
            $(this).css('background-image','url('+speakerData[0].srcScreen+')'); 
            next();
        });
        
        //Change selected speaker
        speaker = id;
        console.log('Switching to speaker: '+speaker);
    });
                                 
    $('a[id^="speaker-"]').hover(function(e){
                                    if(speaker!=null){
                                        var id=getId($(this).attr('id'));
                                        console.log('#thumb-info-'+id);
                                        $('#thumb-info-'+id).fadeIn(200);
                                    }
                                 }, 
                                 function(e){
                                    if(speaker!=null){
                                        var id=getId($(this).attr('id'));
                                        $('#thumb-info-'+id).fadeOut(200);
                                    }
    });
                                

    
    function getHash(){
        if(window.location.hash != ''){
           return window.location.hash.slice(1);
        }
        return false;
    }
    
    function getId(name){
        return name.slice(8);
    }
    
});