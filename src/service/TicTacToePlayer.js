import verifyTableResult from './ticTacToeVerifyResult';

class Player {
  constructor(side, round, points) {
    this.side = side;
    this.round = round;
    this.points = points;
  }

  attack(id) {
    document.getElementById(id).innerHTML = this.side;
    const result = verifyTableResult(this.side, 'player');
    if (result === 'Você venceu!') {
      window.setTimeout(() => alert('Você venceu!'), 500);
      this.points.SetPlayerPoints(this.points.playerPoints + 1);
    }
  }
}

export default Player;
