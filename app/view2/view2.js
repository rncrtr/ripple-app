'use strict';
/* global angular */
angular.module('myApp.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  });
}])

.controller('View2Ctrl', ['$scope',function($scope) {
  $scope.topBanner = 'studies-banner.jpg';
  $scope.menuItems = [
    {name:'Exodus',url: ''},
    {name:'Elisha',url: ''},
    {name:'Phillipians',url: ''},
    {name:'Revelation',url: ''},
    {name:'Genesis',url: ''},
    {name:'Ephesians',url: ''},
    {name:'Zechariah',url: ''},
    {name:'Galatians',url: ''},
    {name:'Topical',url: ''}
    ];
}]);