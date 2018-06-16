/* global $ */
$(document).ready(function () {
    
    $('.menu-drop').click(function(){
        $('#settings').slideToggle("slow");
    });
    
// end jquery
});


 $(window).on('hashchange', function () {
     window.scrollTo(0, 1);
 });