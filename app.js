const express = require('express');
const path = require('path');
const compression = require('compression')();
const logger = require('morgan')('dev');
const helmet = require('helmet')();
const api = require('./src/server/routes');

/**
 * app vars
 */
const app = express();
const pub = path.join(__dirname, 'public');
const index = path.join(pub, 'index.html');

/**
 * express middleware
 */
app.use('/api', api);
app.use('/public', express.static(pub));
app.use(compression);
app.use(logger);
app.use(helmet);

/**
 * middleware for service worker
 * Needed to use /worker to enable the worker to use the
 * entire project dir for cache (if necessary)
 */
app.get('/worker.js', (req, res) => res.sendFile(path.join(pub, 'javascripts', 'worker.js')));

/**
 * This middle must be the last one set up
 * used for react - enables client-side routing
 */
app.get('*', (req, res) => res.sendFile(index));

// export for bin/www
module.exports = app;
