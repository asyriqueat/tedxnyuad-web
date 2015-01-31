var locals = {};
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



$( document ).ready(function() {
    var speaker; //In ID
    
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
        $('#speakers-image').fadeOut(200)
        
        $("#speakers-presentation-content").delay(200).queue(function(next){ 
            console.log('cahnage');
            $(this).html("<h3>"+speakerData[0].topic+"</h3><h4>"+speakerData[0].name+", "+speakerData[0].origin+"</h4>"+speakerData[0].text);
            $("#speakers-presentation").fadeIn(200);
            next();
        });

        //Add the image to the HTML, i.e. lazy-load the image
        //http://stackoverflow.com/questions/12206443/click-thumbnail-and-load-image-into-empty-div
        $('#speakers-image').delay(200).queue(function(next){ 
            $(this).html('<img src='+speakerData[0].srcScreen+'>'); 
            $(this).fadeIn(200);
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
           var target = window.location.hash.slice(1);
        }
    }
    
    function getId(name){
        return name.slice(8);
    }
    
});