class Piece {
  // type: String - identifier used to tell pieces apart.
  //              - Should only be unique to the player on the same Board.
  // color: String - Makes piece unique to the player by color
  //                     
  // movement: function that determines how the piece moves on the matrix;
  // default null, updated with updateMove()
    constructor(type, color, movement) {
      this.type = type,
      this.color = color,
      this.movement = null
    }
  
    getType() {
      return this.type;
    }

    getColor() {
        return this.color
    }

    updateMove(movement) {
        this.movement = movement
    }
  }
  
  module.exports = { Player };
  