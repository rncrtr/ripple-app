'use strict';
/* global angular */
angular.module('whiteflag.missions', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/missions', {
    templateUrl: 'missions/missions.html',
    controller: 'MissionsCtrl'
  });
}])

.filter('trustAsResourceUrl', ['$sce', function ($sce) {
    return function (val) {
        return $sce.trustAsResourceUrl(val);
    };
}])

  .controller('MissionsCtrl', ['$scope',function($scope) {
  
}]);