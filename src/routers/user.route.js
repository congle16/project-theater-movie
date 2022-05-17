'use strict';
const express = require('express');
const userRouter = express.Router();
const authenticate = require('../middlewares/auth.middleware');

const userController = require('../controllers/user.controller');

userRouter.post('/sign-up', userController.create);

userRouter.post('/sign-in', userController.signIn);

userRouter.delete('/:id', userController.delete);

module.exports = userRouter;