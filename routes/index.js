const express = require('express');

//import routers for /notes
const apiRouter = require('./api')

const app = express();

//Set routers
app.use('/api', apiRouter);

module.exports = app;