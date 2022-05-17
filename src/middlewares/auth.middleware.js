const { 
    getUserByUsername
} = require('../services/user.service');

const {
    decodeToken
} = require('../services/auth.service');

const authenticate = async (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        console.log({token});
        const decoded = decodeToken(token);
        console.log({decoded});

        const user = await getUserByUsername(decoded.username);
        if (!user) {
            return res.status(400).json({
                message: 'User not found'
            });
        }
        req.user = user;
        next();
    } catch (error) {
        console.log(error);
        return res.status(401).json({
            message: 'Unauthorized'
        });
    }
}

module.exports = {
    authenticate
}