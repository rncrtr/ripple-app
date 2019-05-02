var deferredPrompt;
var enableNotificationsButtons = document.querySelectorAll('.enable-notifications');
var installAppButtons = document.querySelectorAll('.install-app');

if (!window.Promise) {
  window.Promise = Promise;
}

if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('/sw.js')
    .then(function () {
      console.log('Service worker registered!');
    })
    .catch(function(err) {
      console.log(err);
    });
}

window.addEventListener('beforeinstallprompt', function(event) {
  console.log('beforeinstallprompt fired');
  //event.preventDefault();
  //deferredPrompt = event;
  // for (var i = 0; i < installAppButtons.length; i++) {
  //   installAppButtons[i].style.display = 'block';
  // }
});

window.addEventListener('appinstalled', (evt) => {
  console.log('appinstalled fired');
  //ga('send', { hitType: 'event', eventCategory: 'AppInstalls', eventAction: 'install', eventLabel: 'WhiteFlagPWA' });
});

function urlBase64ToUint8Array(base64String) {
  var padding = '='.repeat((4 - base64String.length % 4) % 4);
  var base64 = (base64String + padding)
    .replace(/\-/g, '+')
    .replace(/_/g, '/');

  var rawData = window.atob(base64);
  var outputArray = new Uint8Array(rawData.length);

  for (var i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
}