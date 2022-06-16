const {
    getAllChucVu,
    create,
    getChucVuByName,
    getChucVuById,
    update,
    deletePosition
} = require("../services/position.service");


class PositionController {
    async getAll(req, res) {
        const query = req.query;
        console.log(query);
        try {
            const positions = await getAllChucVu();
            if (!positions) {
                return res.status(404).json({
                    message: "No positions found"
                });
            }
            return res.status(200).json(positions);
        } catch (error) {
            console.log(error);
            return res.status(500).json({
                message: 'Internal Server Error'
            });
        }
    }

    async create(req, res) {
        const {
            tenCV,
        } = req.body;
        console.log(tenCV);

        if (!tenCV) {
            return res.status(400).json({
                message: 'Missing fields'
            });
        }

        const checkExists = await getChucVuByName(tenCV);
        console.log(checkExists);
        if (checkExists) {
            return res.status(400).json({
                message: 'Position already exists'
            });
        }


        try {
            const position = await create({
                tenCV,
            });
            if (!position) {
                return res.status(500).json({
                    message: 'Can not create position'
                })
            }
            return res.status(200).json({
                message: 'Create position successfully'
            });
        } catch (error) {
            console.log(error);
            return res.status(500).json({
                message: 'Internal Server Error'
            });
        }
    }

    async getById(req, res) {
        const {
            id
        } = req.params;

        try {
            const position = await getChucVuById(id);
            if (!position) {
                return res.status(404).json({
                    message: 'Position not found'
                });
            }
            return res.status(200).json(position);
        } catch (error) {
            console.log(error);
            return res.status(500).json({
                message: 'Internal Server Error'
            });
        }
    }

    async update(req, res) {
        const {
            id
        } = req.params;
        const {
            tenCV,
        } = req.body;

        if (!tenCV) {
            return res.status(400).json({
                message: 'Missing fields'
            });
        }

        const checkExists = await getChucVuById(id);
        if (!checkExists) {
            return res.status(400).json({
                message: 'Position not found'
            });
        }

        try {
            const updatedPosition = await update(id, {
                tenCV,
            });

            if (!updatedPosition) {
                return res.status(500).json({
                    message: 'Can not update position'
                })
            }

            return res.status(200).json({
                message: 'Update position successfully'
            });
        } catch (error) {
            console.log(error);
            return res.status(500).json({
                message: 'Internal Server Error'
            });
        }
    }

    async delete(req, res) {
        const {
            id
        } = req.params;

        try {
            const position = await getChucVuById(id);
            if (!position) {
                return res.status(404).json({
                    message: 'Position not found'
                });
            }
            const deletedPosition = await deletePosition(id);
            if (!deletedPosition) {
                return res.status(500).json({
                    message: 'Can not delete position'
                })
            }
            return res.status(200).json({
                message: 'Delete position successfully'
            });
        } catch (error) {
            console.log(error);
            return res.status(500).json({
                message: 'Internal Server Error'
            });
        }
    }
}

module.exports = new PositionController();