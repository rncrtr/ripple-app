'use strict';
/* global angular */
angular.module('navMenu', ['ngRoute'])

.directive('navMenu', function() {
  return {
    template: 
        '<ul id="wfc-menu" class="nav bg-dark col-12-sm nopad">'+
          '<li class="logo bg-dark col-1-sm" style="padding-left: 10px;"><a href="#!/view1"><img style="padding-top: 5px;" width="30px" src="../assets/images/wfc-logo.png" /></a></li>'+
          '<li class="nav-item col-2-sm">'+
            '<a class="nav-link text-white" href="#!/view1">Home</a>'+
          '</li>'+
          '<li class="nav-item col-2-sm">'+
            '<a class="nav-link text-white" href="#!/view2">Studies</a>'+
          '</li>'+
          '<li class="nav-item col-2-sm">'+
            '<a class="nav-link text-white" href="#!/view3">Devotions</a>'+
          '</li>'+
          '<li class="nav-item col-2-sm">'+
            '<a class="nav-link text-white" href="#!/view4">Prayer</a>'+
          '</li>'+
        '</ul>'
  };
});    
    
    
    
    
    