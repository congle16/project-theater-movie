'use strict';
const express = require("express");
const { sequelize } = require("./models");
const rootRouter = require("./src/routers/router");

const app = express();

app.use('/api/v1', rootRouter);

// test connection
sequelize.authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});