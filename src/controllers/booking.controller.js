const {
    getAllBookings,
    createBooking,
    getTicketBuyById,
    updateBooking
} = require('../services/booking.service');

const {
    getTicketById,
    deleteTicket
} = require('../services/ticket.service');

class BookingController {

    async index(req, res) {
        const tickets = await getAllBookings();
        const query = req.query;
        console.log(query);

        if (!tickets) {
            return res.status(404).json({
                message: 'No ticket are found'
            });
        }

        return res.status(200).json(tickets);
    }

    async create(req, res) {
        const maUser = req.user.dataValues.id;
        console.log(maUser);

        const {
            maVe
        } = req.body;

        if (!maUser || !maVe) {
            return res.status(400).json({
                message: 'Missing fields'
            });
        }

        const CheckTicket = await getTicketById(maVe);

        if (!CheckTicket) {
            return res.status(404).json({
                message: 'No ticket found'
            });
        }

        const checkExists = await getTicketBuyById(maVe);

        if (checkExists) {
            return res.status(400).json({
                message: 'Ticket is already booked'
            });
        }

        const ticket = await createBooking({
            maUser,
            maVe
        });

        if (!ticket) {
            return res.status(500).json({
                message: 'Can not book ticket'
            })
        }

        const deletedTicket = await deleteTicket(maVe);

        if (!deletedTicket) {
            return res.status(500).json({
                message: 'Error when book ticket'
            })
        }

        return res.status(201).json({
            message: 'Book ticket successfully'
        });
    }

    async getById(req, res) {
        const {
            id
        } = req.params;

        const ticket = await getTicketBuyById(id);

        if (!ticket) {
            return res.status(404).json({
                message: 'No ticket found'
            });
        }

        return res.status(200).json(ticket);
    }

    async update(req, res) {
        const {
            id
        } = req.params;

        const checkExists = await getTicketById(id);

        if (!checkExists) {
            return res.status(404).json({
                message: 'No ticket found'
            });
        }

        const {
            maUser,
            maVe
        } = req.body;

        if (!maUser || !maVe) {
            return res.status(400).json({
                message: 'Missing fields'
            });
        }

        const ticket = await updateBooking(id, {
            maUser,
            maVe
        });

        if (!ticket) {
            return res.status(500).json({
                message: 'Can not update ticket'
            })
        }

        return res.status(200).json({
            message: 'Update ticket successfully'
        });
    }
}

module.exports = new BookingController;