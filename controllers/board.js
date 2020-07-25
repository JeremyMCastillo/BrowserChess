const _ = require("lodash");
const { Board } = require("../models/board");
const { Player } = require("../models/players");
const { PieceColor } = require("../models/pieces");

var route = (app) => {
  app.get("/board/:gameCode", (req, res) => {
    var { gameCode } = req.params;

    if (!req.cookies.player_info) {
      res.status(500).send({ error: "Player not recognized." });
      return;
    }
    let { player } = req.cookies.player_info;
    let username = player.name;

    console.log(`Loading board with code ${gameCode}`);

    Board.findOne({ game_code: gameCode })
      .then((board) => {
        if (!board) {
          res.status(404).send({ error: "Invalid game code." });
        } else {
          let player =
            board.player_1.name === username ? board.player_1 : board.player_2;
          res.send({ board, player });
        }
      })
      .catch((error) => {
        res.status(500).send({ error });
      });
  });

  app.post("/board/new-game", (req, res) => {
    var body = _.pick(req.body, ["username"]);
    var { username } = body;

    var player = new Player(username, Player.getRandomColor());

    // TODO: Implement Grid model. Grid should have two player parameters
    // when creating a new grid, the first player slot is filled.
    // After filling the player slot, we create a unique grid ID code that
    // the player can give to another player to join the game.
    var board = new Board({ player_1: player });
    board
      .generateBoardId()
      .then(() => board.save())
      .then(() => {
        res
          .cookie("player_info", { player, gameCode: board.game_code })
          .send({ board, player });
      })
      .catch((e) => {
        console.log(e);
        res.status(500).send(e);
      });
  });

  app.post("/board/join-game", (req, res) => {
    // TODO: Take a grid ID and username and fill in the second player slot. Return the grids info
    // once the player slot is saved.
    var body = _.pick(req.body, ["gameCode", "username"]);
    var { gameCode, username } = body;

    // Create new player, update grid and return grid info.
    Board.findOne({ game_code: gameCode })
      .then((gameToJoin) => {
        if (!gameToJoin) {
          res.sendStatus(404);
        } else {
          let color =
            gameToJoin.player_1.color === PieceColor.white
              ? PieceColor.black
              : PieceColor.white;
          var player = new Player(username, color);
          gameToJoin.player_2 = player;
          gameToJoin
            .save()
            .then(() => {
              res
                .cookie("player_info", { player, gameCode: board.game_code })
                .send({ board: gameToJoin, player });
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
