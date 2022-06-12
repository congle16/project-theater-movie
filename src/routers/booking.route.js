'use strict';
const express = require('express');
const bookingRouter = express.Router();
const {
    authenticate
} = require('../middlewares/auth.middleware');
const BookingController = require('../controllers/booking.controller');

bookingRouter.get('/', BookingController.index);

bookingRouter.post('/', BookingController.create);

bookingRouter.get('/:id', BookingController.getById);

bookingRouter.put('/:id', BookingController.update);

module.exports = bookingRouter;