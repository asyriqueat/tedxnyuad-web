$( document ).ready(function() {
    //Initialise tooltips
    $('[data-toggle="tooltip"]').tooltip({
        'placement': 'right'
    });
    
    if (location.hash) {
      setTimeout(function() {

        window.scrollTo(0, 0);
      }, 1);
    }
    
    $('#attend-tabs a').click(function (e) {
        e.preventDefault();
        $(this).tab('show');
    });

    
    //Store the currently selected tab in the hash value
    $("ul.nav-tabs > li > a").on("shown.bs.tab", function (e) {
        var id = $(e.target).attr("href").substr(1);
        e.preventDefault();
        window.location.hash = id;
        $('body').scrollTop(0);
    });

    //On load of the page: switch to the currently selected tab
    var hash = window.location.hash;
    $('#attend-tabs a[href="' + hash + '"]').tab('show');
    
    
    $('#facebook').click(function(e){
        e.preventDefault();
        FB.ui({
          method: 'share',
          name: 'Attending TEDxNYUAD2015',
          href: 'http://tedxnyuad.org/',   
          caption: 'Share on facebook!',
          description: 'Please help us promote the event by sharing the fact that you have signed up!',
          message: 'I am attending TEDxNYUAD2015! Are you?'
        });
    });
    
    $('#finalMessage').hide();
    $('#facebook').click(function(e){
        $('#socialMessage').hide();
        $('#finalMessage').show();
    });
    $('.twitter').click(function(e){
        $('#socialMessage').hide();
        $('#finalMessage').show();
    });
    $('.no').click(function(e){
        $('#socialMessage').hide();
        $('#finalMessage').show();
    });
    
    $('body').scrollTop(0);
    //Attend dropdown
    /*$(".affiliation-specific").hide();
    $('input[name="affiliation"]').click(function(){
        if($(this).attr("value")=="1"){
            $(".affiliation-specific").show();
        }
        if($(this).attr("value")=="0"){
            $(".affiliation-specific").hide();
        }
    });*/
    
}); 