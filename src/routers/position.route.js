'use strict';
const express = require('express');
const positionRouter = express.Router();

const PositionController = require('../controllers/position.controller');

positionRouter.get('/', PositionController.getAll);

positionRouter.post('/', PositionController.create);

positionRouter.get('/:id', PositionController.getById);

positionRouter.put('/:id', PositionController.update);

positionRouter.delete('/:id', PositionController.delete);

module.exports = positionRouter;