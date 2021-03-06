import PropTypes from 'prop-types';
import React from 'react';

function TicTacToePickSide({ handleSide }) {
  return (
    <div className="pickside-body">
      <h2>Escolha um lado:</h2>
      <button className="pickside-btn" onClick={(e) => handleSide(e.target.id)} id="X" type="button">
        X
      </button>
      <button className="pickside-btn" onClick={(e) => handleSide(e.target.id)} id="O" type="button">
        O
      </button>
    </div>
  );
}

TicTacToePickSide.propTypes = {
  handleSide: PropTypes.func.isRequired,
};

export default TicTacToePickSide;
