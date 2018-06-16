'use strict';
/* global angular */
angular.module('whiteflag.devotions', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/devotions', {
    templateUrl: 'devotions/devotions.html',
    controller: 'DevotionsCtrl'
  });
}])

.controller('DevotionsCtrl', ['$scope',function($scope) {
  
    if(window.location.hash.indexOf('devotions')!=-1) {
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