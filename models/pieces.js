class Piece {
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
  