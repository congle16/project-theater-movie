'use strict';
const express = require('express');
const ticketRouter = express.Router();
const {
    authenticate
} = require('../middlewares/auth.middleware');
const ticketController = require('../controllers/ticket.controller');

ticketRouter.get('/', ticketController.index);

ticketRouter.post('/', ticketController.create);

ticketRouter.get('/:id', ticketController.getById);

ticketRouter.put('/:id', ticketController.update);

ticketRouter.delete('/:id', ticketController.delete);

module.exports = ticketRouter;