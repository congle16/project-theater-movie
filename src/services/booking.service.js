'use strict';

const {
    VeMua
} = require('../../models');

const getAllBookings = async () => {
    try {
        return await VeMua.findAll({
            attributes: ['id'],
            include: [{
                association: 'user',
                attributes: ['username'],
                include: [{
                    association: 'khachHang',
                    attributes: ['id', 'tenKH', 'SDT']
                }]
                },
                {
                association: 've',
                attributes: ['id', 'ngayMua'],
                include: [{
                        association: 'suatChieu',
                        attributes: ['id', 'tenSuatChieu', 'timeStart', 'timeEnd'],
                    },
                    {
                        association: 'loaiVe',
                        attributes: ['id', 'tenLoaiVe']
                    },
                    {
                        association: 'phongChieu',
                        attributes: ['id', 'tenPhong']
                    },
                    {
                        association: 'phim',
                        attributes: ['id', 'tenPhim', 'daoDien']
                    }
                ],
            }]
        });
    } catch (error) {
        console.log(error);
        return {
            status: 500,
            message: 'Internal Server Error'
        };
    }
};

const createBooking = async (ticket) => {
    try {
        return await VeMua.create(ticket);
    } catch (error) {
        console.log(error);
        return {
            status: 500,
            message: 'Internal Server Error'
        }
    }
};

const getTicketBuyById = async (id) => {
    try {
        return await VeMua.findOne({
            where: {
                id
            },
            attributes: ['id'],
                include: [{
                        association: 'user',
                        attributes: ['username'],
                        include: [{
                            association: 'khachHang',
                            attributes: ['id', 'tenKH', 'SDT']
                        }]
                    },
                    {
                        association: 've',
                        attributes: ['id', 'ngayMua'],
                        include: [{
                                association: 'suatChieu',
                                attributes: ['id', 'tenSuatChieu', 'timeStart', 'timeEnd'],
                            },
                            {
                                association: 'loaiVe',
                                attributes: ['id', 'tenLoaiVe']
                            },
                            {
                                association: 'phongChieu',
                                attributes: ['id', 'tenPhong']
                            },
                            {
                                association: 'phim',
                                attributes: ['id', 'tenPhim', 'daoDien']
                            }
                        ],
                    }
                ]
        });
    } catch (error) {
        console.log(error);
        return {
            status: 500,
            message: 'Internal Server Error'
        }
    }
};

const getTicketBuyByUserId = async (maUser) => {
    try {
        return await VeMua.findAll({
            where: {
                maUser
            },
            attributes: ['id'],
                include: [{
                        association: 'user',
                        attributes: ['username'],
                        include: [{
                            association: 'khachHang',
                            attributes: ['id', 'tenKH', 'SDT']
                        }]
                    },
                    {
                        association: 've',
                        attributes: ['id', 'ngayMua'],
                        include: [{
                                association: 'suatChieu',
                                attributes: ['id', 'tenSuatChieu', 'timeStart', 'timeEnd'],
                            },
                            {
                                association: 'loaiVe',
                                attributes: ['id', 'tenLoaiVe']
                            },
                            {
                                association: 'phongChieu',
                                attributes: ['id', 'tenPhong']
                            },
                            {
                                association: 'phim',
                                attributes: ['id', 'tenPhim', 'daoDien']
                            }
                        ],
                    }
                ]
        });
    } catch (error) {
        console.log(error);
        return {
            status: 500,
            message: 'Internal Server Error'
        }
    }
};

const updateBooking = async (id, ticket) => {
    try {
        return await VeMua.update(ticket, {
            where: {
                id
            }
        });
    } catch (error) {
        console.log(error);
        return {
            status: 500,
            message: 'Internal Server Error'
        }
    }
};

module.exports = {
    getAllBookings,
    createBooking,
    getTicketBuyById,
    updateBooking,
	getTicketBuyByUserId
}