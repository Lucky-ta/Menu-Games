import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  const handleGameOption = (game) => {
    navigate(`/${game}`);
  };

  return (
    <div>
      <h1>MENU DE JOGOS</h1>
      <h3>Escolha um jogo:</h3>
      <div>
        <h2>Jogo da Velha</h2>
        <button
          onClick={(e) => handleGameOption(e.target.id)}
          id="JogoDaVelha"
          type="button"
        >
          Jogar
        </button>
      </div>
      <div>
        <h2>Pedra Papel ou Tesoura</h2>
        <button
          onClick={(e) => handleGameOption(e.target.id)}
          id="Jokenpo"
          type="button"
        >
          Jogar
        </button>
      </div>
    </div>
  );
}

export default Home;
