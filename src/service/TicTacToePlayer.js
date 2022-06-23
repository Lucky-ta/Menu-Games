class Player {
  constructor(side, round) {
    this.side = side;
    this.round = round;
  }

  attack(id) {
    console.log(`O JOGADOR DO LADO ${this.side} ATACOU!`);
    document.getElementById(id).innerHTML = this.side;
  }
}

export default Player;
