const express = require('express');

//import routers for /notes
const notesRouter = require('./notes');

const app = express();

app.use('/notes', notesRouter);

app.get('*', (req, res) => {
    console.info(`Invalid request received`);
    console.info(req.body);

    res.sendFile('./public/index.html');
})

module.exports = app;