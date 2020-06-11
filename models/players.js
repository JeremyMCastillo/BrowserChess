class Player {
  // name: String - identifier used to tell players apart.
  //                Should only be unique within the same Board.
  // analytics: Object - contains location, ip and other tracking
  //                     info that allows us to see who is playing.
  constructor(name, analytics) {
    this.name = name;
    this.analytics = analytics;
  }

  getName() {
    return this.name;
  }
}

module.exports = { Player };
