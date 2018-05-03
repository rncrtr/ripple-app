'use strict';
/* global angular */
angular.module('navMenu', ['ngRoute'])

.directive('navMenu', function() {
  return {
    template: 
        '<ul class="nav justify-content-center text-uppercase bg-dark">'+
          '<li class="nav-item col">'+
            '<a class="nav-link text-white" href="#!/view1">Home</a>'+
          '</li>'+
          '<li class="nav-item col">'+
            '<a class="nav-link text-white" href="#!/view2">Studies</a>'+
          '</li>'+
          '<li class="nav-item col">'+
            '<a class="nav-link text-white" href="#!/view3">Devotions</a>'+
          '</li>'+
          '<li class="nav-item col">'+
            '<a class="nav-link text-white" href="#!/view4">Prayer</a>'+
          '</li>'+
        '</ul>'
  };
});    
    
    
    
    
    