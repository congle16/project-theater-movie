'use strict';
const express = require('express');
const bookingRouter = express.Router();
const {
    authenticate
} = require('../middlewares/auth.middleware');
const BookingController = require('../controllers/booking.controller');

bookingRouter.get('/', BookingController.index);

bookingRouter.post('/', authenticate, BookingController.create);

bookingRouter.get('/:id', BookingController.getById);

bookingRouter.get('/user/:maUser', BookingController.getTicketBuyByUserId);

bookingRouter.put('/:id', BookingController.update);

module.exports = bookingRouter;