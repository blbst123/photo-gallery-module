const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const db = require('../database/databaseFunctions.js');

const app = express();
const port = 3004;

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../public')));

app.get('/image/:id', (req, res) => {
  db.retrieveImage(req.params.id, (result) => {
    res.send(result);
  });
});

app.get('/restaurant/:restaurant_id', (req, res) => {
  db.retrieveRestaurantImage(req.params.restaurant_id, (result) => {
    res.send(result);
  });
});

app.get('/user/:id', (req, res) => {
  db.retrieveUser(req.params.id, (result) => {
    res.send(result);
  });
});

app.get('/*', (req, res) => {
  res.sendStatus(200);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
