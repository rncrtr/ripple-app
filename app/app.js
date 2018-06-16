'use strict';
/* global angular */
// Declare app level module which depends on views, and components
angular.module('whiteflag', [
  'ngRoute',
  'whiteflag.home',
  'whiteflag.studies',
  'whiteflag.devotions',
  'whiteflag.newsAdmin',
  'whiteflag.news',
  'whiteflag.settings',
  'whiteflag.about',
  'whiteflag.services',
  'whiteflag.giving',
  'whiteflag.foodbank',
  'whiteflag.discipleship',
  'whiteflag.missions',
  'whiteflag.resources',
  'goback',
  'navMenu'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/home'});
}]);
