var version = 'v3';
var CACHE_NAME = 'whiteflag-cache-'+version;
var urlsToCache = [
    './?'+version,
    'sw.js?'+version,
    'manifest.json?'+version,
    'app.css?'+version,
    'main.js?'+version,
    'assets/images/app-icon96.png?'+version,
    'assets/images/app-icon144.png?'+version,
    'assets/images/app-icon192.png?'+version,
    'assets/images/app-icon512.png?'+version,
    'assets/images/loader.gif'
];
console.log('loading sw');

self.addEventListener('install', function(event) {
    // Perform install steps
    console.log('installing sw');
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(function(cache) {
                console.log('Opened cache');
                var x = cache.addAll(urlsToCache);
                console.log('cache added');
                return x;
            })
    );
});

self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request)
            .then(function(response) {
                    // Cache hit - return response
                    if (response) {
                        return response;
                    }
                    return fetch(event.request);
                }
            )
    );
});

self.addEventListener('notificationClick',function(event){
    var notification = event.notification;
    var action = event.action;

    console.log(notification);

    if(action === 'confirm'){
        console.log('Confirm was chosen');
        event.waitUntil(
            clients.matchAll()
            .then(function(clients){
                var client = clients.find(function(c){
                    c.visibilityState === 'visible'
                });

                if(client!==undefined){
                    client.navigate('http://localhost:8080');
                    client.focus();
                }else{
                    clients.openWindow('http://localhost:8080');
                }
                notification.close();
            })
        );
        
    }else{
        console.log(action);
    }
});

self.addEventListener('push',function(event){
    console.log('Push notification received',event);

    var data = {title: 'Dummy',content: 'yeah, I am just dummy text',url:'/'};
    if(event.data){
        data = JSON.parse(event.data.text());
    }

    var options = {
        body: data.content,
        icon: 'assets/images/app-icon96.png',
        badge: 'assets/images/app-icon96.png',
        data: {
            url: data.url
        }
    };

    event.waitUntil(
        self.registration.showNotification(data.title,options)
    );
});