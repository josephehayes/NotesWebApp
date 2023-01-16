const notes = require('express').Router();
// const { readAndAppend } = require('../helpers/fsUtils');

notes.get('/', (req, res) => {
    console.info(`${req.method} request received.`);

    res.sendFile('./public/notes.html');
})

module.exports = notes;