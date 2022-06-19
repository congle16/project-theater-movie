const {
    scriptPassword,
    comparePassword,
    genToken
} = require("../services/auth.service");
const { 
    createKhachHang, 
    createUser,
    getMaxId,
    getUserByUsername,
    getUserByCardId,
    getAllUsers,
    getAllKhachHang,
    getUserById,
    deleteUserById,
    updateUser,
    getCustomerByUserId,
	create2
} = require("../services/user.service");


class UserController {
    // POST sign-up
    async create(req, res) {
        const maxId = await getMaxId();
        const {
            tenKH,
            gioiTinh,
            CMND,
            SDT
        } = req.body;

        const { username, password } = req.body;

        if (!tenKH || !gioiTinh || !CMND || !SDT || !username || !password) {
            return res.status(400).json({
                message: 'Missing fields'
            });
        }

        if (!password || !password.trim()) {
            return res.status(400).json({
                message: 'Password is not valid'
            });
        }

        if (await getUserByCardId(CMND)) {
            return res.status(400).json({
                message: 'CMND is exist'
            });
        }

        if (await getUserByUsername(username)) {
            return res.status(400).json({
                message: 'Username is exist'
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
            SDT
        });

        if (!khachHang || !user) {
            return res.status(500).json({
                message: 'Can not create User'
            })
        }

        return res.status(200).json(
            {
                message: 'Create User success',
				
            }
        );
    }
	
	async create2(req, res) {
        const maxId = await getMaxId();
        const {
            tenKH,
            gioiTinh,
            CMND,
            SDT
        } = req.body;

        const { username, password } = req.body;

        if (!tenKH || !gioiTinh || !CMND || !SDT || !username || !password) {
            return res.status(400).json({
                message: 'Missing fields'
            });
        }

        if (!password || !password.trim()) {
            return res.status(400).json({
                message: 'Password is not valid'
            });
        }

        if (await getUserByCardId(CMND)) {
            return res.status(400).json({
                message: 'CMND is exist'
            });
        }

        if (await getUserByUsername(username)) {
            return res.status(400).json({
                message: 'Username is exist'
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
            maUser: maxId + 10,
            tenKH,
            gioiTinh,
            CMND,
            SDT
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

    // GET get all users
    async getAllUsers(req, res) {
        const users = await getAllUsers();
        const query = req.query;
        console.log(query);
        if (!users) {
            return res.status(404).json({
                message: 'No users found'
            });
        }
        return res.status(200).json(users);
    }

    async getAllKhachHang(req, res) {
        const khachHangs = await getAllKhachHang();
        const query = req.query;
        console.log(query);
        if (!khachHangs) {
            return res.status(404).json({
                message: 'Found Failed'
            });
        }
        return res.status(200).json(khachHangs);
    }

    async delete(req, res) {
        const {id} = req.params;

        const user = await getUserById(id);

        if (!user) {
            return res.status(404).json({
                message: 'User not found'
            });
        }

        const result = await deleteUserById(id);

        if (!result) {
            return res.status(500).json({
                message: 'Internal Server Error'
            });
        }

        return res.status(200).json({
            message: 'Delete user success'
        });
    }

    async getMe(req, res) {
        const user = await getUserById(req.user.dataValues.id);

        return res.status(200).json(user);
    }

    async updateMe(req, res) {
        const {
            tenKH,
            gioiTinh,
            CMND,
            SDT
        } = req.body;

        const id = req.user.dataValues.id;

        const user = await getUserById(id);

        if (!user) {
            return res.status(404).json({
                message: 'User not found'
            });
        }
        
        const customer = await getCustomerByUserId(id);

        const result = updateUser(customer.dataValues.id, {
            tenKH,
            gioiTinh,
            CMND,
            SDT
        });

        if (!result) {
            return res.status(500).json({
                message: 'Internal Server Error'
            });
        }

        return res.status(200).json({
            message: 'Update user success'
        });
    }

    async changePassword(req, res) {
        const { oldPassword, newPassword } = req.body;

        const user = await getUserById(req.user.dataValues.id);

        if (!user) {
            return res.status(404).json({
                message: 'User not found'
            });
        }

        const isSuccess = await comparePassword(oldPassword, user.password);

        if (!isSuccess) {
            return res.status(400).json({
                message: 'Password is not valid'
            });
        }

        const passwordHash = await scriptPassword(newPassword);

        const result = updateUser(req.user.dataValues.id, {
            password: passwordHash
        });

        if (!result) {
            return res.status(500).json({
                message: 'Internal Server Error'
            });
        }

        return res.status(200).json({
            message: 'Change password success'
        });
    }
    
    async logout(req, res) {
        return res.status(200).json({
            message: 'Logout success'
        });
    }
}

module.exports = new UserController;