/* global $ */
$(document).ready(function () {
    
    $('.menu-drop').click(function(){
        $('#settings').slideToggle("slow");
    });

    $('button.loginUser').click(function(){
      var userEmail = $('.user-email').val();
      var userPass = $('.user-pass').val();
        firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function (error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          console.log(errorCode,errorMessage);
        });
    });

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
        $('#loggedin-only').show();
        $('#login-form').hide();
      } else {
        // User is signed out.

      }
    });

  $('button.logoutUser').click(function(){
    firebase.auth().signOut().then(function () {
      // Sign-out successful.
      window.location.reload(true);
    }).catch(function (error) {
      // An error happened.
    });
  });

    
// end jquery
});


  $(window).on('hashchange', function () {
     window.scrollTo(0, 1);
  });