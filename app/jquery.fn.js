/* global $ */
$(document).ready(function () {
  $('#loggedin-only').hide();
    
  $('.menu-drop').click(function(){
    //console.log('clicked');
      $('#settings').slideToggle("slow");
  }); 

  $('.about').append('Version: '+window.version);
    
  $('[data-toggle="tooltip"]').tooltip();

// end jquery
});