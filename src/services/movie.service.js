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

module.exports = {
    getAllMovies
}