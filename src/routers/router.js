'use strict';
const express = require('express');

const rootRouter = express.Router();

rootRouter.all('/', (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'X-Requested-With');
    next();
});

rootRouter.get('/temp', (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'X-Requested-With');
    res.send({
        message: "Top Page"
    })
});

module.exports = rootRouter;