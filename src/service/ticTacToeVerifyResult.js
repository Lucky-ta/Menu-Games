import clearTable from './TicTacToeClearTable';

const verifyTableResult = (side, role) => {
  const firstEl = document.getElementById('1').innerHTML;
  const secEl = document.getElementById('2').innerHTML;
  const third = document.getElementById('3').innerHTML;
  const fourthEl = document.getElementById('4').innerHTML;
  const fivEl = document.getElementById('5').innerHTML;
  const sixEl = document.getElementById('6').innerHTML;
  const sevEl = document.getElementById('7').innerHTML;
  const eigthEl = document.getElementById('8').innerHTML;
  const nineEl = document.getElementById('9').innerHTML;

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

  const firstCase = firstEl === side && secEl === side && third === side;
  const secondCase = fourthEl === side && fivEl === side && sixEl === side;
  const thirdCase = sevEl === side && eigthEl === side && nineEl === side;

  const fourthCase = firstEl === side && fourthEl === side && sevEl === side;
  const fifthCase = secEl === side && fivEl === side && eigthEl === side;
  const sixthCase = third === side && sixEl === side && nineEl === side;

  const seventhCase = firstEl === side && fivEl === side && nineEl === side;
  const eighthCase = third === side && fivEl === side && sevEl === side;

  const cases = [
    firstCase,
    secondCase,
    thirdCase,
    fourthCase,
    fifthCase,
    sixthCase,
    seventhCase,
    eighthCase,
  ];

  if (cases.find((c) => c === true) && role === 'enemy') {
    window.setTimeout(() => clearTable(), 501);
    window.setTimeout(() => alert('Você perdeu...'), 500);
    return 'Você perdeu...';
  }
  if (cases.find((c) => c === true) && role === 'player') {
    window.setTimeout(() => clearTable(), 501);
    return 'Você venceu!';
  }

  const casesValues = cases.filter((c) => c === true);
  const elementsValues = elements.filter((e) => e === '');
  if (casesValues.length === 0 && elementsValues.length === 0) {
    window.setTimeout(() => clearTable(), 501);
    return 'Empate';
  } return null;
};

export default verifyTableResult;
