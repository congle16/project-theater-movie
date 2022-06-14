const {
    getAllSchedules,
    createSchedule,
    getScheduleById,
    updateSchedule,
    deleteCategoryById,
	getByMovieId
} = require('../services/schedule.service');

const {
    getRoomById
} = require('../services/room.service');

const {
    getMovieById
} = require('../services/movie.service');

class ScheduleController {

    async index(req, res) {
        const schedules = await getAllSchedules();

        if(!schedules) {
            return res.status(404).json({
                message: 'No schedules found'
            });
        }

        return res.status(200).json(schedules);
    }

	
    async create(req, res) {
        const {
            maPhong,
            maPhim,
            ngayChieu
        } = req.body;

        if (!maPhong || !maPhim || !ngayChieu) {
            return res.status(400).json({
                message: 'Missing fields'
            });
        }

        const room = await getRoomById(maPhong);

        if (!room) {
            return res.status(404).json({
                message: 'Room not found'
            });
        }

        const film = await getMovieById(maPhim);

        if (!film) {
            return res.status(404).json({
                message: 'Film not found'
            });
        }

        const schedule = await createSchedule({
            maPhong,
            maPhim,
            ngayChieu,
            trangThai : "Chuẩn bị chiếu",
        });

        if (!schedule) {
            return res.status(500).json({
                message: 'Can not create schedule'
            })
        }

        return res.status(200).json({
            message: 'Create schedule successfully'
        });
    }
	
	async getByMovieId(req, res) {
        const {
            maPhim
        } = req.params;

        if (!maPhim) {
            return res.status(400).json({
                message: 'Missing fields'
            });
        }

        const schedule = await getByMovieId(maPhim);

        if (!schedule) {
            return res.status(404).json({
                message: 'No schedule found'
            });
        }
	}

    async showDetail(req, res) {
        const {
            id
        } = req.params;

        if (!id) {
            return res.status(400).json({
                message: 'Missing fields'
            });
        }

        const schedule = await getScheduleById(id);

        if (!schedule) {
            return res.status(404).json({
                message: 'No schedule found'
            });
        }

        return res.status(200).json(schedule);
    }

    async update(req, res) {
        const {
            id
        } = req.params;

        if (!id) {
            return res.status(400).json({
                message: 'Missing fields'
            });
        }
        
        const schedule = await getScheduleById(id);

        if (!schedule) {
            return res.status(404).json({
                message: 'No schedule found'
            });
        }

        const {
            maPhong,
            maPhim,
            ngayChieu,
            trangThai,
        } = req.body;

        if (!maPhong || !maPhim || !ngayChieu || !trangThai) {
            return res.status(400).json({
                message: 'Missing fields'
            });
        }

        const updatedSchedule = updateSchedule(id, {
            maPhong,
            maPhim,
            ngayChieu,
            trangThai,
        });

        if (!updatedSchedule) {
            return res.status(500).json({
                message: 'Can not update schedule'
            })
        }

        return res.status(200).json({
            message: 'Update schedule successfully'
        });
    }

    async delete(req, res) {
        const {
            id
        } = req.params;

        const schedule = await getScheduleById(id);

        if (!schedule) {
            return res.status(404).json({
                message: 'No schedule found'
            });
        }

        const deletedSchedule = await deleteCategoryById(id);

        if (!deletedSchedule) {
            return res.status(500).json({
                message: 'Can not delete schedule'
            })
        }

        return res.status(200).json({
            message: 'Delete schedule successfully'
        });
    }
}

module.exports = new ScheduleController;