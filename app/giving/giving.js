'use strict';
/* global angular */
angular.module('myApp.giving', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/giving', {
    templateUrl: 'giving/giving.html',
    controller: 'GivingCtrl'
  });
}])

.controller('GivingCtrl', [function() {

}]);