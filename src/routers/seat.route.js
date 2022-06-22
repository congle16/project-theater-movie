'use strict';
const express = require('express');
const seatRouter = express.Router();
const {
    authenticate
} = require('../middlewares/auth.middleware');
const SeatController = require('../controllers/seat.controller');

seatRouter.get('/', SeatController.index);

seatRouter.post('/', SeatController.create);

seatRouter.get('/:id', SeatController.getById);

seatRouter.get('/room/:maPhong', SeatController.getByRoomId);

seatRouter.put('/:id', SeatController.update);

seatRouter.put('/booked/:id', SeatController.updateTrangthai);

seatRouter.delete('/:id', SeatController.delete);

module.exports = seatRouter;