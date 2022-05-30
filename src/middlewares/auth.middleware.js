const { 
    getUserByUsername
} = require('../services/user.service');

const {
    decodeToken
} = require('../services/auth.service');

const authenticate = async (req, res, next) => {
    const token = req.headers.authorization.split(' ')[1];
    // console.log({token});
    const decoded = decodeToken(token);
    // console.log({decoded});
    try {
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
            message: 'Unauthenticated'
        });
    }
}

const checkRole = (...role) => (req, res, next) => {
    const user = req.user;
    if (role.indexOf(user.role) === -1) {
        console.log("Unauthorized");
        return res.status(403).json({
            message: 'Unauthenticated'
        });
    }
    next();
}

module.exports = {
    authenticate,
    checkRole
}