'use strict';

const {TheLoaiPhim} = require('../../models');

const getAllCategories = async () => {
    try {
        return await TheLoaiPhim.findAll({
            attributes: ['id', 'tenTheLoai', 'trangThai'],
        });
    } catch (error) {
        console.log(error);
        return {
            status: 500,
            message: 'Internal Server Error'
        };
    }
}

const createCategory = async (category) => {
    try {
        return await TheLoaiPhim.create(category);
    } catch (error) {
        console.log(error);
        return {
            status: 500,
            message: 'Internal Server Error'
        };
    }
}

const getCategoryById = async (id) => {
    try {
        return await TheLoaiPhim.findOne({
            where: {
                id
            },
            attributes: ['id', 'tenTheLoai', 'trangThai']
        });
    } catch (error) {
        console.log(error);
        return {
            status: 500,
            message: 'Internal Server Error'
        };
    }
}

const updateCategory = async (id, category) => {
    try {
        return await TheLoaiPhim.update(category, {
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

const deleteCategoryById = async (id) => {
    try {
        return await TheLoaiPhim.update({
            trangThai: 'deleted'
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
        };
    }
}

module.exports = {
    getAllCategories,
    createCategory,
    getCategoryById,
    updateCategory,
    deleteCategoryById
}