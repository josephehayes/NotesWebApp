const express = require('express');
const path = require('path');
const routes = require('./routes/api.js');

const PORT = 3001;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use('/api', routes);

app.use(express.static('public'));

// Serves notes page with saved notes
app.get('/notes', (req, res) => {
    console.info(`${req.method} request received for /notes.`);
    res.sendFile(path.join(__dirname, './public/notes.html'));
})

//Wildcard to serve index.html
app.get('*', (req, res) => {
    console.info('Invalid request received => serving index.html');
    console.info(req.body);
    res.sendFile(path.join(__dirname, '/public/index.html'));
})

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);