'use strict';
const express = require('express');
const showTimeRouter = express.Router();
const {
    authenticate
} = require('../middlewares/auth.middleware');
const ShowtimeController = require('../controllers/showtime.controller');

showTimeRouter.get('/', ShowtimeController.index);

showTimeRouter.post('/', ShowtimeController.create);

showTimeRouter.get('/:id', ShowtimeController.getById);

showTimeRouter.put('/:id', ShowtimeController.update);

showTimeRouter.delete('/:id', ShowtimeController.delete);

showTimeRouter.get('/malichchieutrangthai/:maLichChieu/:trangThai', ShowtimeController.getByScheduleIdTrangThai);

module.exports = showTimeRouter;