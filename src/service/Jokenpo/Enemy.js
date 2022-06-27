class Enemy {
  options = ['Pedra', 'Papel', 'Tesoura'];

  constructor() {
    this.points = 0;
    this.option = this.options[Math.floor(Math.random() * this.options.length)];
  }

  play() {
    return this.option;
  }
}

export default Enemy;
