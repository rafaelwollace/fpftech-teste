require("dotenv").config({
    path: process.env.NODE_ENV === "test" ? ".env.test" : ".env"
});

const express = require('express')
const routes = require('./routes')
const swaggerUi = require('swagger-ui-express')

const app = express()
const port = 3000

routes(app)

const swaggerFile = require('../swagger_auto.json');


app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.listen(port, () => console.log(`servidor está rodando na porta ${port}`))

module.exports = app