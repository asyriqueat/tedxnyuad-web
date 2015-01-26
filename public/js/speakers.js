$( document ).ready(function() {
    var speaker; //In ID
    
    $('a[id^="speaker-"]').click( function (e){
        if(!speaker){
            $("#speakers-overview").fadeOut(200);
            $("speakers-menu").removeClass("hidden");
            $("#speakers-menu").slideDown(300);
            $("#speakers-presentation").fadeIn(200);
        }else{
            //Load new background image and change content
            $("#speakers-presentation").fadeOut(200, 
                                                {complete:  function(){
                                                                $("#speakers-presentation-content").html = "<h3>Header Text</h3>CONTENT";                                        
                                                                $(this).fadeIn(200);
                                                            }
                                                });
            
            
        }
        speaker = getId($(this).name);
        console.log('Switching to speaker: '+speaker);
    });
                                 
    $('a[id^="speaker-"]').hover(function(e){
                                    if(speaker!=null){
                                        var id=getId($(this));
                                        $('#thumb-info-'+id).fadeIn(200);
                                    }
                                 }, 
                                 function(e){
                                    if(speaker!=null){
                                        var id=getId($(this));
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