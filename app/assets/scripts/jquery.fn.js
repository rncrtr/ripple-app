/* global $ */
$(document).ready(function () {
   
    
});

 $(window).on('hashchange',function(){
    window.scrollTo(0, 1);
    if(window.location.href.indexOf('view1')!=-1){
        $('.pushupd-switch').show();
    }else{
        $('.pushupd-switch').hide();
    }
});