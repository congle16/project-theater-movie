'use strict';
const express = require('express');

const rootRouter = express.Router();

rootRouter.all('/', (req, res, next) => {
    console.log(req.query);
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'X-Requested-With');
    next();
});

module.exports = rootRouter;