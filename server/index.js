const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('../database/index.js');

const app = express();
const port = 3003;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('public'));
app.use(cors());
app.options('*', cors());

app.get('/api/rooms/:property_id/menu', (req, res) => {
  db.query('select * from properties', (err, results) => {
    if (err) {
      console.log('db query error: ', err);
      res.status(404).send(err);
    } else {
      console.log('db query sent: ', results);
      res.status(200).send(results);
    }
  });
});

app.listen(port, () => console.log(`Server listening on http://localhost:${port}`));
