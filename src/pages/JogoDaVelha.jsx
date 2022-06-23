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
    // console.log(positions);
    setRound(round + 1);
    return player.attack(id);
  };

  useEffect(() => {
    enemy.attack();
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
