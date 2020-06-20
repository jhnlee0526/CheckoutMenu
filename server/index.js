const express = require('express');
const bodyParser = require('body-parser');
const db = require('../database/index.js');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('public'));

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`Server listening on http://localhost:${port}`));
