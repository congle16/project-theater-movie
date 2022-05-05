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

module.exports = {
    createUser,
    createKhachHang,
    getMaxId
}