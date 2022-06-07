'use strict';

const {
    Ghe
} = require('../../models');

const getAllSeats = async () => {
    try {
        return await Ghe.findAll({
            attributes: ['id', 'maPhong', 'trangThai', 'vitriDay', 'vitriCot']
        });
    } catch (error) {
        console.log(error);
        return {
            status: 500,
            message: 'Internal Server Error'
        };
    }
};

const createSeat = async (seat) => {
    try {
        return await Ghe.create(seat);
    } catch (error) {
        console.log(error);
        return {
            status: 500,
            message: 'Internal Server Error'
        }
    }
};

const getSeatById = async (id) => {
    try {
        return await Ghe.findOne({
            where: {
                id
            },
            attributes: ['id', 'maPhong', 'trangThai', 'vitriDay', 'vitriCot']
        });
    } catch (error) {
        console.log(error);
        return {
            status: 500,
            message: 'Internal Server Error'
        }
    }
};

const updateSeat = async (id, seat) => {
    try {
        return await Ghe.update(seat, {
            where: {
                id
            }
        });
    } catch (error) {
        console.log(error);
        return {
            status: 500,
            message: 'Internal Server Error'
        }
    }
};

const deleteSeat = async (id) => {
    try {
        return await Ghe.update({
            trangThai: 'Đã đặt'
        }, {
            where: {
                id
            }
        });
    } catch (error) {
        console.log(error);
        return {
            status: 500,
            message: 'Internal Server Error'
        }
    }
};

module.exports = {
    getAllSeats,
    createSeat,
    getSeatById,
    updateSeat,
    deleteSeat
}