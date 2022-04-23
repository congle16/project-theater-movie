'use strict';
const rootRouter = require('./root.route');

function route(app) {
    app.use('/api/v1', rootRouter);
}

module.exports = route;