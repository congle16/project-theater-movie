'use strict';
const express = require('express');
const userRouter = express.Router();
const {authenticate, checkRole} = require('../middlewares/auth.middleware');

const userController = require('../controllers/user.controller');

userRouter.get('/', [authenticate, checkRole('admin')], userController.getAllUsers);

userRouter.get('/khach-hangs', [authenticate, checkRole('admin', 'nhân viên')], userController.getAllKhachHang);

userRouter.post('/sign-up', userController.create);

userRouter.post('/dang-ky', userController.create2);

userRouter.post('/sign-in', userController.signIn);

userRouter.delete('/:id', [authenticate, checkRole('admin')], userController.delete);

userRouter.get('/me', authenticate, userController.getMe);

userRouter.put('/me', authenticate, userController.updateMe);

userRouter.post('/me/change-password', authenticate, userController.changePassword);

userRouter.get('/logout', authenticate, userController.logout);

module.exports = userRouter;