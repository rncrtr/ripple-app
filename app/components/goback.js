'use strict';
/* global angular */
angular.module('goback', ['ngRoute'])

.directive('goback', function() {
  return {
    template: 
        '<ul class="list-group">'+
            '<li class="list-group-item no-border">'+
                '<a href="javascript:history.back();">'+
                    '<span class="fas fa-fw fa-chevron-left text-left"></span>'+
                    '<span>Back</span>'+
                '</a>'+
            '</li>'+
        '</ul>'
  };
});