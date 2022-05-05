'use strict';

const {Phim} = require('../../models');

const getAllMovies = async () => {
    try {
        return await Phim.findAll();
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

module.exports = {
    getAllMovies,
    createMovie
}