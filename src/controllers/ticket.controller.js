const {
    getAllTickets,
    createTicket,
    getTicketById,
    updateTicket,
    deleteTicket
} = require('../services/ticket.service');

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