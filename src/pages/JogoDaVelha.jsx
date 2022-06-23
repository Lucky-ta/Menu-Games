/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useEffect, useState } from 'react';
import Enemy from '../service/TicTacToeEnemy';
import '../styles/TicTacToe.css';

function JogoDaVelha() {
  const [side, setSide] = useState(null);
  const [ell, setEl] = useState('');

  const hanldeId = (id) => {
    const el = document.getElementById(id);
    el.innerHTML = side;
    setEl(el);

    console.log(side);
  };

  const verifyTableResult = () => {
    const firstEl = document.getElementById('1').innerHTML;
    const secEl = document.getElementById('2').innerHTML;
    const third = document.getElementById('3').innerHTML;
    const fourthEl = document.getElementById('4').innerHTML;
    const fivEl = document.getElementById('5').innerHTML;
    const sixEl = document.getElementById('6').innerHTML;
    const sevEl = document.getElementById('7').innerHTML;
    const eigthEl = document.getElementById('8').innerHTML;
    const nineEl = document.getElementById('9').innerHTML;

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

    if (cases.find((c) => c === true)) {
      console.log('Ganhou!');
    }
  };

  const enemyPlayer = () => {
    const enemy = new Enemy(side);
    enemy.attack();
    // const firstEl = document.getElementById('1').innerHTML;
    // if (firstEl !== '' && side) {
    //     document.getElementById('2').innerHTML = 'O';
    // }
  };

  useEffect(() => {
    verifyTableResult();
    enemyPlayer();
  }, [ell]);

  const handleSideOption = (playerOption) => {
    setSide(playerOption);
  };

  return (
    <div>
      <h1>JogoDaVelha</h1>
      <h2>Escolha um lado:</h2>
      <button
        id="X"
        onClick={(e) => handleSideOption(e.target.id)}
        type="button"
      >
        X
      </button>
      <button
        id="O"
        onClick={(e) => handleSideOption(e.target.id)}
        type="button"
      >
        O
      </button>
      <div className="tictactoe-table">
        <div
          onClick={(e) => hanldeId(e.target.id)}
          onKeyDown
          role="button"
          tabIndex={0}
          id="1"
          className="table"
        />
        <div
          onClick={(e) => hanldeId(e.target.id)}
          onKeyDown
          role="button"
          tabIndex={0}
          id="2"
          className="table"
        />
        <div
          onClick={(e) => hanldeId(e.target.id)}
          onKeyDown
          role="button"
          tabIndex={0}
          id="3"
          className="table"
        />
        <div
          onClick={(e) => hanldeId(e.target.id)}
          onKeyDown
          role="button"
          tabIndex={0}
          id="4"
          className="table"
        />
        <div
          onClick={(e) => hanldeId(e.target.id)}
          onKeyDown
          role="button"
          tabIndex={0}
          id="5"
          className="table"
        />
        <div
          onClick={(e) => hanldeId(e.target.id)}
          onKeyDown
          role="button"
          tabIndex={0}
          id="6"
          className="table"
        />
        <div
          onClick={(e) => hanldeId(e.target.id)}
          onKeyDown
          role="button"
          tabIndex={0}
          id="7"
          className="table"
        />
        <div
          onClick={(e) => hanldeId(e.target.id)}
          onKeyDown
          role="button"
          tabIndex={0}
          id="8"
          className="table"
        />
        <div
          onClick={(e) => hanldeId(e.target.id)}
          onKeyDown
          role="button"
          tabIndex={0}
          id="9"
          className="table"
        />
      </div>
    </div>
  );
}

export default JogoDaVelha;
