'use strict';

const {
    PhongChieu
} = require('../../models');

const getAllRooms = async () => {
    try {
        return await PhongChieu.findAll({
            attributes: ['id', 'tenPhong', 'trangThai', 'soLuongGhe']
        });
    } catch (error) {
        console.log(error);
        return {
            status: 500,
            message: 'Internal Server Error'
        };
    }
}

const createRoom = async (room) => {
    try {
        return await PhongChieu.create(room);
    } catch (error) {
        console.log(error);
        return {
            status: 500,
            message: 'Internal Server Error'
        };
    }
}

const getRoomById = async (id) => {
    try {
        return await PhongChieu.findOne({
            where: {
                id
            },
            attributes: ['id', 'tenPhong', 'trangThai', 'soLuongGhe']
        });
    } catch (error) {
        console.log(error);
        return {
            status: 500,
            message: 'Internal Server Error'
        };
    }
}

const updateRoomById = (id, room) => {
    return PhongChieu.update(room, {
        where: {
            id
        }
    });
}

module.exports = {
    getAllRooms,
    createRoom,
    getRoomById,
    updateRoomById
}