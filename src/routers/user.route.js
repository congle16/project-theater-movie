'use strict';
const express = require('express');
const userRouter = express.Router();
const {authenticate} = require('../middlewares/auth.middleware');

const userController = require('../controllers/user.controller');

userRouter.get('/', authenticate, userController.getAllUsers);

userRouter.post('/sign-up', userController.create);

userRouter.post('/sign-in', userController.signIn);

userRouter.delete('/:id', authenticate ,userController.delete);

module.exports = userRouter;