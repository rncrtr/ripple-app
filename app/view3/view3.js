'use strict';
/* global angular */
angular.module('myApp.view3', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view3', {
    templateUrl: 'view3/view3.html',
    controller: 'View3Ctrl'
  });
}])

.controller('View3Ctrl', ['$scope',function($scope) {
  
    if(window.location.hash.indexOf('view3')!=-1) {
      /* global $ */
      var url = 'http://livinginchrist.org/wp-content/media/dbdbg/dbdbg.php';
	   // $.get(url, function(response){
	   //   console.log(response);
		  //   $('#devo').html(response);
	   // });
	    
	   // $.ajax({
    //     url: url,
    //     dataType: 'jsonp',
    //     jsonp: 'callback',
    //     jsonpCallback: 'jsonpCallback',
    //     success: function(resp){
    //       alert("success");
    //       console.log(resp);
    //     }
    //   });
    }
    
    
    
}]);