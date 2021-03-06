'use strict';

const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  name: {
    type: String,
    trim: true
  },
  wod: {
    type: String,
    trim: true
  },
  score: {
    type: String,
    trim: true
  },
  tips: {
    type: String,
    trim: true
  },
  video: {
    type: String,
    trim: true
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  
  picture: {
    type: String
  }
});

module.exports = mongoose.model('Wod', schema);
