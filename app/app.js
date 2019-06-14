'use strict';
var env = {};

// Import variables if present (from env.js)
if(window){  
  Object.assign(env, window.__env);
}
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
])
.constant('__env', env)
.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.html5Mode(true);

  $routeProvider.otherwise({redirectTo: '/home'});
}])
.controller('app',['$scope','$rootScope','DataService', function ($scope,$rootScope,DataService) {
  $rootScope.churches = DataService.getChurches().then(function(resp){
      console.log(resp);
  });
}]);