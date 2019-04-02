'use strict';

const rp = require('request-promise');
const HttpError = require('./../../lib/utils/http-error');

const apiKey = process.env.API_KEY;

async function getWeatherForCoordinates({lat, lon, units = null}) {
  let url;
  if (units) {
    url = `http://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lon }&units=${ units }&APPID=${ apiKey }`;
  } else {
    url = `http://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lon }&APPID=${ apiKey }`;
  }

  const options = {
    method: 'GET',
    uri: url,
    json: true // Automatically stringifies the body to JSON
  };

  try {
    const res = await rp(options);
    if (res) {
      console.log(res);
      return {
        status: 'Success',
        code: 200,
        temp: res.main.temp,
        pressure: res.main.pressure,
        humidity: res.main.humidity,
        wind: res.wind.speed
      };
    }
  } catch (err) {
    console.log(err);
    if (err.message.indexOf('Error: getaddrinfo ENOTFOUND') !== -1) {
      throw new HttpError('Bad request', 'Error occured', 500);
    }
  }
}

async function getWeatherForCoordinatesDetailed({lat, lon, units = null}) {
  let url;
  if (units) {
    url = `http://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lon }&units=${ units }&APPID=${ apiKey }`;
  } else {
    url = `http://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lon }&APPID=${ apiKey }`;
  }

  const options = {
    method: 'GET',
    uri: url,
    json: true // Automatically stringifies the body to JSON
  };

  try {
    const res = await rp(options);
    if (res) {
      // console.log(res);
      return res;
    }
  } catch (err) {
    console.log(err);
    if (err.message.indexOf('Error: getaddrinfo ENOTFOUND') !== -1) {
      throw new HttpError('Bad request', 'Error occured', 500);
    }
  }
}

module.exports = {
  getWeatherForCoordinates: getWeatherForCoordinates,
  getWeatherForCoordinatesDetailed: getWeatherForCoordinatesDetailed
};
