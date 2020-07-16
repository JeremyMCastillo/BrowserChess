const { PieceColor } = require('./pieces');

class Player {
  // name: String - identifier used to tell players apart.
  //                Should only be unique within the same Board.
  // analytics: Object - contains location, ip and other tracking
  //                     info that allows us to see who is playing.
  constructor(name, color, analytics) {
    this.name = name;
    this.color = color;
    this.analytics = analytics;
  }

  static getRandomColor() {
    const randomThreshold = 100.0;
    const probabilityCutoff = randomThreshold / 2.0;
    let randomNumber = Math.floor(Math.random() * Math.floor(randomThreshold));
    if (randomNumber > probabilityCutoff) {
      return PieceColor.white;
    }

    return PieceColor.black;
  }

  getName() {
    return this.name;
  }

  getColor() {
    return this.color;
  }
}

module.exports = { Player };
