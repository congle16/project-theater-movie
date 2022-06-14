const {
    getAllShowtimes,
    createShowtime,
    getShowtimeById,
    updateShowtime,
    deleteShowtime,
	getByScheduleIdTrangThai
} = require('../services/showtime.service');

const {
    getScheduleById
} = require('../services/schedule.service');

class ShowtimeController {

    async index(req, res) {
    const showtimes = await getAllShowtimes();

    if (!showtimes) {
        return res.status(404).json({
            message: 'No showtimes found'
        });
    }
        
    return res.status(200).json(showtimes);
}

    async create(req, res) {
        const {
            maLichChieu,
            tenSuatChieu,
            timeStart,
            timeEnd
        } = req.body;

        if (!maLichChieu || !tenSuatChieu || !timeStart || !timeEnd) {
            return res.status(400).json({
                message: 'Missing fields'
            });
        }

        const schedule = getScheduleById(maLichChieu);

        if (!schedule) {
            return res.status(404).json({
                message: 'Schedule not found'
            });
        }

        const showtime = await createShowtime({
            maLichChieu,
            tenSuatChieu,
            trangThai : 'Trống',
            timeStart,
            timeEnd
        });

        if (!showtime) {
            return res.status(500).json({
                message: 'Can not create showtime'
            })
        }

        return res.status(201).json({
            message: 'Create showtime successfully'
        });
    }

    async getById(req, res) {
        const {
            id
        } = req.params;

        const showtime = await getShowtimeById(id);

        if (!showtime) {
            return res.status(404).json({
                message: 'No showtime found'
            });
        }

        return res.status(200).json(showtime);
    }

    async update(req, res) {
        const {
            id
        } = req.params;

        const checkExists = await getShowtimeById(id);

        if (!checkExists) {
            return res.status(404).json({
                message: 'No showtime found'
            });
        }

        const {
            maLichChieu,
            tenSuatChieu,
            timeStart,
            timeEnd
        } = req.body;

        if (!maLichChieu || !tenSuatChieu || !timeStart || !timeEnd) {
            return res.status(400).json({
                message: 'Missing fields'
            });
        }

        const showtime = await updateShowtime(id, {
            maLichChieu,
            tenSuatChieu,
            timeStart,
            timeEnd
        });

        if (!showtime) {
            return res.status(500).json({
                message: 'Can not update showtime'
            })
        }

        return res.status(200).json({
            message: 'Update showtime successfully'
        });
    }

    async delete(req, res) {
        const {
            id
        } = req.params;

        const checkExists = await getShowtimeById(id);

        if (!checkExists) {
            return res.status(404).json({
                message: 'No showtime found'
            });
        }

        const showtime = await deleteShowtime(id);

        if (!showtime) {
            return res.status(500).json({
                message: 'Can not delete showtime'
            })
        }

        return res.status(200).json({
            message: 'Delete showtime successfully'
        });
    }
	
	async getByScheduleIdTrangThai(req, res) {
        const {
            maLichChieu,
			trangThai
        } = req.params;

        if (!maPhim) {
            return res.status(400).json({
                message: 'Missing fields'
            });
        }

        const schedule = await getByScheduleIdTrangThai(maLichChieu, trangThai);

        if (!schedule) {
            return res.status(404).json({
                message: 'No schedule found'
            });
        }
		 return res.status(200).json(schedule);
	}
}

module.exports = new ShowtimeController;