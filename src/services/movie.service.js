'use strict';

const {Phim} = require('../../models');

const getAllMovies = async () => {
    try {
        return await Phim.findAll({
            attributes: ['id', 'maTheLoai', 'tenPhim', 'noiDungPhim', 'daoDien', 'nuocSanXuat', 'thoiLuong', 'trailer', 'poster', 'trangThai'],
        });
    } catch (error) {
        console.log(error);
        return {
            status: 500,
            message: 'Internal Server Error'
        };
    }
}

const createMovie = async (movie) => {
    try {
        return await Phim.create(movie);
    } catch (error) {
        console.log(error);
        return {
            status: 500,
            message: 'Internal Server Error'
        };
    }
}

const getMovieById = async (id) => {
    try {
        return await Phim.findOne({
            where: {
                id
            },
            attributes: ['id', 'maTheLoai', 'tenPhim', 'noiDungPhim', 'daoDien', 'nuocSanXuat', 'thoiLuong', 'trailer', 'poster', 'trangThai']
        });
    } catch (error) {
        console.log(error);
        return {
            status: 500,
            message: 'Internal Server Error'
        };
    }
}

const deleteMovie = async (id) => {
    try {
        return await Phim.update({
            trangThai: 'Đã Chiếu'
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

const updateMovieById = async (id, movie) => {
    try {
        return await Phim.update(movie, {
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

const checkExistMovieById = async (id) => {
    try {
        // return await Movie.findById(id);
        const movie = await Phim.findOne({
            where: {
                id
            },
            attributes: ['id']
        });
        return !(!movie);
    } catch (error) {
        console.log(error);
        return false;
    }
}


const getMovieByStatus = async (trangThai) => {
    try {
        return await Phim.findAll({
            where: {
                trangThai
            },
            attributes: ['id', 'maTheLoai', 'tenPhim', 'noiDungPhim', 'daoDien', 'nuocSanXuat', 'thoiLuong', 'trailer', 'poster', 'trangThai']
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
    getAllMovies,
    createMovie,
    getMovieById,
    deleteMovie,
    updateMovieById,
    checkExistMovieById,
	getMovieByStatus
}