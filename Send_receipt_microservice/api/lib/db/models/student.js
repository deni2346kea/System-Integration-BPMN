'use strict';

const mongoose = require('mongoose');
mongoose.Promise = require('q').Promise;

let wordpress = mongoose.Schema({
  id: {
    autoIncrement: true,
    type: Number
  },
  firstName: {
    type: String,
    unique: false
  },
  lastName: {
    type: String,
    unique: false
  },
  active: {
    type: Boolean
  },
  class: {
    type: String
  },
  phoneNumber: {
    type: Number
  },
  keaId: {
    type: String,
    unique: true
  },
  lectures: [{
    type: String
  }],
  courses: [{
    type: String
  }]
});

module.exports = mongoose.model('wordpress', wordpress);
