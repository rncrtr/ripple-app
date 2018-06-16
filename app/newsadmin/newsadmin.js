'use strict';
/* global angular */
angular.module('whiteflag.newsAdmin', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/news/:id', {
    templateUrl: 'newsadmin/newsadmin.html',
    controller: 'NewsAdminCtrl'
  });
}])

.controller('NewsAdminCtrl', ['$scope','$routeParams', function ($scope,$routeParams) {
  $scope.showLoginForm = true;
  $scope.loggedInOnly = false;
  //console.log($routeParams);
  if ($routeParams){
    if ($routeParams.id=='admin') {
      //console.log('ahh good, the beard is here');
      $scope.showLoginForm = true;
    }
  }
  
  $scope.loginUser = function(){
    var email = $scope.userEmail;
    var pass = $scope.userPassword;
    console.log(email,pass);
    if(email && pass){
      firebase.auth().signInWithEmailAndPassword(email, pass).catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode,errorMessage);
        // ...
      });
    }else{
      alert('Please enter email and password to continue.');
    }
  }

  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      // User is signed in.
      var displayName = user.displayName;
      var email = user.email;
      var emailVerified = user.emailVerified;
      var photoURL = user.photoURL;
      var isAnonymous = user.isAnonymous;
      var uid = user.uid;
      var providerData = user.providerData;
      //console.log(uid);
      $scope.loggedInOnly = true;
      // ...
    } else {
      // User is signed out.
      // ...
      $scope.loggedInOnly = false;
    }
  });

  $scope.logoutUser = function(){
    firebase.auth().signOut().then(function () {
      // Sign-out successful.

    }).catch(function (error) {
      // An error happened.
    });
  }

}]);