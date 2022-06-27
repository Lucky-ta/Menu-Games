import React from 'react';
import Header from '../components/Header';
import '../styles/Jokenpo.css';

function Jokenpo() {
  return (
    <div className="jokenpo-body">
      <Header title="Jokenpo" />
      <div className="jokenpo-app-option">
        <p>App</p>
        <div className="jokenpo-pickachoice-btn-Appcontainer">
          <button className="jokenpo-app-btn" type="button">ANY</button>
        </div>
      </div>
      <div className="jokenpo-pickachoice-container">
        <p>Escolha uma jogada</p>
        <div className="jokenpo-pickachoice-btn-container">
          <button className="jokenpo-pickachoice-btn" type="button">Pedra</button>
          <button className="jokenpo-pickachoice-btn" type="button">Papel</button>
          <button className="jokenpo-pickachoice-btn" type="button">Tesoura</button>
        </div>
      </div>
      <div className="jokenpo-score-container">
        <p>Rodada: 0</p>
        <p>Placar</p>
        <div className="jokenpo-score">
          <div>
            <span>0</span>
            <p>App</p>
          </div>
          <div>
            <span>2</span>
            <p>Você</p>
          </div>
        </div>
      </div>
      <footer className="jokenpo-footer">
        <button className="jokenpo-footer-btn" type="button">Jogar</button>
      </footer>
    </div>
  );
}

export default Jokenpo;
