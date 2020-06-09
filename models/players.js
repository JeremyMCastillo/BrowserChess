const _ = require('lodash');

const { mongoose } = require('../system/mongoose');

var PlayerSchema = new mongoose.Schema({
  userName: {
    type: String,
    minlength: 1,
    trim: true
  },
  client: {
    os: String,
    osVersion: String,
    appVersion: String,
    brand: String,
    carrier: String,
    country: String,
    locale: String,
    manufacturer: String,
    version: String,
    notch: Boolean,
    deviceType: String
  }
});

PlayerSchema.methods.toJSON = function () {
  var player = this;
  var playerObject = player.toObject();

  return _.pick(playerObject, ['_id', 'email']);
};

var Player = mongoose.model('Player', PlayerSchema);

module.exports = { Player };
