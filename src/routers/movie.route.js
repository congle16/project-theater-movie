'use strict';
const express = require('express');
const movieRouter = express.Router();

const movieController = require('../controllers/movie.controller');

movieRouter.get('/', movieController.index);
movieRouter.post('/', movieController.create);

module.exports = movieRouter;