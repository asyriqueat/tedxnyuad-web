var locals = {};
locals.content = [{ template:'speakers',
                    macro:'standard',
                    arguments:{ 
                        speakers:[{
                                    name:'Jovan',                   
                                    id:1,
                                    year:'Freshman',
                                    origin:'United States/Canada',
                                    srcScreen:'/images/team/module/adam.jpg',
                                    srcThumb:'/images/team/module/adam-thumb.jpg',
                                    topic:'',
                                    text:'<p>Hi, my name is Adam Ladhani, and I was born in the city of Hamilton in Canada. ' +
                                    'I am part of the TEDxNYUAD team because I think that the ideas shared at these conferences ' +
                                    'can have the power to positively impact the world.  I am helping out with the marketing and ' +
                                    'logistics for the conference.  My favorite sound is a mandazi being dropped into the frying pan.</p>'
                                  },
                                  {
                                    name:'Alf Lim',                   
                                    id:2,
                                    year:'Senior',
                                    origin:'Norway',                    
                                    srcScreen:'/images/team/module/alf.jpg',
                                    srcThumb:'/images/team/module/alf-thumb.jpg',
                                    topic:'',
                                    text:'<p>Hi, my name is Alf, and just Alf. No –red, no –renzo, no –ajores ending needed. I was born and raised in the ' +
                                    'Kingdom of Arendal (yes, the place featured in the movie Frozen!) I am part of TEDxNYUAD because of my past experiences ' +
                                    'in conference planning both in Abu Dhabi and abroad. I’m really good at being hungry during meetings and I love the ' +
                                    'sound of stepping on fresh snow. Two essential traits needed to plan TEDxNYUAD!</p>'
                                  },
                                  {
                                    name:'Asyrique Thevendran',
                                    id:3,
                                    year:'Sophomore',
                                    origin:'Malaysia',
                                    srcScreen:'/images/team/module/ash.jpg',
                                    srcThumb:'/images/team/module/ash-thumb.jpg',
                                    topic:'',
                                    text:"<p> Howdy! I'm Asyrique from sunny, tropical Malaysia. I am a connoisseur of clean code, an avid supporter " +
                                    "of function over form and a believer in the power of a good story. Hence, getting involved in TEDxNYUAD was the " +
                                    "natural thing to do! I love the sound of rain falling on deciduous tree leaves, as  it reminds me of the monsoons back home.</p>"
                                  },
                                  {
                                    name:'Frederik Jensen',                   
                                    id:4,         
                                    year:'Freshman',              
                                    origin:'Denmark',                                   
                                    srcScreen:'/images/team/module/frederik.jpg',    
                                    srcThumb:'/images/team/module/frederik-thumb.jpg',
                                    topic:'',
                                    text:'<p>Hello there, I am Frederik, a Danish geek and traveler by heart. I love to tinker with ' +
                                    'systems and design which is one of the many reasons I am a part of the TEDxNYUAD! Hopefully, it ' +
                                    'will become a fantastic flagship project which students, immigrants and citizens of the Abu Dhabi ' +
                                    'community will gather around in the years to come! I love the sound of a crunchy cereal breakfast ' +
                                    'consisting of oatmeal, banana, milk and raisins!</p>'
                                  },
                                  {
                                    name:'Harshini Karunaratne',
                                    id:5,
                                    year:'Freshman',
                                    origin:'Sri Lanka/Peru',
                                    srcScreen:'/images/team/module/harshini.jpg',
                                    srcThumb:'/images/team/module/harshini-thumb.jpg',
                                    topic:'',
                                    text:'<p>Hi there! I’m Harshini, an Asian-Latino with a passion for photography. Born and raised ' +
                                    'in Sri Lanka, but I am also half Peruvian. I’m helping out TEDxNYUAD with marketing, logistics ' +
                                    'and photography stuff. I’m someone who’s nocturnal and so I go to sleep really late but at the ' +
                                    'same time there never seems to be enough hours in a day. Two things I really love is the sound ' +
                                    'of birds chirping in the morning, and being part of TEDxNYUAD!</p>'
                                  },
                                  {
                                    name:'Lillian Leung',
                                    id:6,
                                    year:'Sophomore',
                                    origin:'Hong Kong/United States',
                                    srcScreen:'/images/team/module/lillian.jpg',
                                    srcThumb:'/images/team/module/lillian-thumb.jpg',
                                    topic:'',
                                    text:"<p>Hello! I'm from Hong Kong, Chicago, and New York and consider all three cities home. " +
                                    "I am involved in TEDxNYU, which connected me with TEDxNYUAD during my semester abroad in Abu Dhabi. " +
                                    "Apart from working with speakers, I make sure the TEDxNYUAD team is well-fed at all times " +
                                    "(ahem…please see Alf’s bio above) and drive the team crazy with my OCD. </p>"
                                  },
                                  {
                                    name:'Luka Vasilj',
                                    id:7,
                                    year:'Senior',
                                    origin:'Bosnia and Herzegovina',
                                    srcScreen:'/images/team/module/luka.jpg',
                                    srcThumb:'/images/team/module/luka-thumb.jpg',
                                    topic:'',
                                    text:"<p>Hey there! I’m Luka, a walking, talking identity crisis who can’t really answer where he’s " +
                                    "from, though my passports say Croatia and Bosnia. I’m part of TEDxNYUAD because of the inspiration I " +
                                    "felt upon hearing some of the stories. I’m incomparably good at doing weird stuff with my ears, and my " +
                                    "favorite sound is the sound of scissors slowly closing. </p>"
                                  },
                                  {
                                    name:'Maria Soto',
                                    id:8,
                                    year:'Senior',
                                    origin:'Colombia',
                                    srcScreen:'/images/team/module/maria.jpg',
                                    srcThumb:'/images/team/module/maria-thumb.jpg',
                                    topic:'',
                                    text:'<p>Hi, my name is Maria Paula but people just call me Mapi. I was born in Colombia, not Columbia ' +
                                    'people, and more specifically Cali. I am part of the TEDxNYUAD because of my past experiences in event ' +
                                    'planning in both Abu Dhabi and abroad and feel incredibly lucky to be part of such an amazing team. ' +
                                    'I am really good at getting into silly arguments over soccer, or I should say football, and I love the ' +
                                    'sound of popping bubble wrap.</p>'
                                  },
                                  {
                                    name:'Matthew French',
                                    id:9,
                                    year:'Senior',
                                    origin:'United States',
                                    srcScreen:'/images/team/module/matt.jpg',
                                    srcThumb:'/images/team/module/matt-thumb.jpg',
                                    topic:'',
                                    text:'<p>Hello all! I’m Matt from Cape Cod, Massachusetts, USA. I grew up in a small town and so I decided ' +
                                    'to attend NYUAD to try to see a bit more of the world. I am a part of the speaker management team of ' +
                                    'TEDxNYUAD, guiding the selected speakers in organizing their upcoming speeches. I am particularly good ' +
                                    'at making snowflakes and burritos and I cannot stand the sound of suction.</p>'
                                  },
                                  {
                                    name:'Neel Vohra',
                                    id:10,
                                    year:'Freshman',
                                    origin:'India',
                                    srcScreen:'/images/team/module/neel.jpg',
                                    srcThumb:'/images/team/module/neel-thumb.jpg',
                                    topic:'',
                                    text:"<p>Hi, my name is Neel and I was born in China but have been raised all over the world. " +
                                    "I’m originally from India but have lived in all corners of the globe - be it the U.K. or Peru " +
                                    "or Pakistan or Kenya, and the list goes on. I’m a part of TEDxNYUAD because of the fantastic " +
                                    "journey that it has been so far, and promises to continue to do so. I’m really good at being " +
                                    "late to everything, but only by a couple of minutes. I love silence. </p>"
                                  },
                                  {name:'Ramina Sotoudeh',
                                  id:11,
                                  year:'Senior',
                                  origin:'Iran',
                                  srcScreen:'/images/team/module/ramina.jpg',
                                  srcThumb:'/images/team/module/ramina-thumb.jpg',
                                  topic:'',
                                  text:'<p>My name is Ramina and I was born in the great metropolis of Tehran, Iran. My family and I moved to Dubai in 2001. I am part of the TEDxNYUAD organizing team because I believe in the power of ideas and TED talks have greatly influenced the way I see the world. I think there is no greater joy than hearing the sound of little pieces of junk going up the vacuum cleaner tube and I proudly admit that I\'m really good at pretending to flip tables.</p>'
                                 },
                              {
                                name:'Sheba Vohra',
                                id:12,
                                year:'Sophomore',
                                origin:'India',
                                srcScreen:'/images/team/module/sheba.jpg',
                                srcThumb:'/images/team/module/sheba-thumb.jpg',
                                topic:'',
                                text:'<p>Hello! My name is Sheba and I am from India but currently live in Peru. My passion ' +
                                'lies in film and sociology which I am currently pursuing as a sophomore at NYUAD. These interests ' +
                                'have made me aware that each individual has a unique story to tell and I joined TEDxNYUAD to ' +
                                'provide fellow students with a platform on which to be able to share their own. I am good at ' +
                                'baking pre-packaged cakes, and love the sound of hermetically-sealed beverages opening ' +
                                '(i.e. Snapple bottles when they pop). </p>'
                              },
                              {
                                name:'Stephen Kho',
                                id:13,
                                year:'Sophomore',
                                origin:'The Netherlands',
                                srcScreen:'/images/team/module/stephen.jpg',
                                srcThumb:'/images/team/module/stephen-thumb.jpg',
                                topic:'',
                                text:"<p>Hi there! My name is Stephen, I was born and raised in Amsterdam, the Netherlands. " +
                                "Being part of TEDxNYU's Global Ops team has shown me what an impact TEDx can have on our communities " +
                                "(and beyond), which is why I joined the TEDxNYUAD team! I'm particularly good at putting together IKEA " +
                                "furniture and love the sound of a tennis ball scratching the net. </p>"
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

    //Initialise tooltips
    $('[data-toggle="tooltip"]').tooltip({
        'placement': 'right'
    });
    
    //Only for about us to remove ":"
    $('[data-original-title]').each(function(e){
        value = $(this).attr('data-original-title');
        value = value.substring(0,value.length-2);

        $(this).attr('data-original-title',value);
    });
    
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
    }
    
    function getId(name){
        return name.slice(8);
    }
    
});