import Player from './TicTacToePlayer';

class Enemy extends Player {
  constructor(side, round, positions) {
    super(side, round);
    if (side === 'X') this.side = 'O';
    if (side === 'O') this.side = 'X';
    this.positions = positions;
  }

  attack() {
    const firstEl = document.getElementById('1');
    const secEl = document.getElementById('2');
    const third = document.getElementById('3');
    const fourthEl = document.getElementById('4');
    const fivEl = document.getElementById('5');
    const sixEl = document.getElementById('6');
    const sevEl = document.getElementById('7');
    const eigthEl = document.getElementById('8');
    const nineEl = document.getElementById('9');

    const elements = [
      firstEl,
      secEl,
      third,
      fourthEl,
      fivEl,
      sixEl,
      sevEl,
      eigthEl,
      nineEl,
    ];

    const filter = elements.filter((el) => el.innerHTML === '');
    const filteredId = filter.map((e) => Number(e.id));
    const finalNumber = filteredId[Math.floor(Math.random() * filteredId.length)];
    document.getElementById(JSON.stringify(finalNumber)).innerHTML = this.side;
  }
}

export default Enemy;
