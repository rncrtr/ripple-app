'use strict';
/* global angular */
// Declare app level module which depends on views, and components
angular.module('ripple', [
  'ngRoute',
  'ripple.home',
  'ripple.settings',
  'ripple.about',
  'ripple.bugs',
  'goback',
  'navMenu',
  'ngStorage',
  'filters'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.html5Mode(true);

  $routeProvider.otherwise({redirectTo: '/home'});
}])
.controller('app',['$scope','$rootScope','DataService', function ($scope,$rootScope,DataService) {
  $rootScope.churches = DataService.getChurches().then(function(resp){
      console.log(resp);
  });
}]);