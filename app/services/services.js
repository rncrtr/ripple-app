'use strict';
/* global angular */
angular.module('myApp.services', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/services', {
    templateUrl: 'services/services.html',
    controller: 'ServicesCtrl'
  });
}])

.controller('ServicesCtrl', ['$scope',function($scope) {
    $scope.topBanner = null;
}]);