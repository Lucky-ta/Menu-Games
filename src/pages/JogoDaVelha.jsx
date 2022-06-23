import React from 'react';
import '../styles/TicTacToe.css';

function JogoDaVelha() {
  const table = ['X', 'X', 'X', 'O', 'O', 'O', 'X', 'X', 'X'];
  return (
    <div>
      <h1>JogoDaVelha</h1>
      <div className="tictactoe-table">
        {table.map((value) => (
          <div className='table' key={value}>
            <span>{value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default JogoDaVelha;
