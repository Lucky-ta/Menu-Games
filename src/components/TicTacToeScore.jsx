import PropTypes from 'prop-types';
import React from 'react';

function TicTacToeScore({ playerPoints, enemyPoints }) {
  return (
    <div className="score-body">
      <h1 className="score-title">Placar</h1>
      <div className="score-poitns-container">
        <span className="score-points">{`Você: ${playerPoints}`}</span>
        <span className="score-points">{`Computador: ${enemyPoints}`}</span>
      </div>
    </div>
  );
}

TicTacToeScore.propTypes = {
  enemyPoints: PropTypes.number.isRequired,
  playerPoints: PropTypes.number.isRequired,
};

export default TicTacToeScore;
