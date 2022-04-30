'use strict';
const express = require('express');
const router = express.Router();

const movieRouter = require('./movie.route');


router.get('/', (req, res) => {
    console.log(req.headers);
    res.send('Hello World!');
    });
    
router.use('/movies', movieRouter);

module.exports = router;