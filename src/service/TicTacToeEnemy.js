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

    if (this.round === 1) {
      const filter = elements.filter((el) => el.innerHTML === '');
      const filteredId = filter.map((e) => Number(e.id));
      const finalNumber = filteredId[Math.floor(Math.random() * filteredId.length)];
      document.getElementById(JSON.stringify(finalNumber)).innerHTML = this.side;
    }
  }
}

export default Enemy;

// const verifyTableResult = () => {
//     const firstEl = document.getElementById('1').innerHTML;
//     const secEl = document.getElementById('2').innerHTML;
//     const third = document.getElementById('3').innerHTML;
//     const fourthEl = document.getElementById('4').innerHTML;
//     const fivEl = document.getElementById('5').innerHTML;
//     const sixEl = document.getElementById('6').innerHTML;
//     const sevEl = document.getElementById('7').innerHTML;
//     const eigthEl = document.getElementById('8').innerHTML;
//     const nineEl = document.getElementById('9').innerHTML;

//     const firstCase = firstEl === side && secEl === side && third === side;
//     const secondCase = fourthEl === side && fivEl === side && sixEl === side;
//     const thirdCase = sevEl === side && eigthEl === side && nineEl === side;

//     const fourthCase = firstEl === side && fourthEl === side && sevEl === side;
//     const fifthCase = secEl === side && fivEl === side && eigthEl === side;
//     const sixthCase = third === side && sixEl === side && nineEl === side;

//     const seventhCase = firstEl === side && fivEl === side && nineEl === side;
//     const eighthCase = third === side && fivEl === side && sevEl === side;

//     const cases = [
//       firstCase,
//       secondCase,
//       thirdCase,
//       fourthCase,
//       fifthCase,
//       sixthCase,
//       seventhCase,
//       eighthCase,
//     ];

//     if (cases.find((c) => c === true)) {
//       console.log('Ganhou!');
//     }
//   };
