var locals = {};

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
    
    console.log('getting json');
    $.ajax({
      dataType: "text",
      url: "/js/data/about.json",
      error: function(text,err){ console.log(err) },
      success:  function(data){
                    console.log("w");
                    locals.content = $.parseJSON(data).content;
                    console.log(locals.content);
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
                                                 
                    $('a[id^="speaker-"]').hover(
                        function(e){
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
                        }
                    );
    }});
        
    
    function getHash(){
        if(window.location.hash != ''){
           return window.location.hash.slice(1);
        }
    }
    
    function getId(name){
        return name.slice(8);
    }
    
});