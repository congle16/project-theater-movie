'use strict';
const express = require('express');
const bookingRouter = express.Router();
const {
    authenticate,
    checkRole
} = require('../middlewares/auth.middleware');
const BookingController = require('../controllers/booking.controller');

bookingRouter.get('/', [authenticate, checkRole('admin', 'nhan vien')], BookingController.index);

bookingRouter.post('/', [authenticate, checkRole('khach hang')], BookingController.create);

bookingRouter.post('/create', [authenticate, checkRole('khach hang')], BookingController.create2);

bookingRouter.get('/:id', BookingController.getById);

bookingRouter.get('/user/:maUser', BookingController.getTicketBuyByUserId);

bookingRouter.put('/:id', BookingController.update);

module.exports = bookingRouter;