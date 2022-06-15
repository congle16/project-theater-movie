const {
    getAllAdvertisements,
    createAdvertisement,
    getAdvertisementById,
    updatedAdvertisementById,
    deleteAdvertisementById
} = require('../services/advertisement.service');

const {
    getMovieById
} = require('../services/movie.service');

class AdvertisementController{

    async index(req, res){
        const advertisements = await getAllAdvertisements();

        if(!advertisements) {
            return res.status(404).json({
                message: 'No advertisements found'
            });
        }

        return res.status(200).json(advertisements);
    }

    async create(req, res){
        const {
            maPhim,
            tenQuangCao,
            noiDung,
            timeStart,
            timeEnd
        } = req.body;

        if(!maPhim || !tenQuangCao || !noiDung || !timeStart || !timeEnd) {
            return res.status(400).json({
                message: 'Missing fields'
            });
        }

        const movie = await getMovieById(maPhim);

        if(!movie) {
            return res.status(404).json({
                message: 'No movie found'
            });
        }

        const advertisement = await createAdvertisement({
            maPhim,
            tenQuangCao,
            noiDung,
            timeStart,
            timeEnd
        });

        if(!advertisement) {
            return res.status(500).json({
                message: 'Can not create advertisement'
            });
        }

        return res.status(200).json({
            message: 'Create advertisement successfully'
        });
    }

    async getById(req, res){
        const {
            id
        } = req.params;

        const advertisement = await getAdvertisementById(id);

        if(!advertisement) {
            return res.status(404).json({
                message: 'No advertisement found'
            });
        }

        return res.status(200).json(advertisement);
    }

    async update(req, res){
        const {
            id
        } = req.params;

        const advertisement = await getAdvertisementById(id);

        if(!advertisement) {
            return res.status(404).json({
                message: 'No advertisement found'
            });
        }

        const {
            maPhim,
            tenQuangCao,
            noiDung,
            timeStart,
            timeEnd
        } = req.body;

        if(!maPhim || !tenQuangCao || !noiDung || !timeStart || !timeEnd) {
            return res.status(400).json({
                message: 'Missing fields'
            });
        }

        const movie = await getMovieById(maPhim);

        if(!movie) {
            return res.status(404).json({
                message: 'No movie found'
            });
        }

        const updatedAdvertisement = await updatedAdvertisementById(id, {
            maPhim,
            tenQuangCao,
            noiDung,
            timeStart,
            timeEnd
        });

        if(!updatedAdvertisement) {
            return res.status(500).json({
                message: 'Can not update advertisement'
            });
        }

        return res.status(200).json({
            message: 'Update advertisement successfully'
        });
    }

    async delete(req, res){
        const {
            id
        } = req.params;

        const advertisement = await getAdvertisementById(id);

        if(!advertisement) {
            return res.status(404).json({
                message: 'No advertisement found'
            });
        }

        const deletedAdvertisement = await deleteAdvertisementById(id);

        if(!deletedAdvertisement) {
            return res.status(500).json({
                message: 'Can not delete advertisement'
            });
        }

        return res.status(200).json({
            message: 'Delete advertisement successfully'
        });
    }
}

module.exports = new AdvertisementController;