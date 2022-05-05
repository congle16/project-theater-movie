'use strict';
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const {
    AUTH
} = require('../../config/config.json');

const scriptPassword = (password) => {
    const salt = bcrypt.genSaltSync(10);
    return bcrypt.hashSync(password, salt);
};

const isAddressEmail = (email) => {
    const newLocal = "([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])";
    const regex = new RegExp(newLocal);
    return regex.test(email);
};

const comparePassword = async (password, passwordHashed) => {
    return bcrypt.compareSync(password, passwordHashed);
};

const genToken = (data) => {
    return jwt.sign(data, AUTH.SECRET_KEY, {
        expiresIn: '2h'
    });
};

const decodeToken = (token) => {
    return jwt.verify(token, AUTH.SECRET_KEY);
}

module.exports = {
    scriptPassword,
    isAddressEmail,
    comparePassword,
    genToken,
    decodeToken
}