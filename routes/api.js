const api = require('express').Router();
const uuid = require('../helpers/uuid')
const { readFromFile, readAndAppend } = require('../helpers/fsUtils');

api.get('/notes', (req, res) => {
    console.info(`${req.method} request received.`);

    readFromFile('./db/db.json').then(data => res.json(JSON.parse(data)));
})

api.post('/notes', (req, res) => {
    console.info(`${req.method} request received to add a note.`);
    console.info(req.body);

    const { title, text } = req.body;

    if (title && text) {
        const newNote = {
            note_id: uuid(),
            title,
            text
        };

        readAndAppend(newNote, './db/db.json');
        res.json('Note added successfully');
    } else {

        res.json('Error adding new note');
    }
})

module.exports = api;