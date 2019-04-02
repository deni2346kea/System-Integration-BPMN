'use strict';

// Initiate env
require('dotenv').config();

const express = require('express');
const formData = require('express-form-data');
const path = require('path');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const cors = require('cors');
// const HttpError = require('./api/lib/utils/http-error');
// routes
const api = require('./api/routes/apiRouter');
const port = parseInt(process.env.PORT) || 3000;
const mode = process.env.MODE;
const HttpError = require('./api/lib/utils/http-error');
// INIT EXPRESS
let app = express();

// USING ENV FILE
app.locals.ENV = process.env.NODE_ENV;
app.locals.ENV_DEVELOPMENT = process.env.NODE_ENV === 'development';


app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors());

app.use('/api', api);

app.get('/', (req, res) => res.status(200).send({
  message: 'Welcome to the beginning of nothingness.'
}));

app.listen(port, () => {
  console.log('Listening on port ' + port + ' in ' + mode + ' mode');
});

// error handling
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
