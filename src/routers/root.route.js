'use strict';
const express = require('express');
const router = express.Router();

const movieRouter = require('./movie.route');

router.use('/movies', movieRouter);

module.exports = router;