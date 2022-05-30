'use strict';

const {ChucVu} = require('../../models');

const getAllChucVu = async () => {
    try {
        return await ChucVu.findAll({
            attributes: ['id', 'tenCV'],
        });
    } catch (error) {
        console.log(error);
        return {
            status: 500,
            message: 'Internal Server Error'
        };
    }
}

const create = async (chucVu) => {
    try {
        return await ChucVu.create(chucVu);
    } catch (error) {
        console.log(error);
        return {
            status: 500,
            message: 'Internal Server Error'
        };
    }
}

const getChucVuByName = (name) => {
    return ChucVu.findOne({
        where: {
            tenCV: name
        }
    });
}

const getChucVuById = (id) => {
    return ChucVu.findOne({
        where: {
            id: id
        }
    });
}

const update = async (id, chucVu) => {
    try {
        return await ChucVu.update(chucVu, {
            where: {
                id: id
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

const deletePosition = async (id) => {
    try {
        return await ChucVu.destroy({
            where: {
                id: id
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
    getAllChucVu,
    create,
    getChucVuByName,
    getChucVuById, 
    update,
    deletePosition
}