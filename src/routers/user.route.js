'use strict';
const express = require('express');
const userRouter = express.Router();
const {authenticate, checkRole} = require('../middlewares/auth.middleware');

const userController = require('../controllers/user.controller');

userRouter.get('/', [authenticate, checkRole('admin')], userController.getAllUsers);

userRouter.get('/khach-hangs', [authenticate, checkRole('admin')], userController.getAllKhachHang);

userRouter.post('/sign-up', userController.create);

userRouter.post('/sign-in', userController.signIn);

userRouter.delete('/:id', [authenticate, checkRole('admin')], userController.delete);

userRouter.get('/me', authenticate, userController.getMe);

module.exports = userRouter;