'use strict';
const express = require('express');
const userRouter = express.Router();

const userController = require('../controllers/user.controller');

userRouter.post('/sign-up', userController.create);

userRouter.post('/sign-in', userController.signIn);

module.exports = userRouter;