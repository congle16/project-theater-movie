'use strict';
const express = require('express');
const scheduleRouter = express.Router();
const {
    authenticate
} = require('../middlewares/auth.middleware');
const ScheduleController = require('../controllers/schedule.controller');

scheduleRouter.get('/', ScheduleController.index);

scheduleRouter.get('/maPhim/:maPhim', ScheduleController.getByMovieId);

scheduleRouter.get('/maphimTrangthai/:maPhim/:trangThai', ScheduleController.getByMovieIdTrangThai);

scheduleRouter.post('/', ScheduleController.create);

scheduleRouter.get('/:id', ScheduleController.showDetail);

scheduleRouter.put('/:id', ScheduleController.update);

scheduleRouter.delete('/:id', ScheduleController.delete);

module.exports = scheduleRouter;