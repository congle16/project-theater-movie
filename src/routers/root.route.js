'use strict';
const express = require('express');
const router = express.Router();

const movieRouter = require('./movie.route');
const userRouter = require('./user.route');
const roomRouter = require('./room.route');
const positionRouter = require('./position.route');
const categoryRouter = require('./category.route');
const advertisementRouter = require('./advertisement.route');
const scheduleRouter = require('./schedule.route');
const ticketTypeRouter = require('./ticketType.route');
const showTimeRouter = require('./showtime.route');


router.get('/', (req, res) => {
    console.log(req.headers);
    res.send('Hello World!');
    });

router.use('/movies', movieRouter);

router.use('/users', userRouter);

router.use('/rooms', roomRouter);

router.use('/positions', positionRouter);

router.use('/category', categoryRouter);

router.use('/advertisement', advertisementRouter);

router.use('/schedule', scheduleRouter);

router.use('/tickettype', ticketTypeRouter);

router.use('/showtime', showTimeRouter);

module.exports = router;