/* eslint-disable no-undef */
const { assert } = require('chai');
const { Player } = require('../../models/players');

describe('Players model', () => {
  describe('create operations', () => {
    it('should successfully create a new player', () => {
      var player = new Player('BobbyFish', {});

      assert.equal(player.getName(), 'BobbyFish');
    });
  });
});
