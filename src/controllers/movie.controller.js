const {
    getAllMovies
} = require('../services/movie.service');

class MovieController {
    // [GET] /
    async index(req, res) {
        const movies = await getAllMovies();
        const query = req.query;
        console.log(query);

        if(!movies) {
            return res.status(404).json({
                message: 'No movies found'
            });
        }

        return res.status(200).json(movies);
    }

    // [POST] /
    async create(req, res) {
        const {
            tenPhim,
            noiDungPhim,
            daoDien,
            nuocSanXuat,
            thoiLuong,
            trailer,
            poster,
            trangThai,
        } = req.body;

        if (!tenPhim || !noiDungPhim || !daoDien || !nuocSanXuat || !thoiLuong || !trailer || !poster || !trangThai) {
            return res.status(400).json({
                message: 'Missing fields'
            });
        }

        const movie = await createMovie({
            tenPhim,
            noiDungPhim,
            daoDien,
            nuocSanXuat,
            thoiLuong,
            trailer,
            poster,
            trangThai
        });

        if (!movie) {
            return res.status(500).json({
                message: 'Can not create movie'
            })
        }

        return res.status(200).json(movie);
    }
}

module.exports = new MovieController;