'use strict';
const express = require('express');
const userRouter = express.Router();

const userController = require('../controllers/user.controller');

userRouter.post('/sign-up', userController.create);


module.exports = userRouter;