
    self.addEventListener('install', (e) => {
        console.log('SERVICEWORKER Installed')
        e.waitUntil(
            caches.open('base').then(cache => {
                return cache.addAll([
                    '/',
                    'index.html',
                    'global.css',
                    'app.js',
                    'vendors.js',
                    'sw.js'
    //                 '/index.html?homescreen=1',
    //                 '/?homescreen=1',
    //                 '/styles/main.css',
    //                 '/scripts/main.min.js',
    //                 '/sounds/airhorn.mp3'
                ])
            })
        )
    })

    self.addEventListener('fetch', (e) => {
        e.respondWith(
            caches.match(e.request).then(response => {
                return response || fetch(e.request);
            })
        );


        //Check for google maps api related content requests.
        if (e.request.url.indexOf('https://maps.googleapis.com') === 0 ||
            e.request.url.indexOf('https://csi.gstatic.com' === 0)) {
            console.log('%cMaps Request', 'color:green;', e.request.url)
            // event.respondWith(
                // Handle Maps API requests in a generic fashion,
                // by returning a Promise that resolves to a Response.
            // );
        } else {
            console.log('Request:', e.request.url)
            // event.respondWith(
                // Some default handling.
            // );
        }
        // )
    })
