'use strict';
/* global angular */
angular.module('myApp.discipleship', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/discipleship', {
    templateUrl: 'discipleship/discipleship.html',
    controller: 'DiscipleshipCtrl'
  });
}])

.controller('DiscipleshipCtrl', ['$scope',function($scope) {

}]);