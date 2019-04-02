'use strict';
const express = require('express');
const router = express.Router();

const userRouter = require('./userRouter/userRouter');
const weatherRouter = require('./weatherRouter/weatherRouter');

router.use('/users', userRouter);

router.use('/weather', weatherRouter);

module.exports = router;
