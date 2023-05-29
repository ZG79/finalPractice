'use strict'

const mongoose = require ('mongoose');

const {Schema} = mongoose;

const playerSchema = new Schema ({
  name:String,
  position:String,
  number:Number,
  superstar:Boolean,
  team:String
});

const playerModel = mongoose.model('Player', playerSchema);

module.exports = playerModel;