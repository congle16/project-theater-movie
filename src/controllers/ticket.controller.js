const {
    getAllTickets,
    createTicket,
    getTicketById,
    updateTicket,
    deleteTicket
} = require('../services/ticket.service');

const {
    getShowtimeById
} = require('../services/showtime.service');

const {
    getById
} = require('../services/ticketType.service');

const {
    getRoomById
} = require('../services/room.service');

const {
    getMovieById
} = require('../services/movie.service');

class TicketController {

    async index(req, res) {
        const tickets = await getAllTickets();

        if (!tickets) {
            return res.status(404).json({
                message: 'No Tickets found'
            });
        }

        return res.status(200).json(tickets);
    }

    async create(req, res) {
        const {
            maSuatChieu, maLoaiVe, maPhong, maPhim, ngayMua
        } = req.body;

        console.log(maSuatChieu, maLoaiVe, maPhong, maPhim, ngayMua);

        if (!maSuatChieu || !maLoaiVe || !maPhong || !maPhim || !ngayMua) {
            return res.status(400).json({
                message: 'Missing fields'
            });
        }

        const suatChieu = await getShowtimeById(maSuatChieu);

        if (!suatChieu) {
            return res.status(404).json({
                message: 'No showtime found'
            });
        }

        const ticketType = await getById(maLoaiVe);

        if (!ticketType) {
            return res.status(404).json({
                message: 'No ticket type found'
            });
        }

        const room = getRoomById(maPhong);

        if (!room) {
            return res.status(404).json({
                message: 'No room found'
            });
        }

        const movie = getMovieById(maPhim);

        if (!movie) {
            return res.status(404).json({
                message: 'No movie found'
            });
        }

        const ticket = await createTicket({
            maSuatChieu,
            maLoaiVe,
            maPhong,
            maPhim,
            ngayMua,
            trangThai : 'Trống'
        });

        if (!ticket) {
            return res.status(500).json({
                message: 'Can not create Ticket'
            })
        }

        return res.status(201).json({
            message: 'Create Ticket successfully'
        });
    }

    async getById(req, res) {
        const {
            id
        } = req.params;

        const ticket = await getTicketById(id);

        if (!ticket) {
            return res.status(404).json({
                message: 'No Ticket found'
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
                message: 'No Ticket found'
            });
        }

        const {
            maSuatChieu, maLoaiVe, maPhong, maPhim, ngayMua, trangThai
        } = req.body;

        if (!maSuatChieu || !maLoaiVe || !maPhong || !maPhim || !ngayMua || !trangThai) {
            return res.status(400).json({
                message: 'Missing fields'
            });
        }

        const ticket = await updateTicket(id, {
            maSuatChieu, maLoaiVe, maPhong, maPhim, ngayMua, trangThai
        });

        if (!ticket) {
            return res.status(500).json({
                message: 'Can not update Ticket'
            })
        }

        return res.status(200).json({
            message: 'Update Ticket successfully'
        });
    }

    async delete(req, res) {
        const {
            id
        } = req.params;

        const checkExists = await getTicketById(id);

        if (!checkExists) {
            return res.status(404).json({
                message: 'No Ticket found'
            });
        }

        const ticket = await deleteTicket(id);

        if (!ticket) {
            return res.status(500).json({
                message: 'Can not delete Ticket'
            })
        }

        return res.status(200).json({
            message: 'Delete Ticket successfully'
        });
    }
}

module.exports = new TicketController;