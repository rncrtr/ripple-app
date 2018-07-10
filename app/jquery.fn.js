/* global $ */
$(document).ready(function () {
    
  $('.menu-drop').click(function(){
    //console.log('clicked');
      $('#settings').slideToggle("slow");
  });

  // setTimeout(function(){
  //   var sub = $('.js-subscription-json').html();
  //   sub = JSON.parse(sub);
  //   console.log('SUB: ',sub);
  //   var endpoint = sub.endpoint;
  //   console.log(endpoint);
  //   delete sub.expirationTime;
  //   var headers = {
  //     "Content-Type":"application/json",
  //     "Authorization":"key=AIzaSyAE9TE6kDsX1N3zjX1ELf3lKjvjHD-wUmg"
  //   };
  //   $.ajax({
  //     type: 'POST',
  //     url: 'https://iid.googleapis.com/v1/web/iid',
  //     headers: headers,
  //     data: JSON.stringify(sub),
  //     success: function(data){
  //       console.log(data);
  //     }
  //   });
  // },1000);

  $('button.loginUser').click(function(){
    $('.loader').show();
    $('#login-form').hide();
    $('#loggedin-only').hide();
    console.log('login user');
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
      //console.log(user);
      setTimeout(function(){
        $('#loggedin-only').show();
        $('.loader').hide();
      },500);
      
    } else {
      // User is signed out.
    $('#login-form').show();
    $('.loader').hide();
    }
  });

  $('button.logoutUser').click(function(){
    console.log('logout user');
    $('.loader').show();
    firebase.auth().signOut().then(function () {
      // Sign-out successful.
      $('#loggedin-only').hide();
      $('#login-form').hide();
      //window.location.reload(true);
    }).catch(function (error) {
      // An error happened.
    });
  });

    
// end jquery
});

$(window).on('hashchange', function () {
   window.scrollTo(0, 1);
});