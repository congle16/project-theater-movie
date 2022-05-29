'use strict';
const express = require('express');
const roomRouter = express.Router();
const {
    authenticate,
    checkRole,
} = require('../middlewares/auth.middleware');

const RoomController = require('../controllers/room.controller');

roomRouter.get('/', RoomController.getAllRooms);

roomRouter.post('/', RoomController.create);

roomRouter.get('/:id', RoomController.getRoomById);

roomRouter.put('/:id', RoomController.update);

roomRouter.delete('/:id', RoomController.delete);

module.exports = roomRouter;