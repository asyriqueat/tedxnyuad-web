$( document ).ready(function() {
    var speaker; //In ID
    
    //Initialise tooltips
    $('[data-toggle="tooltip"]').tooltip({
        'placement': 'right'
    });
    
    $('a[id^="speaker-"]').click( function (e){
        if(!speaker){
            $("#speakers-overview").fadeOut(200, function(e){
                                                                $("#speakers-menu").hide();
                                                                $("#speakers-menu").removeClass("hidden");
                                                                $("#speakers-menu").slideDown(300);
                                                            });
        }
        


        //Get speaker id
        var id = getId($(this).attr('id'));
        

        //Load new content
        $("#speakers-presentation").fadeOut(200, function(e){
                                                    console.log("complete");
                                                    $("#speakers-presentation-content").html("<h3>Header Text</h3>CONTENT");
                                                    $(this).fadeIn(200);

                                                    //Show the speaker's background image
                                                    $('#speakers-image').show();

                                                    //Add the image to the HTML, i.e. lazy-load the image
                                                    //http://stackoverflow.com/questions/12206443/click-thumbnail-and-load-image-into-empty-div
                                                    $('#speakers-image').html('<img src='+"http://www.beach-backgrounds.com/wallpapers/kuramathi-island-maldives-wallpaper-1920x600-417.jpg"+'>');
                                                });
            
            
        
        //Change selected speaker
        speaker = getId($(this).attr('id'));
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