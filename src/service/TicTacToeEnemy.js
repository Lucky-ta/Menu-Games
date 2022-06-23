class Enemy {
  constructor(side) {
    this.side = side;
    if (side === 'X') this.side = 'O';
    if (side === 'O') this.side = 'X';
  }

  attack() {
    document.getElementById('2').innerHTML = this.side;
  }
}

export default Enemy;
