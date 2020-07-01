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

app.get('/checkout/:roomId/menu', (req, res) => {
  // console.log(req.params);
  db.query(`select * from properties where id = ${req.params.roomId}`, (err, results) => {
    if (err) {
      console.log('db query error: ', err);
      res.status(404).send(err);
    } else {
      console.log('db query sent: ', results);
      res.status(200).send(results[0]);
    }
  });
});

app.post('/checkout/:roomId/menu', (req, res) => {
  const postQuery = `insert into reservations (property_id, check_in, check_out, nights, nightly_rate, total_cost, guest_count, adults, children, infants) values (${req.body.property_id}, ${req.body.check_in}, ${req.body.check_out}, ${req.body.nights}, ${req.body.nightly_rate}, ${req.body.total_cost}, ${req.body.guest_count}, ${req.body.adults}, ${req.body.children}, ${req.body.infants})`;

  db.query(postQuery, (err, results) => {
    if (err) {
      console.log('db query posting error: ', err);
    } else {
      console.log('db query posted: ', results);
      res.status(200).send(results);
    }
  });
});

app.listen(port, () => console.log(`Server listening on http://localhost:${port}`));
