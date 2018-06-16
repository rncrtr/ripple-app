/*
* Note: It is amazing how dumb most push code is. No one thinks ahead. I've written this to make sense for initial and SUBSEQUENT page loads.
*/

var deferredPrompt;
var enableNotificationsButtons = document.querySelectorAll('.enable-notifications');
var disableNotificationsButtons = document.querySelectorAll('.disable-notifications');
// REGISTER SERVICE WORKER

if (!window.Promise) {
    window.Promise = Promise;
}

if ('serviceWorker' in navigator) {
    navigator.serviceWorker
        .register('/sw.js')
        .then(function () {
            console.log('Service worker registered!');
        })
        .catch(function (err) {
            console.log(err);
        });
}

window.addEventListener('beforeinstallprompt', function (event) {
    console.log('beforeinstallprompt fired');
    event.preventDefault();
    deferredPrompt = event;
    return false;
});

function displayConfirmNotification() {
    if ('serviceWorker' in navigator) {
        var options = {
            body: 'You successfully subscribed to live updates!',
            actions: [{
                    action: 'confirm',
                    title: 'Okay'
                },
                {
                    action: 'cancel',
                    title: 'Cancel'
                }
            ]
        };

        navigator.serviceWorker.ready
            .then(function (swreg) {
                swreg.showNotification('Successfully subscribed!', options);
            });
    }
}

function createSub() {
    // Create a new subscription
    var vapidPublicKey = 'BC1qaKiOtzHYJ_1ZC0pODkVDMuwa-8VHkxNawBvVKBRDkrauLrb0B9Lj5u9TiBm9HjJYo-io_MWSSSn2fii3YW4';
    var convertedVapidPublicKey = urlBase64ToUint8Array(vapidPublicKey);
    var sub = checkForSub();
    if(sub === null){
        return reg.pushManager.subscribe({
            userVisibleOnly: true,
            applicationServerKey: convertedVapidPublicKey
        })
        .then(function (newSub) {
            return fetch('https://whiteflagmobile.firebaseio.com/subscriptions.json', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(newSub)
            })
        })
        .then(function (res) {
            if (res.ok) {
                displayConfirmNotification();
            }
        })
        .catch(function (err) {
            console.log(err);
        });
    }else{
        console.log(sub);
    }
}

function urlBase64ToUint8Array(base64String) {
    const padding = '='.repeat((4 - base64String.length % 4) % 4);
    const base64 = (base64String + padding).replace(/\-/g, '+').replace(/_/g, '/');
    const rawData = window.atob(base64);
    const outputArray = new Uint8Array(rawData.length);
    for (let i = 0; i < rawData.length; ++i) {
        outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
}

function askForNotificationPermission() {
    Notification.requestPermission(function (result) {
        console.log('User Choice', result);
        if (result !== 'granted') {
            console.log('No notification permission granted!');
        } else {
            createSub();
        }
    });
}

function checkForSub() {
    if (!('serviceWorker' in navigator)) {
        return;
    }
    var reg;
    navigator.serviceWorker.ready
        .then(function (swreg) {
            reg = swreg;
            return swreg.pushManager.getSubscription();
        })
        .then(function (sub) {
            return sub;
        })

}

function updateButton(sub){
    if (sub === null) {
        console.log('no sub found, init setup to create one');
        // activates enable notification button
        
        if (enableNotificationsButtons) {
            for (let i = 0; i < enableNotificationsButtons.length; i++) {
                enableNotificationsButtons[i].addEventListener('click', askForNotificationPermission);
                enableNotificationsButtons[i].style.display = 'inline-block';
            }
        }
    } else {
        // We have a subscription
        console.log('sub exists, so disable button');
        // deactivates erable notification button, if any
        if (enableNotificationsButtons) {
            for (let i = 0; i < enableNotificationsButtons.length; i++) {
                const thisButton = enableNotificationsButtons[i];
                thisButton.disabled = true;
                thisButton.innerHTML = 'Updates are enabled';
            }
            var disableMessage = document.getElementById('disable-message');
            disableMessage.style.display = 'inline-block';
        }
    }
}

// init
if ('Notification' in window && 'serviceWorker' in navigator) {
    var sub = checkForSub();
    updateButton(sub);
}
