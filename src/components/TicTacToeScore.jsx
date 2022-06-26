import PropTypes from 'prop-types';
import React from 'react';

function TicTacToeScore({ playerPoints, enemyPoints }) {
  return (
    <div>
      <h1>Placar</h1>
      <span>{`Você: ${playerPoints}`}</span>
      <span> || </span>
      <span>{`Computador: ${enemyPoints}`}</span>
    </div>
  );
}

TicTacToeScore.propTypes = {
  enemyPoints: PropTypes.number.isRequired,
  playerPoints: PropTypes.number.isRequired,
};

export default TicTacToeScore;
