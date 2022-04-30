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
    create(req, res) {
        const {
            title,
            description,
            rating
        } = req.body;

    }
}

module.exports = new MovieController;