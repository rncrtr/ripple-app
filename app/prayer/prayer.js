'use strict';
/* global angular */
angular.module('whiteflag.prayer', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/prayer', {
    templateUrl: 'prayer/prayer.html',
    controller: 'PrayerCtrl'
  });
}])

.controller('PrayerCtrl', ['$scope',function($scope) {
  $scope.topBanner = null;
}]);