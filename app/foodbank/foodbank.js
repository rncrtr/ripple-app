'use strict';
/* global angular */
angular.module('myApp.foodbank', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/foodbank', {
    templateUrl: 'foodbank/foodbank.html',
    controller: 'FoodbankCtrl'
  });
}])

.controller('FoodbankCtrl', [function() {

}]);