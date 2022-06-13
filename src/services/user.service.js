'use strict';

const {User, KhachHang} = require('../../models');

const createUser = async (user) => {
    try {
        return await User.create(user);
    } catch (error) {
        console.log(error);
        return {
            status: 500,
            message: 'Internal Server Error'
        };
    }
}

const getAllUsers = async () => {
    try {
        return await User.findAll({
            attributes: ['id', 'username', 'type', 'trangThai']
        });
    } catch (error) {
        console.log(error);
        return {
            status: 500,
            message: 'Internal Server Error'
        };
    }
}

const createKhachHang = async (khachHang) => {
    try {
        return await KhachHang.create(khachHang);
    } catch (error) {
        console.log(error);
        return {
            status: 500,
            message: 'Internal Server Error'
        };
    }
}

const getAllKhachHang = async () => {
    try {
        return await KhachHang.findAll({
            attributes: ['id', 'tenKH', 'gioiTinh', 'CMND', 'SDT']
        });
    } catch (error) {
        console.log(error);
        return {
            status: 500,
            message: 'Internal Server Error'
        };
    }
}

const getMaxId = async () => {
    try {
        return await User.max('id');
    } catch (error) {
        console.log(error);
        return {
            status: 500,
            message: 'Internal Server Error'
        };
    }
}

const getUserByUsername = async (username) => {
    try {
        return await User.findOne({
            where: {
                username
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

const getUserByCardId = async (CMND) => {
    try {
        return await KhachHang.findOne({
            where: {
                CMND
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

const deleteUserById = (id) => {
    try {
        return User.update({
            trangThai: 'not active'
        }, {
            where: {
                id
            }
        });
    }
    catch (error) {
        console.log(error);
        return {
            status: 500,
            message: 'Internal Server Error'
        };
    }
}

const getUserById = async (id) => {
    try {
        return await User.findOne({
            where: {
                id
            },
            attributes: ['username', 'type', 'trangThai'],
            include: [{
                model: KhachHang,
                as : 'khachHang',
                attributes: ['tenKH', 'gioiTinh', 'CMND', 'SDT']
            }]
        });
    } catch (error) {
        console.log(error);
        return {
            status: 500,
            message: 'Internal Server Error'
        };
    }
}

const updateUser = async (id, user) => {
    try {
        return await KhachHang.update(user, {
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

const getCustomerByUserId = async (maUser) => {
    try {
        return await KhachHang.findOne({
            where: {
                maUser
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
    createUser,
    createKhachHang,
    getMaxId,
    getUserByUsername,
    getUserByCardId,
    getAllUsers,
    getAllKhachHang,
    getUserById,
    deleteUserById,
    updateUser,
    getCustomerByUserId
}