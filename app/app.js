'use strict';
/* global angular */
// Declare app level module which depends on views, and components
angular.module('whiteflag', [
  'ngRoute',
  'whiteflag.home',
  'whiteflag.studies',
  'whiteflag.devotions',
  'whiteflag.news',
  'whiteflag.settAdm',
  'whiteflag.settings',
  'whiteflag.about',
  'whiteflag.svcs',
  'whiteflag.give',
  'whiteflag.prayer',
  'whiteflag.foodbank',
  'whiteflag.disc',
  'whiteflag.missions',
  'whiteflag.resources',
  'goback',
  'navMenu'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/home'});
}]);
