'use strict';
/* global angular */
angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope',function($scope) {
    $scope.topBanner = null;
    $scope.menuItems = [
      {name:'Announcements',url: ''},
      {name:'Services & Contact Info',url: '#!/services'},
      {name:'Map',url:''},
      {name:'Discipleship',url:''},
      {name:'Giving',url:''},
      {name:'Food Bank Info',url:''},
      {name:'YouTube Videos',url:'https://m.youtube.com/channel/UCNum-_XTF3mmxVUzVRHki8Q'},
      {name:'Facebook Page',url:'https://m.facebook.com/whiteflagcalvary'},
      {name:'About The App',url:'#!/about'}
    ];
}]);