'use strict';

const express = require('express');
const router = express.Router();

const weatherController = require('../../controllers/weather/weather.controller');

// /api/weather :POST req type
router.post('/', (req, res, next) => {
  weatherController.getWeatherForCoordinates({
    lat: req.body.lat,
    lon: req.body.lon,
    units: req.body.units
  }).then((result) => res.json(result))
    .catch(next);
});

// /api/weather/detailed :POST req type
router.post('/detailed', (req, res, next) => {
  weatherController.getWeatherForCoordinatesDetailed({
    lat: req.body.lat,
    lon: req.body.lon,
    units: req.body.units
  }).then((result) => res.json(result))
    .catch(next);
});

module.exports = router;
