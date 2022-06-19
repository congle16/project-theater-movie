'use strict';
const express = require('express');
const bookingRouter = express.Router();
const {
    authenticate,
    checkRole
} = require('../middlewares/auth.middleware');
const BookingController = require('../controllers/booking.controller');

bookingRouter.get('/', [authenticate, checkRole('admin', 'nhân viên')], BookingController.index);

bookingRouter.post('/', [authenticate, checkRole('khách hàng')], BookingController.create);

bookingRouter.get('/:id', BookingController.getById);

bookingRouter.put('/:id', BookingController.update);

module.exports = bookingRouter;