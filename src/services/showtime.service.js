'use strict';

const {SuatChieu} = require('../../models');

const getAllShowtimes = async () => {
    try {
        return await SuatChieu.findAll({
            attributes: ['id', 'maLichChieu', 'tenSuatChieu', 'trangThai', 'timeStart', 'timeEnd']
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

const getByScheduleIdTrangThai = async (maPhim, trangThai) => {
    try {
        return await LichChieu.findAll({
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