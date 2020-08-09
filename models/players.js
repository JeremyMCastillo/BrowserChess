const { mongoose } = require("../system/mongoose");
const { PieceColor, PieceSchema } = require("./pieces");

var PlayerSchema = new mongoose.Schema({
  name: String,
  color: String,
  analytics: Object,
  graveyard: [PieceSchema]
});

// name: String - identifier used to tell players apart.
//                Should only be unique within the same Board.
// analytics: Object - contains location, ip and other tracking
//                     info that allows us to see who is playing.
PlayerSchema.statics.initialize = (name, color, analytics) => {
  let player = new Player();
  player.name = name;
  player.color = color;
  player.analytics = analytics;
  player.graveyard = [];
  return player;
};

PlayerSchema.statics.getRandomColor = () => {
  const randomThreshold = 100.0;
  const probabilityCutoff = randomThreshold / 2.0;
  let randomNumber = Math.floor(Math.random() * Math.floor(randomThreshold));
  if (randomNumber > probabilityCutoff) {
    return PieceColor.white;
  }

  return PieceColor.black;
};

var Player = mongoose.model("Player", PlayerSchema);

module.exports = { Player, PlayerSchema };
