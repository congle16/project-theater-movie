const {
    getAllMovies,
    getMovieById,
    createMovie,
    deleteMovie,
    updateMovieById,
    checkExistMovieById
} = require('../services/movie.service');

const {
    getCategoryById
} = require('../services/category.service');

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
            maTheLoai,
            tenPhim,
            noiDungPhim,
            daoDien,
            nuocSanXuat,
            thoiLuong,
            trailer,
            poster,
            trangThai,
        } = req.body;

        if (!maTheLoai || !tenPhim || !noiDungPhim || !daoDien || !nuocSanXuat || !thoiLuong || !trailer || !poster || !trangThai) {
            return res.status(400).json({
                message: 'Missing fields'
            });
        }

        const category = await getCategoryById(maTheLoai);

        if (!category) {
            return res.status(404).json({
                message: 'No category found'
            });
        }

        const movie = await createMovie({
            maTheLoai,
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

        return res.status(200).json({
            message: 'Create movie successfully'
        });
    }

    // [GET] /:id
    async showDetail(req, res) {
        const {
            id
        } = req.params;

        const movie = await getMovieById(id);

        if (!movie) {
            return res.status(404).json({
                message: 'Movie not found'
            });
        }

        return res.status(200).json(movie);
    }

    // [DELETE] /:id
    async delete(req, res) {
        const {
            id
        } = req.params;

        const movie = await getMovieById(id);

        if (!movie) {
            return res.status(404).json({
                message: 'Movie not found'
            });
        }

        const deletedMovie = await deleteMovie(id);
        if (!deletedMovie) {
            return res.status(500).json({
                message: 'Can not delete movie'
            });
        }

        return res.status(200).json(deletedMovie);
    }

    // [PUT] /:id
    async update(req, res) {
        const {
            id
        } = req.params;
        console.log(id);

        const {
            maTheLoai,
            tenPhim,
            noiDungPhim,
            daoDien,
            nuocSanXuat,
            thoiLuong,
            trailer,
            poster,
            trangThai,
        } = req.body;

        console.log(maTheLoai, tenPhim, noiDungPhim, daoDien, nuocSanXuat, thoiLuong, trailer, poster, trangThai);

        const isExist = await checkExistMovieById(id);
        if (!isExist) {
            return res.status(404).json({
                message: `Movie with id ${id} not found`
            });
        }

        if (!maTheLoai || !tenPhim || !noiDungPhim || !daoDien || !nuocSanXuat || !thoiLuong || !trailer || !poster || !trangThai) {
            return res.status(400).json({
                message: 'Missing fields'
            });
        }

        const updatedMovie = await updateMovieById(id, {
            maTheLoai,
            tenPhim,
            noiDungPhim,
            daoDien,
            nuocSanXuat,
            thoiLuong,
            trailer,
            poster,
            trangThai
        });

        if (!updatedMovie) {
            return res.status(500).json({
                message: 'Can not update movie'
            });
        }

        console.log(updatedMovie);

        return res.status(200).json({
            message: `Update movie with ${id} successfully`
        });
    }
}

module.exports = new MovieController;