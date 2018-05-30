/* global $ */
$(document).ready(function () {
   
    
});

 $(window).on('hashchange',function(){
    if(window.location.href.indexOf('view1')!=-1){
        $('.pushupd-switch').show();
    }else{
        $('.pushupd-switch').hide();
    }
});