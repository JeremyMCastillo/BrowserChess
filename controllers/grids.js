const _ = require('lodash');
const { Player } = require('../models/players');

var route = (app) => {
  app.post('/grids/createNew', (req, res) => {
    var body = _.pick(req.body, ['username']);
    var { username } = body;

    var player = new Player({ username });

    // TODO: Implement Grid model. Grid should have two player parameters
    // when creating a new grid, the first player slot is filled.
    // After filling the player slot, we create a unique grid ID code that
    // the player can give to another player to join the game.
    var grid = { player };
    grid
      .save()
      .then(() => grid.generateGridId())
      .then((newGrid) => {
        res.send({ newGrid });
      })
      .catch((e) => {
        res.status(500).send(e);
      });
  });

  app.post('/grids/join', (req, res) => {
    // TODO: Take a grid ID and username and fill in the second player slot. Return the grids info
    // once the player slot is saved.
    var body = _.pick(req.body, ['gridId', 'username']);
    var { gridId, username } = body;

    // Create new player, update grid and return grid info.
    var grid = {};

    res.send({});
  });
};

module.exports = { route };
