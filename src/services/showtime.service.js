'use strict';

const {SuatChieu} = require('../../models');

const getAllShowtimes = async () => {
    try {
        return await SuatChieu.findAll({
            attributes: ['id', 'tenSuatChieu', 'trangThai', 'timeStart', 'timeEnd'],
            include: [{
                association: 'lichChieu',
                attributes: ['id', 'ngayChieu'],
                include: [{
                    association: 'phongChieu',
                    attributes: ['id', 'tenPhong']
                }, {
                    association: 'phim',
                    attributes: ['id', 'tenPhim']
                }]
            }]
        });
    } catch (error) {
        console.log(error);
        return {
            status: 500,
            message: 'Internal Server Error'
        };
    }
};

const createShowtime = async (showtime) => {
    try {
        return await SuatChieu.create(showtime);
    } catch (error) {
        console.log(error);
        return { 
            status: 500,
            message: 'Internal Server Error'
        }
    }
};

const getShowtimeById = async (id) => {
    try {
        return await SuatChieu.findOne({
            where: {
                id
            },
            attributes: ['id', 'maLichChieu', 'tenSuatChieu', 'trangThai', 'timeStart', 'timeEnd']
        });
    } catch (error) {
        console.log(error);
        return {
            status: 500,
            message: 'Internal Server Error'
        }
    }
};

const updateShowtime = async (id, showtime) => {
    try {
        return await SuatChieu.update(showtime, {
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

const deleteShowtime = async (id) => {
    try {
        return await SuatChieu.update({
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

const getByScheduleIdTrangThai = async (maLichChieu, trangThai) => {
    try {
        return await SuatChieu.findAll({
            where: {
                maLichChieu,
				trangThai
            },
            attributes: ['id', 'maLichChieu', 'tenSuatChieu', 'trangThai', 'timeStart', 'timeEnd']
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
    getAllShowtimes,
    createShowtime,
    getShowtimeById,
    updateShowtime,
    deleteShowtime,
	getByScheduleIdTrangThai
}