// change this
const cacheName = 'react-boilerplate-1';

// on *, app.js serves our index file
// we can be lazy and request /index.html
// this gets redirected to our layout file
const toCache = [
  '/index.html',
  'https://code.jquery.com/jquery-3.2.1.slim.min.js',
  'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js',
  'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js',
];

/**
 * check that we're making a request to a webpage
 * because this boilerplate is intended for SPAs
 */
const reqPage = (request) => {
  const { mode, method, headers } = request;
  const acceptsHTML = headers.get('accept').includes('text/html');
  return (mode === 'navigate' || (method === 'GET' && acceptsHTML));
};

/**
 * setup a cache and add items
 */
self.addEventListener('install', async (event) => {
  event.waitUntil((async function () {
    const cache = await caches.open(cacheName);
    console.log(`Adding ${toCache} to cache.`);
    return cache.addAll(toCache);
  }()));
});

/**
 * intercept fetch requests
 * and attempt to serve from cache
 */
self.addEventListener('fetch', (event) => {
  const { request } = event;
  // Prevent the default, and handle the request ourselves.
  event.respondWith(async function () {
    // Try to get the response from a cache.
    const cachedResponse = await caches.match(request, { cacheName });
    if (cachedResponse) return cachedResponse;
    // if we're offline and requesting a page, return the index file. this mimics the express.js setup.
    if (!navigator.onLine && reqPage(request)) return caches.match('index.html');
    return fetch(event.request);
  }());
});
