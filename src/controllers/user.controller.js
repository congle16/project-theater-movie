const {
    scriptPassword,
    isAddressEmail
} = require("../services/auth.service");
const { 
    createKhachHang, 
    createUser,
    getMaxId
} = require("../services/user.service");


class UserController {
    // POST 
    async create(req, res) {
        const maxId = await getMaxId();
        const {
            tenKH,
            gioiTinh,
            CMND,
            SDT,
            email
        } = req.body;

        const { username, password } = req.body;

        if (!tenKH || !gioiTinh || !CMND || !SDT || !email || !username || !password) {
            return res.status(400).json({
                message: 'Missing fields'
            });
        }

        if (!isAddressEmail(email)) {
            return res.status(400).json({
                message: 'Email is not valid'
            });
        }

        if (!password || !password.trim()) {
            return res.status(400).json({
                message: 'Password is not valid'
            });
        }

        const passwordHash = await scriptPassword(password);
        console.log({passwordHash});

        const user = await createUser({
            type: 'khach hang',
            trangThai: 'active',
            username,
            password: passwordHash
        });

        const khachHang = await createKhachHang({
            maUser: maxId + 1,
            tenKH,
            gioiTinh,
            CMND,
            SDT,
            email
        });

        if (!khachHang || !user) {
            return res.status(500).json({
                message: 'Can not create User'
            })
        }

        return res.status(200).json(
            {
                message: 'Create User success'
            }
        );
    }
}

module.exports = new UserController;