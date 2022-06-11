// Gerar Documentacao
const swaggerAutogen = require('swagger-autogen')();
const outputFile = './swagger_auto.json';
const endpointsFiles = ['./api/routes/index.js'];
swaggerAutogen(outputFile, endpointsFiles);