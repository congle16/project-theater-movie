'use strict';
const express = require('express');
const movieRouter = express.Router();

const movieController = require('../controllers/movie.controller');

/**
 * @swagger
 * components:
 *   schemas:
 *     Movie:
 *       type: object
 *       required:
 *         - tenPhim
 *         - noiDungPhim
 *         - daoDien
 *         - nuocSanXuat
 *         - thoiLuong
 *         - trailer
 *         - poster
 *         - trangThai
 *       properties:
 *         id:
 *           type: string
 *           description: The unique identifier of a movie
 *         tenPhim:
 *           type: string
 *           description: The name of a movie
 *         noiDungPhim:
 *           type: string
 *           description: The content of a movie
 *         daoDien:
 *           type: string
 *           description: The director of a movie
 *         nuocSanXuat:
 *           type: string
 *           description: The country of a movie
 *         thoiLuong:
 *           type: string
 *           description: The duration of a movie
 *         trailer:
 *           type: string
 *           description: The trailer of a movie
 *         poster:
 *           type: string
 *           description: The poster of a movie
 *         trangThai:
 *           type: string
 *           description: The status of a movie
 */

/**
 * @swagger
 * tags:
 *   name: Movies
 *   description: Movies management
 */

/**
 * @swagger
 * /movies:
 *   get:
 *     summary: Get all movies
 *     tags: [Movies]
 *     responses:
 *       200:
 *         description: An array of movies
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Movie'
 */

movieRouter.get('/', movieController.index);

movieRouter.post('/', movieController.create);

movieRouter.get('/:id', movieController.showDetail);

movieRouter.delete('/:id', movieController.delete);

movieRouter.put('/:id', movieController.update);

module.exports = movieRouter;