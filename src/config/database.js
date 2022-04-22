const chalk = require('chalk');
const {sequelize} = require('../../models');

const connected = chalk.bold.cyan;
const error = chalk.bold.yellow;
const termination = chalk.bold.magenta;

module.exports = function () {
    sequelize.authenticate()
        .then(() => {
            console.log(connected('Connection has been established successfully.'));
        })
        .catch(err => {
            console.log(error('Unable to connect to the database:', err));
        });

    process.on('SIGINT', () => {
        sequelize.close()
            .then(() => {
                console.log(termination('Connection to the database has been closed.'));
                process.exit(0);
            });
    });
}