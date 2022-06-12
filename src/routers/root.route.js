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
const seatRouter = require('./seat.route');
const ticketRouter = require('./ticket.route');
const bookingRouter = require('./booking.route');


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

router.use('/seat', seatRouter);

router.use('/ticket', ticketRouter);

router.use('/booking', bookingRouter);

module.exports = router;