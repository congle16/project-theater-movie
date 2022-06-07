'use strict';

const {
    QuangCao
} = require('../../models');

const getAllAdvertisements = async () => {
    try {
        const advertisements = await QuangCao.findAll({
            attributes: ['id', 'maPhim', 'tenQuangCao', 'noiDung', 'timeStart', 'timeEnd']
        });

        if (!advertisements) {
            return {
                status: 404,
                message: 'No advertisements found'
            };
        }

        return {
            status: 200,
            data: advertisements
        };
    } catch (error) {
        console.log(error);
        return {
            status: 500,
            message: 'Internal Server Error'
        };
    }
}

const createAdvertisement = async (advertisement) => {
    try {
        // QuangCao.sync({force: true}).then(() => {
        //     return QuangCao.create(advertisement);
        // })
        return QuangCao.create(advertisement);
    } catch (error) {
        console.log(error);
        return {
            status: 500,
            message: 'Internal Server Error'
        }
    }
}

const getAdvertisementById = async (id) => {
    try {
        return await QuangCao.findOne({
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

const updatedAdvertisementById = async (id, advertisement) => {
    try {
        return await QuangCao.update(advertisement, {
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

const deleteAdvertisementById = async (id) => {
    try {
        return await QuangCao.destroy({
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


module.exports = {
    getAllAdvertisements,
    createAdvertisement,
    getAdvertisementById,
    updatedAdvertisementById,
    deleteAdvertisementById
}