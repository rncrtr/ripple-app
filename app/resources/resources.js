'use strict';
/* global angular */
angular.module('myApp.resources', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/resources', {
    templateUrl: 'resources/resources.html',
    controller: 'ResourcesCtrl'
  });
}])

.filter('trustAsResourceUrl', ['$sce', function ($sce) {
    return function (val) {
        return $sce.trustAsResourceUrl(val);
    };
}])

  .controller('ResourcesCtrl', ['$scope',function($scope) {
    // audio: fa-volume-up
    // book: fa-book

    $scope.audio = [
      { name: 'Answers to Prayer - George Müller', icon: 'fas fa-volume-up', url: 'https://librivox.org/answers-to-prayer-from-george-mullers-narratives-by-george-muller/' },
    ];

    $scope.books = [

    ];

    
}]);