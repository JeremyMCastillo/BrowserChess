const _ = require('lodash');
const { Board } = require('../models/board');
const { Player } = require('../models/players');

var route = (app) => {
  app.get('/board/:gameCode', (req, res) => {
    var { gameCode } = req.params;
    console.log(`Loading board with code ${gameCode}`);

    Board.findOne({ game_code: gameCode })
      .then((board) => {
        if (!board) {
          res.status(404).send({ error: 'Invalid game code.' });
        } else {
          res.send({ board });
        }
      })
      .catch((error) => {
        res.status(500).send({ error });
      });
  });

  app.post('/board/new-game', (req, res) => {
    var body = _.pick(req.body, ['username']);
    var { username } = body;

    var player = new Player({ username });

    // TODO: Implement Grid model. Grid should have two player parameters
    // when creating a new grid, the first player slot is filled.
    // After filling the player slot, we create a unique grid ID code that
    // the player can give to another player to join the game.
    var board = new Board({ player_1: player });
    board
      .generateBoardId()
      .then(() => board.save())
      .then(() => {
        res.send({ board });
      })
      .catch((e) => {
        console.log(e);
        res.status(500).send(e);
      });
  });

  app.post('/board/join-game', (req, res) => {
    // TODO: Take a grid ID and username and fill in the second player slot. Return the grids info
    // once the player slot is saved.
    var body = _.pick(req.body, ['gameCode', 'username']);
    var { gameCode, username } = body;

    // Create new player, update grid and return grid info.
    var player = new Player({ username });
    Board.findOne({ game_code: gameCode })
      .then((gameToJoin) => {
        if (!gameToJoin) {
          res.sendStatus(404);
        } else {
          gameToJoin.player_2 = player;
          gameToJoin
            .save()
            .then(() => {
              res.send({ board: gameToJoin });
            })
            .catch((error) => {
              res.status(500).send({ error });
            });
        }
      })
      .catch((error) => {
        console.log(error);
        res.sendStatus(500);
      });
  });
};

module.exports = { route };