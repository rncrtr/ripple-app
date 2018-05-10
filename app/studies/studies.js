'use strict';
/* global angular */
angular.module('myApp.studies', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/studies', {
    templateUrl: 'studies/studies.html',
    controller: 'StudiesCtrl'
  });
}])

.controller('StudiesCtrl', ['$scope',function($scope) {

}]);