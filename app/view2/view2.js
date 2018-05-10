'use strict';
/* global angular */
angular.module('myApp.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  });
}])

.filter('trustAsResourceUrl', ['$sce', function ($sce) {
    return function (val) {
        return $sce.trustAsResourceUrl(val);
    };
}])

.controller('View2Ctrl', ['$scope',function($scope) {
  $scope.currentStudy = null;
  $scope.currentPlayer = null;
  $scope.topBanner = null;
  $scope.menuItems = [
    {name:'Exodus',player_url: '31551'},
    {name:'Elisha',player_url: '31553'},
    {name:'Philippians',player_url: '31554'},
    {name:'Revelation',player_url: '31557'},
    {name:'Genesis',player_url: '31556'},
    {name:'Ephesians',player_url: '31555'},
    {name:'Zechariah',player_url: '31558'},
    {name:'Galatians',player_url: '31559'},
    {name:'Topical',player_url: '31560'}
    ];
    
    $scope.setStudy = function(study){
      console.log('study set to',study);
      if(study != null){
        $scope.currentStudy = study;
        $scope.currentStudyObj = $scope.menuItems.filter(function(el) {
          if(el.name == study){
            return el;
          }
        });
        $scope.currentPlayer = $scope.currentStudyObj[0].player_url; 
        console.log('player',$scope.currentPlayer);
      }else{
        $scope.currentStudy = null;
        $scope.currentPlayer = null;
      }
    }
    
    $scope.setPlayerUrl = function(id){
      return 'https://whiteflagcalvary.sermon.net/widget/listplayer/'+id;
    }
}]);