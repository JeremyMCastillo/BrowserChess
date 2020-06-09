/* eslint-disable no-undef */
const { assert } = require('chai');
require('../../system/mongoose');
const { Player } = require('../../models/players');

describe('Players model', () => {
  describe('create operations', () => {
    it('should successfully create a new player', (done) => {
      var player = new Player({
        username: 'BobbyFish'
      });

      player.save().then(() => {
        done();
      });
    });

    it('rejects an invalid player', () => {
      var player = new Player({
        username: ''
      });

      return player.save().then(
        () => Promise.reject(new Error('Expected method to reject')),
        (err) => assert.instanceOf(err, Error)
      );
    });
  });
});
