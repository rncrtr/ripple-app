'use strict';
/* global angular */
angular.module('myApp.discipleship', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/discipleship', {
    templateUrl: 'discipleship/discipleship.html',
    controller: 'DiscipleshipCtrl'
  });
}])

.filter('trustAsResourceUrl', ['$sce', function ($sce) {
    return function (val) {
        return $sce.trustAsResourceUrl(val);
    };
}])

.controller('DiscipleshipCtrl', ['$scope',function($scope) {
  
  $scope.currentAudio = null;
  
  $scope.setCurrentAudio = function(url){
    console.log(url);
    $scope.currentAudio = url;
  }
  
  $scope.getCurrentAudio = function(audioUrl){
    return audioUrl;
  }
}]);