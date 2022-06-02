const {
    getAllTicketTypes,
    createTicketType,
    getById,
    updatedTicketTypeById,
    deletedTicketTypeById
} = require('../services/ticketType.service');


class TicketTypeController {

    async index(req, res) {
        const ticketTypes = await getAllTicketTypes();

        if (!ticketTypes) {
            return res.status(404).json({
                message: 'No ticket types found'
            });
        }

        return res.status(200).json(ticketTypes);
    }

    async create(req, res) {
        const {
            tenLoaiVe,
            giaVe
        } = req.body;

        if (!tenLoaiVe || !giaVe) {
            return res.status(400).json({
                message: 'Missing fields'
            });
        }

        const ticketType = await createTicketType({
            tenLoaiVe,
            giaVe,
            trangThai : "trống"
        });

        if (!ticketType) {
            return res.status(500).json({
                message: 'Internal Server Error'
            });
        }

        return res.status(201).json(ticketType);
    }

    async getById(req, res) {
        const {
            id
        } = req.params;

        const ticketType = await getById(id);

        if (!ticketType) {
            return res.status(404).json({
                message: 'Ticket type not found'
            });
        }

        return res.status(200).json(ticketType);
    }

    async update(req, res) {
        const {
            id
        } = req.params;

        const {
            tenLoaiVe,
            giaVe,
            trangThai
        } = req.body;

        const ticketType = await getById(id);

        if (!ticketType) {
            return res.status(404).json({
                message: 'Ticket type not found'
            });
        }

        const updatedTicketType = updatedTicketTypeById(id, {
            tenLoaiVe,
            giaVe,
            trangThai
        });

        if (!updatedTicketType) {
            return res.status(500).json({
                message: 'Internal Server Error'
            });
        }

        return res.status(200).json({
            message: 'Ticket type updated'
        });
    }

    async delete(req, res) {
        const {
            id
        } = req.params;

        const ticketType = await getById(id);

        if (!ticketType) {
            return res.status(404).json({
                message: 'Ticket type not found'
            });
        }

        const deletedTicketType = await deletedTicketTypeById(id);

        if (!deletedTicketType) {
            return res.status(500).json({
                message: 'Internal Server Error'
            });
        }

        return res.status(200).json({
            message: 'Ticket type deleted'
        });
    }

}

module.exports = new TicketTypeController;