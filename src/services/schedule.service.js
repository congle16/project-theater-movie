'use strict';

const {LichChieu} = require('../../models');


const getAllSchedules = async () => {
    try {
        return await LichChieu.findAll({
            attributes: ['id', 'ngayChieu', 'trangThai'],
            include: [{
                association: 'phongChieu',
                attributes: ['id', 'tenPhong']
            },
            {
                association: 'phim',
                attributes: ['id', 'tenPhim', 'daoDien']
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

const createSchedule = async (schedule) => {
    try {
        return await LichChieu.create(schedule);
    } catch (error) {
        console.log(error);
        return {
            status: 500,
            message: 'Internal Server Error'
        };
    }
}

const getScheduleById = async (id) => {
    try {
        return await LichChieu.findOne({
            where: {
                id
            },
            attributes: ['id', 'ngayChieu', 'trangThai'],
            include: [{
                    association: 'phongChieu',
                    attributes: ['id', 'tenPhong']
                },
                {
                    association: 'phim',
                    attributes: ['id', 'tenPhim', 'daoDien']
                }
            ]
        });
    } catch (error) {
        console.log(error);
        return {
            status: 500,
            message: 'Internal Server Error'
        };
    }
}

const getByMovieId = async (maPhim) => {
    try {
        return await LichChieu.findAll({
            where: {
                maPhim
            },
            attributes: ['id', 'maPhong', 'maPhim', 'ngayChieu', 'trangThai']
        });
    } catch (error) {
        console.log(error);
        return {
            status: 500,
            message: 'Internal Server Error'
        };
    }
}

const getByMovieIdTrangThai = async (maPhim, trangThai) => {
    try {
        return await LichChieu.findAll({
            where: {
                maPhim,
				trangThai
            },
            attributes: ['id', 'maPhong', 'maPhim', 'ngayChieu', 'trangThai']
        });
    } catch (error) {
        console.log(error);
        return {
            status: 500,
            message: 'Internal Server Error'
        };
    }
}

const updateSchedule = async (id, schedule) => {
    try {
        return await LichChieu.update(schedule, {
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
        return await LichChieu.update({
            trangThai: 'Đã chiếu'
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
    getAllSchedules,
    createSchedule,
    getScheduleById,
    updateSchedule,
    deleteCategoryById,
	getByMovieId,
	getByMovieIdTrangThai
}