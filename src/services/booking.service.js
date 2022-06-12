'use strict';

const {
    VeMua
} = require('../../models');

const getAllBookings = async () => {
    try {
        return await VeMua.findAll({
            attributes: ['id', 'maUser', 'maVe']
        });
    } catch (error) {
        console.log(error);
        return {
            status: 500,
            message: 'Internal Server Error'
        };
    }
};

const createBooking = async (ticket) => {
    try {
        return await VeMua.create(ticket);
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
        return await VeMua.findOne({
            where: {
                id
            },
            attributes: ['maUser', 'maVe']
        });
    } catch (error) {
        console.log(error);
        return {
            status: 500,
            message: 'Internal Server Error'
        }
    }
};

const updateBooking = async (id, ticket) => {
    try {
        return await VeMua.update(ticket, {
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
    getAllBookings,
    createBooking,
    getTicketById,
    updateBooking
}