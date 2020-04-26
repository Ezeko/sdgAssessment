const express = require('express'); //  import express
const bodyParser = require('body-parser');
const cors = require('cors');
// const path = require('path');
const home = require('./backend/controllers/HomeController');
const EstimateController = require('./backend/controllers/EstimateController');

const app = express();


//  cross origin resources share
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization'
  );
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PUT, DELETE, PATCH, OPTIONS'
  );
  next();
});
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', home.gate);


app.post('/api/v1/on-covid-19', EstimateController.estimator);

app.post('/api/v1/on-covid-19/json', EstimateController.estimator);

app.post('/api/v1/on-covid-19/xml', EstimateController.estimateInXml);


module.exports = app;
