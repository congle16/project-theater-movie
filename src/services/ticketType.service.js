'use strict';

const {LoaiVe} = require('../../models');

const getAllTicketTypes = async () => {
    try {
        return await LoaiVe.findAll({
            attributes: ['id', 'tenLoaiVe', 'giaVe', 'trangThai'],
        });
    } catch (error) {
        console.log(error);
        return {
            status: 500,
            message: 'Internal Server Error'
        };
    }
}

const createTicketType = async (ticketType) => {
    try {
        return await LoaiVe.create(ticketType);
    } catch (error) {
        console.log(error);
        return {
            status: 500,
            message: 'Internal Server Error'
        };
    }
}

const getById = async (id) => {
    try {
        return await LoaiVe.findOne({
            where: {
                id
            }
        });
    } catch (error) {
        console.log(error);
        return {
            status: 500,
            message: 'Internal Server Error'
        };
    }
}

const updatedTicketTypeById = async (id, ticketType) => {
    try {
        return await LoaiVe.update(ticketType, {
            where: {
                id
            }
        });
    } catch (error) {
        console.log(error);
        return {
            status: 500,
            message: 'Internal Server Error'
        };
    }
}

const deletedTicketTypeById = async (id) => {
    try {
        return await LoaiVe.update({
            trangThai: 'đã bán'
            }, {
                where: 
                {
                    id
                }
            });
    } catch (error) {
        console.log(error);
        return {
            status: 500,
            message: 'Internal Server Error'
        };
    }
}

module.exports = {
    getAllTicketTypes,
    createTicketType,
    getById,
    updatedTicketTypeById,
    deletedTicketTypeById
}