'use strict';
const express = require("express");
const cors = require("cors");
const testDB = require('./src/config/database');
const properties = require('./src/config/properties');
const rootRouter = require("./src/routers/router");

const app = express();

// link to frontend
const whitelist = properties.SYSTEM.CORS;
const corsOptions = {
    origin: function (origin, callback) {
        if (whitelist.indexOf(origin) !== -1) {
            callback(null, true)
        } else {
            callback(new Error('Not allowed by CORS'))
        }
    }
}

app.use(cors(corsOptions));

// test connection
testDB();

app.use(express.json());

app.use('/api/v1', rootRouter);

const port = process.env.PORT || properties.SYSTEM.PORT;
app.listen(port, () => {
    console.log(`Server is listening on port ${properties.SYSTEM.PORT}`);
});