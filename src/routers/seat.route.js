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

seatRouter.put('/:id', SeatController.update);

seatRouter.delete('/:id', SeatController.delete);

module.exports = seatRouter;