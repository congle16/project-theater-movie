'use strict';
const express = require('express');
const advertisementRouter = express.Router();
const {
    authenticate
} = require('../middlewares/auth.middleware');
const AdvertisementController = require('../controllers/advertisement.controller');

advertisementRouter.get('/', AdvertisementController.index)

advertisementRouter.post('/', AdvertisementController.create)

advertisementRouter.get('/:id', AdvertisementController.getById)

advertisementRouter.put('/:id', AdvertisementController.update)

advertisementRouter.delete('/:id', AdvertisementController.delete)

module.exports = advertisementRouter;