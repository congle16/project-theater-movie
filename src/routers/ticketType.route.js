'use strict';
const express = require('express');
const ticketTypeRouter = express.Router();
const {
    authenticate
} = require('../middlewares/auth.middleware');
const TicketTypeController = require('../controllers/ticketType.controller');

ticketTypeRouter.get('/', TicketTypeController.index);

ticketTypeRouter.post('/', TicketTypeController.create);

ticketTypeRouter.get('/:id', TicketTypeController.getById);

ticketTypeRouter.put('/:id', TicketTypeController.update);

ticketTypeRouter.delete('/:id', TicketTypeController.delete);

module.exports = ticketTypeRouter;