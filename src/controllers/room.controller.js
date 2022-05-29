const {
    getAllRooms,
    createRoom,
    getRoomById,
    updateRoomById
} = require('../services/room.service');


class RoomController {
    async create(req, res) {
        const {
            tenPhong,
            soLuongGhe
        } = req.body;
        console.log(tenPhong, soLuongGhe);

        if (!tenPhong || !soLuongGhe) {
            return res.status(400).json({
                message: 'Missing fields'
            });
        }
        const room = await createRoom({tenPhong, soLuongGhe, trangThai: 'active'});

        if (!room) {
            return res.status(500).json({
                message: 'Can not create room'
            })
        }

        return res.status(201).json({
            message: 'Create room successfully'
        });
    }

    async getAllRooms(req, res) {
        const rooms = await getAllRooms();

        if (!rooms) {
            return res.status(404).json({
                message: 'No rooms found'
            });
        }

        return res.status(200).json(rooms);
    }

    async getRoomById(req, res) {
        const {
            id
        } = req.params;

        const room = await getRoomById(id);

        if (!room) {
            return res.status(404).json({
                message: 'No room found'
            });
        }

        return res.status(200).json(room);
    }

    async update(req, res) {
        const {
            id
        } = req.params;
        const {
            tenPhong,
            soLuongGhe,
            trangThai
        } = req.body;

        if (!tenPhong || !soLuongGhe || !trangThai) {
            return res.status(400).json({
                message: 'Missing fields'
            });
        }

        const room = await getRoomById(id);

        if (!room) {
            return res.status(404).json({
                message: 'No room found'
            });
        }

        const updatedRoom = await updateRoomById(id, {tenPhong, soLuongGhe, trangThai});

        if (!updatedRoom) {
            return res.status(500).json({
                message: 'Can not update room'
            });
        }

        return res.status(200).json({
            message: 'Update room successfully',
            data: updatedRoom
        });
    }

    async delete(req, res) {
        const {
            id
        } = req.params;

        const room = await getRoomById(id);

        if (!room) {
            return res.status(404).json({
                message: 'No room found'
            });
        }

        const deletedRoom = await updateRoomById(id, {trangThai: 'deleted'});

        if (!deletedRoom) {
            return res.status(500).json({
                message: 'Can not delete room'
            });
        }

        return res.status(200).json({
            message: 'Delete room successfully',
            data: deletedRoom
        });
    }
}

module.exports = new RoomController;