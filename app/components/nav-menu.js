'use strict';
/* global angular */
angular.module('navMenu', ['ngRoute'])

.directive('navMenu', function() {
  return {
    template: 
        '<ul id="wfc-menu" class="nav col-12-sm nopad">'+
          '<li class="nav-item col-2-sm">'+
            '<a class="nav-link text-white" href="#!/home">Home</a>'+
          '</li>'+
          '<li class="nav-item col-2-sm">'+
            '<a class="nav-link text-white" href="#!/studies">Studies</a>'+
          '</li>'+
          '<li class="nav-item col-2-sm">'+
            '<a class="nav-link text-white" href="#!/devotions">Devotions</a>'+
          '</li>'+
          '<li class="nav-item col-2-sm">'+
            '<a class="nav-link text-white" href="#!/prayer">Prayer</a>'+
          '</li>'+
          '<li style="position: absolute; right: 0px; padding-right: 20px; padding-top: 10px; float: right; text-align: right; height: 43px; width: 50px;" class="menu-drop nav-item">' +
            '<a class="text-white" style="" href=""><i class="fas fa-fw fa-bars" style="font-size: 16px;"></i></a>' +
          '</li>' +
        '</ul>'
  };
});    