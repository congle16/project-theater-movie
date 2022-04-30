'use strict';
const express = require("express");
const cors = require("cors");
const swaggerUi = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");


const testDB = require('./src/config/database');
const properties = require('./src/config/properties');
const rootRouter = require("./src/routers/root.route");

const app = express();

// link to frontend
// const whitelist = properties.SYSTEM.CORS;
// const corsOptions = {
//     origin: function (origin, callback) {
//         if (whitelist.indexOf(origin) !== -1) {
//             callback(null, true)
//         } else {
//             callback(new Error('Not allowed by CORS'))
//         }
//     }
// }

// app.use(cors(corsOptions));

// test connection
testDB();

app.use(express.json());

const swaggerOptions = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Theater Movie API",
            version: "1.0.0"
        },
        servers: [
            {
                url: "http://localhost:3000/",
                description: "Local server"
            },
            {
                url: "http://",
                description: "Production server"
            }
        ]
    },
    apis: ["./src/routers/*.route.js"]
};
const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// route init
app.use('/api/v1', rootRouter);

const port = process.env.PORT || properties.SYSTEM.PORT;
app.listen(port, () => {
    console.log(`Server is listening on port ${properties.SYSTEM.PORT}`);
});