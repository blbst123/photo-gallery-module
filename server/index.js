const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const db = require('../database/index.js');

const app = express();
const port = 3003;

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../public')));

app.get('/', (req, res) => {
  res.send(200);
});

app.get('/images/:id', (req, res) => {
  db.retrieveImage(req.params.id, (result) => {
    res.status(200).send(result);
  });
});

app.get('/restaurant/:restaurant_id', (req, res) => {
  db.retrieveRestaurantImage(req.params.restaurant_id, (result) => {
    res.status(200).send(result);
  });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
