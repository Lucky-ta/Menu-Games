/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useEffect, useState } from 'react';
import '../styles/TicTacToe.css';
import Player from '../service/TicTacToePlayer';
import Enemy from '../service/TicTacToeEnemy';

function JogoDaVelha() {
  const [side, setSide] = useState(null);
  const [round, setRound] = useState(0);
  const [playedPositions, setPlayedPositions] = useState([]);

  const player = new Player(side, round);
  const enemy = new Enemy(side, round, playedPositions);

  const handleSide = (option) => {
    setSide(option);
  };

  const hanldeAttack = (id) => {
    if (side === null) return alert('Selecione um lado!');
    setPlayedPositions([...playedPositions, Number(id)]);
    setRound(round + 1);
    return player.attack(id);
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
      return 'Você venceu!';
    } return null;
  };

  useEffect(() => {
    const result = verifyTableResult();
    if (result === 'Você venceu!') {
      return window.setTimeout(() => alert(result), 500);
    }
    return enemy.attack();
  }, [round]);

  return (
    <div>
      <h1>JogoDaVelha</h1>
      {side === null && (
        <div>
          <h2>Escolha um lado:</h2>
          <button onClick={(e) => handleSide(e.target.id)} id="X" type="button">
            X
          </button>
          <button onClick={(e) => handleSide(e.target.id)} id="O" type="button">
            O
          </button>
        </div>
      )}
      <div className="tictactoe-table">
        <div
          onClick={(e) => hanldeAttack(e.target.id)}
          onKeyDown
          role="button"
          tabIndex={0}
          id="1"
          className="table"
        />
        <div
          onClick={(e) => hanldeAttack(e.target.id)}
          onKeyDown
          role="button"
          tabIndex={0}
          id="2"
          className="table"
        />
        <div
          onClick={(e) => hanldeAttack(e.target.id)}
          onKeyDown
          role="button"
          tabIndex={0}
          id="3"
          className="table"
        />
        <div
          onClick={(e) => hanldeAttack(e.target.id)}
          onKeyDown
          role="button"
          tabIndex={0}
          id="4"
          className="table"
        />
        <div
          onClick={(e) => hanldeAttack(e.target.id)}
          onKeyDown
          role="button"
          tabIndex={0}
          id="5"
          className="table"
        />
        <div
          onClick={(e) => hanldeAttack(e.target.id)}
          onKeyDown
          role="button"
          tabIndex={0}
          id="6"
          className="table"
        />
        <div
          onClick={(e) => hanldeAttack(e.target.id)}
          onKeyDown
          role="button"
          tabIndex={0}
          id="7"
          className="table"
        />
        <div
          onClick={(e) => hanldeAttack(e.target.id)}
          onKeyDown
          role="button"
          tabIndex={0}
          id="8"
          className="table"
        />
        <div
          onClick={(e) => hanldeAttack(e.target.id)}
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
