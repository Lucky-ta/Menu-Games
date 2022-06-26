/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useContext, useEffect, useState } from 'react';
import '../styles/TicTacToe.css';
import { HiArrowSmLeft } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';
import Player from '../service/TicTacToePlayer';
import Enemy from '../service/TicTacToeEnemy';
import TicTacToeScore from '../components/TicTacToeScore';
import MyContext from '../MyContext/MyContext';
import TicTacToePickSide from '../components/TicTacToePickSide';
import verifyTableResult from '../service/ticTacToeVerifyResult';
import clearTable from '../service/TicTacToeClearTable';

function JogoDaVelha() {
  const navigate = useNavigate();
  const tableLength = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  const {
    playerPoints, SetPlayerPoints, enemyPoints, SetEnemyPoints,
  } = useContext(MyContext);
  const [side, setSide] = useState(null);
  const [round, setRound] = useState(0);
  const [playedPositions, setPlayedPositions] = useState([]);

  const player = new Player(side, round, { playerPoints, SetPlayerPoints });
  const enemy = new Enemy(side, round, playedPositions, {
    enemyPoints,
    SetEnemyPoints,
  });

  const handleSide = (option) => {
    setSide(option);
  };

  const hanldeAttack = (id) => {
    if (side === null) return alert('Selecione um lado!');
    if (document.getElementById(id).innerHTML !== '') {
      return alert('Você não pode jogar aqui!');
    }
    setPlayedPositions([...playedPositions, Number(id)]);
    setRound(round + 1);
    return player.attack(id);
  };

  const resetGame = () => {
    SetEnemyPoints(0);
    SetPlayerPoints(0);
    clearTable();
  };

  useEffect(() => {
    const result = verifyTableResult(side, 'player');
    if (result !== 'Você venceu!') {
      enemy.attack();
    }
  }, [round]);

  return (
    <div className="tictactoe-body">
      <div className="toctactoe-header">
        <button
          onClick={() => navigate('/')}
          className="tictactoe-arrow-btn"
          type="button"
        >
          <HiArrowSmLeft size="2.8em" />
        </button>
        <h1 className="tictactoe-title">Jogo Da Velha</h1>
      </div>
      {side === null ? (
        <TicTacToePickSide handleSide={handleSide} />
      ) : (
        <TicTacToeScore
          playerPoints={playerPoints}
          enemyPoints={enemy.points.enemyPoints}
        />
      )}
      <div className="tictactoe-table">
        {tableLength.map((n) => (
          <div
            key={n}
            onClick={(e) => hanldeAttack(e.target.id)}
            onKeyDown={() => null}
            role="button"
            tabIndex={0}
            id={JSON.stringify(n)}
            className="table"
          />
        ))}
      </div>
      <button onClick={resetGame} className="tictactoe-reset-btn" type="button">
        RESETAR
      </button>
    </div>
  );
}

export default JogoDaVelha;
