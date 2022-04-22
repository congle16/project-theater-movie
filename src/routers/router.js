'use strict';
const express = require('express');

const rootRouter = express.Router();

rootRouter.get('/', (res) => {
    res.send('Hello World!');
});

module.exports = rootRouter;