
    self.addEventListener('install', (e) => {
        console.log('SERVICEWORKER Installed')
    //     e.waitUntil(
    //         caches.open('airhorner').then(cache => {
    //             return cache.addAll([
    //                 '/',
    //                 'index.html',
    //                 '/index.html?homescreen=1',
    //                 '/?homescreen=1',
    //                 '/styles/main.css',
    //                 '/scripts/main.min.js',
    //                 '/sounds/airhorn.mp3'
    //             ])
    //         })
    //     )
    })

    self.addEventListener('fetch', (e) => {
        console.log('Request:', e.request.url)
        
        // e.respondWith(
        //     caches.match(e.request).then(response => {
        //         return response || fetch(e.request);
        //     })
        // )
    })