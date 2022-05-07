const {
    scriptPassword,
    isAddressEmail,
    comparePassword,
    genToken
} = require("../services/auth.service");
const { 
    createKhachHang, 
    createUser,
    getMaxId,
    getUserByUsername
} = require("../services/user.service");


class UserController {
    // POST sign-up
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

    // POST sign-in
    async signIn(req, res) {
        const { username, password } = req.body;

        const user = await getUserByUsername(username);

        if (!user) {
            return res.status(400).json({
                message: `User with username: ${username} not found`
            });
        }

        const isSuccess = await comparePassword(password, user.password);
        console.log({isSuccess});

        if (!isSuccess) {
            return res.status(400).json({
                message: 'Password is not valid'
            });
        }

        const token = genToken(user.toJSON());

        return res.status(200).json({
            message: 'Sign in success',
            user,
            token
        });
    }
}

module.exports = new UserController;