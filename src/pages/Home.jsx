import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Home.css';

function Home() {
  const navigate = useNavigate();

  const handleGameOption = (game) => {
    navigate(`/${game}`);
  };

  return (
    <div className="home-body">
      <div className="home-header">
        <h1>MENU DE JOGOS</h1>
        <h3>Escolha um jogo:</h3>
      </div>
      <div className="home-games-body">
        <div className="home-tictactoe-body">
          <button
            className="home-game-btn"
            onClick={(e) => handleGameOption(e.target.id)}
            id="JogoDaVelha"
            type="button"
          >
            JOGO DA VELHA
          </button>
        </div>
        <div className="home-jokenpo-body">
          <button
            className="home-game-btn"
            onClick={(e) => handleGameOption(e.target.id)}
            id="Jokenpo"
            type="button"
          >
            PEDRA PAPEL OU TESOURA
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
