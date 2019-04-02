'use strict';

// Initiate env
require('dotenv').config();

const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const cors = require('cors');
// routes
const api = require('./api/routes/apiRoutes');
const db = require('./api/lib/db/db');
// log
const log = require('./api/lib/utils/log');
const HttpError = require('./api/lib/utils/http-error');

// mongo url
db(process.env.MONGO_URL);

// INITIALIZE EXPRESS
let app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors());

app.use('/api', api);

app.get('/', (req, res) => res.status(200).send({
  message: 'Welcome to the beginning of nothingness.'
}));

const port = parseInt(process.env.PORT) || 3000;
app.listen(port, () => {
  log.log('Listening on port ' + port);
});

// custom error handling on next
app.use((err, req, res, next) => {
  if (err instanceof HttpError) {
    res.status(err.httpStatus);
    if (err.body) {
      return res.json(err.body);
    } else {
      return res.end(err.message);
    }
  } else {
    console.log(err);
    res.sendStatus(500);
  }
});

module.exports = app;
