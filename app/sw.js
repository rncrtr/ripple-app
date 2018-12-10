var version = '12-09-18-1102';
var CACHE_NAME = 'whiteflag-'+version;
var urlsToCache = [
    './?'+version,
    'sw.js?'+version,
    'manifest.json?'+version,
    'app.css?'+version,
    'assets/images/app-icon96.png?'+version,
    'assets/images/app-icon144.png?'+version,
    'assets/images/app-icon192.png?'+version,
    'assets/images/app-icon512.png?'+version,
    'assets/images/loader.gif',
    'https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.1/css/bootstrap.min.css',
    'https://use.fontawesome.com/releases/v5.0.13/css/all.css',
    'https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.6.0/angular.min.js',
    'https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.6.0/angular-route.min.js',
    'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js',
    'jquery.fn.js?'+version,
    'app.js?'+version,
    'controllers.js?'+version,
    'main.js?'+version
];

self.addEventListener('install', function(event) {
    // Perform install steps
    console.log('[Service Worker] Installing...');
    // event.waitUntil(
    //     caches.open(CACHE_NAME)
    //         .then(function(cache) {
    //             console.log('Opened cache');
    //             var x = cache.addAll(urlsToCache);
    //             console.log('cache added');
    //             return x;
    //         })
    // );
});

self.addEventListener('activate',function(event){
    console.log('[Service Worker] Activating...');
    return self.clients.claim();
});

self.addEventListener('fetch', function(event) {
    // event.respondWith(
    //     caches.match(event.request)
    //         .then(function(response) {
    //                 // Cache hit - return response
    //                 if (response) {
    //                     return response;
    //                 }
    //             }
    //         )
    // );
});

// self.addEventListener('notificationClick',function(event){
//     var notification = event.notification;
//     var action = event.action;

//     console.log(notification);

//     if(action === 'confirm'){
//         console.log('Confirm was chosen');
//         event.waitUntil(
//             clients.matchAll()
//             .then(function(clients){
//                 var client = clients.find(function(c){
//                     c.visibilityState === 'visible'
//                 });

//                 // if(client!==undefined){
//                 //     client.navigate('http://localhost:8080');
//                 //     client.focus();
//                 // }else{
//                 //     clients.openWindow('http://localhost:8080');
//                 // }
//                 notification.close();
//             })
//         );
        
//     }else{
//         console.log(action);
//     }
// });

// self.addEventListener('push',function(event){
//     console.log('Push notification received',event);

//     var data = {title: 'Default Message',content: 'placeholder text',url:'/'};
//     if(event.data){
//         data = JSON.parse(event.data.text());
//     }

//     var options = {
//         body: data.content,
//         icon: 'assets/images/app-icon96.png',
//         badge: 'assets/images/app-icon96.png',
//         data: {
//             url: data.url
//         }
//     };

//     event.waitUntil(
//         self.registration.showNotification(data.title,options)
//     );
// });

// self.addEventListener('onupdatefound',function(event){
//     console.log(event);
// });