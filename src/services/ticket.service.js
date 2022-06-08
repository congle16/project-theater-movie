'use strict';

const {
    Ve
} = require('../../models');

const getAllTickets = async () => {
    try {
        return await Ve.findAll({
            attributes: ['id', 'maSuatChieu', 'maLoaiVe', 'maPhong', 'maPhim', 'ngayMua', 'trangThai']
        });
    } catch (error) {
        console.log(error);
        return {
            status: 500,
            message: 'Internal Server Error'
        };
    }
};

const createTicket = async (ticket) => {
    try {
        return await Ve.create(ticket);
    } catch (error) {
        console.log(error);
        return {
            status: 500,
            message: 'Internal Server Error'
        }
    }
};

const getTicketById = async (id) => {
    try {
        return await Ve.findOne({
            where: {
                id
            },
            attributes: ['maSuatChieu', 'maLoaiVe', 'maPhong', 'maPhim', 'ngayMua', 'trangThai']
        });
    } catch (error) {
        console.log(error);
        return {
            status: 500,
            message: 'Internal Server Error'
        }
    }
};

const updateTicket = async (id, ticket) => {
    try {
        return await Ve.update(ticket, {
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

const deleteTicket = async (id) => {
    try {
        return await Ve.update({
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
    getAllTickets,
    createTicket,
    getTicketById,
    updateTicket,
    deleteTicket
}