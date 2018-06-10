/* global $ */
$(document).ready(function () {
   
    
});

 $(window).on('hashchange',function(){
<<<<<<< HEAD
    window.scrollTo(0, 1);
=======
    window.scrollTo(0,1);
>>>>>>> 817a8d38391a44b0b3674e40d36a7646aa3a14f3
    if(window.location.href.indexOf('view1')!=-1){
        $('.pushupd-switch').show();
    }else{
        $('.pushupd-switch').hide();
    }
});