
    self.addEventListener('install', e => {
      console.log('SERVICEWORKER Installed');
      e.waitUntil(
            caches.open('base').then(cache => {
              return cache.addAll([
                '/',
                'index.html',
                'global.css',
                'app.js',
                'vendors.js',
                'sw.js',
                'images/offline.png',
                'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700'
              ]);
            })
        );
    });

    self.addEventListener('fetch', e => {
        // Check for google maps api related content requests.
      if (e.request.url.indexOf('https://maps.googleapis.com') === 0 ||
          e.request.url.indexOf('https://csi.gstatic.com') === 0 ||
          e.request.url.indexOf('https://maps.gstatic.com/') === 0) {
        console.log('%cMaps Request', 'color:green;', e.request.url);

        e.respondWith(
              caches.match(e.request).then(function(resp) {
                return resp || fetch(e.request).then(function(response) {
                  caches.open('maps').then(function(cache) {
                    cache.put(e.request, response.clone());
                  });
                  return response.clone();
                });
              }).catch(function() {
                return caches.match('/images/offline.png');
              })
            );
      } else {
        console.log('Request:', e.request.url);
        e.respondWith(
              caches.match(e.request).then(response => {
                return response || fetch(e.request);
              })
            );
      }
    });
