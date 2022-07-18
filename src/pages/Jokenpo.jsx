import React, { useEffect, useState, useContext } from 'react';
import Header from '../components/Header';
import Enemy from '../service/Jokenpo/Enemy';
import ResultModal from './modals/resultModal';
import jokenpoVerifyResult from '../service/Jokenpo/jokenpoVerifyResult';
import '../styles/Jokenpo.css';
import MyContext from '../MyContext/MyContext';

function Jokenpo() {
  const { gameResult, setGameResult } = useContext(MyContext);
  const ENEMY = new Enemy();
  const [round, setRound] = useState(0);
  const [enemyOption, SetEnemyOption] = useState('');
  const [points, setPoints] = useState(0);
  const [enemyPoints, setEnemyPoints] = useState(0);

  const [option, setOption] = useState('');

  const handleOption = (choice) => {
    setOption(choice);
    setRound(round + 1);
  };

  const resetGame = () => {
    setOption('');
    setPoints(0);
    setEnemyPoints(0);
    setRound(0);
  };

  useEffect(() => {
    if (option !== '') {
      SetEnemyOption(ENEMY.option);
    }
  }, [round]);

  useEffect(() => {
    const result = jokenpoVerifyResult(enemyOption, option);
    setGameResult(result);
    console.log(result);
    if (result === 'Empate.' && enemyOption !== '') {
      window.setTimeout(() => alert(result), 200);
    }
    if (result === 'Você venceu!' && enemyOption !== '') {
      setPoints(points + 1);
    }
    if (result === 'Você perdeu.' && enemyOption !== '') {
      setEnemyPoints(enemyPoints + 1);
    }
  }, [enemyOption]);

  return (
    <div className="jokenpo-body">
      <Header title="Jokenpo" />
      <div className="jokenpo-app-option">
        <p>App</p>
        <div className="jokenpo-pickachoice-btn-Appcontainer">
          <button className="jokenpo-app-btn" type="button">
            {enemyOption}
          </button>
        </div>
      </div>
      {!option ? (
        <div className="jokenpo-pickachoice-container">
          <p>Escolha uma jogada</p>
          <div className="jokenpo-pickachoice-btn-container">
            <button
              onClick={(e) => handleOption(e.target.id)}
              id="Pedra"
              className="jokenpo-pickachoice-btn"
              type="button"
            >
              Pedra
            </button>
            <button
              onClick={(e) => handleOption(e.target.id)}
              id="Papel"
              className="jokenpo-pickachoice-btn"
              type="button"
            >
              Papel
            </button>
            <button
              onClick={(e) => handleOption(e.target.id)}
              id="Tesoura"
              className="jokenpo-pickachoice-btn"
              type="button"
            >
              Tesoura
            </button>
          </div>
        </div>
      ) : (
        <div className="jokenpo-player-option">
          <p>Você</p>
          <span className="jokenpo-option">{option}</span>
        </div>
      )}
      <div className="jokenpo-score-container">
        <p>{`Rodada: ${round}`}</p>
        <p>Placar</p>
        <div className="jokenpo-score">
          <div>
            <span>{enemyPoints}</span>
            <p>App</p>
          </div>
          <div>
            <span>{points}</span>
            <p>Você</p>
          </div>
        </div>
      </div>
      <footer className="jokenpo-footer">
        <button
          onClick={resetGame}
          className="jokenpo-footer-btn"
          type="button"
        >
          RESETAR PLACAR
        </button>
      </footer>
      <ResultModal result={gameResult} />
    </div>
  );
}

export default Jokenpo;
