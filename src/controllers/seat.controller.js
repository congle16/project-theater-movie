const {
    getAllSeats,
    createSeat,
    getSeatById,
    updateSeat,
    deleteSeat,
	getByRoomId
} = require('../services/seat.service');

const {
    getRoomById,
} = require('../services/room.service');

class SeatController {

    async index(req, res) {
        const seats = await getAllSeats();

        if (!seats) {
            return res.status(404).json({
                message: 'No seats found'
            });
        }

        return res.status(200).json(seats);
    }

    async create(req, res) {
        const {
            maPhong,
            vitriDay, 
            vitriCot
        } = req.body;

        const room = await getRoomById(maPhong);

        if (!room) {
            return res.status(404).json({
                message: 'Room not found'
            });
        }

        if (!maPhong || !vitriDay || !vitriCot) {
            return res.status(400).json({
                message: 'Missing required fields'
            });
        }

        const seat = await createSeat({
            maPhong,
            trangThai: 'trống',
            vitriDay,
            vitriCot
        });

        if (!seat) {
            return res.status(500).json({
                message: 'Can not create this seat'
            })
        }

        return res.status(201).json({
            message: 'Create seat successfully'
        });
    }

    async getById(req, res) {
        const {
            id
        } = req.params;

        const seat = await getSeatById(id);

        if (!seat) {
            return res.status(404).json({
                message: 'No seat found'
            });
        }

        return res.status(200).json(seat);
    }
	
	async getByRoomId(req, res) {
        const {
            maPhong
        } = req.params;

        const seat = await getByRoomId(maPhong);

        if (!seat) {
            return res.status(404).json({
                message: 'No seat found'
            });
        }

        return res.status(200).json(seat);
    }

    async update(req, res) {
        const {
            id
        } = req.params;

        const checkExists = await getSeatById(id);

        if (!checkExists) {
            return res.status(404).json({
                message: 'No seat found'
            });
        }

        const {
            maPhong,
            vitriDay,
            vitriCot,
            trangThai
        } = req.body;

        if (!maPhong || !vitriDay || !vitriCot || !trangThai) {
            return res.status(400).json({
                message: 'Missing required fields'
            });
        }

        const seat = await updateSeat(id, {
            maPhong,
            vitriDay,
            vitriCot,
            trangThai
        });

        if (!seat) {
            return res.status(500).json({
                message: 'Can not update this seat'
            })
        }

        return res.status(200).json({
            message: 'Update seat successfully'
        });
    }

    async delete(req, res) {
        const {
            id
        } = req.params;

        const checkExists = await getSeatById(id);

        if (!checkExists) {
            return res.status(404).json({
                message: 'No seat found'
            });
        }

        const seat = await deleteSeat(id);

        if (!seat) {
            return res.status(500).json({
                message: 'Can not delete seat'
            })
        }

        return res.status(200).json({
            message: 'Delete seat successfully'
        });
    }
}

module.exports = new SeatController;