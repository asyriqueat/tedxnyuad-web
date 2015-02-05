$( document ).ready(function() {
    if($( "html" ).height() < $( window ).height()){
        $("#footer").css({ position: "fixed", bottom:"0px", width:"100%" });
    }
});