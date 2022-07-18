/* eslint-disable react/jsx-no-constructed-context-values */
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import MyContext from './MyContext';

function MyProvider({ children }) {
  const [playerPoints, SetPlayerPoints] = useState(0);
  const [enemyPoints, SetEnemyPoints] = useState(0);
  const [gameResult, setGameResult] = useState('');

  const data = {
    playerPoints,
    enemyPoints,
    SetPlayerPoints,
    SetEnemyPoints,
    gameResult,
    setGameResult,
  };

  return <MyContext.Provider value={data}>{children}</MyContext.Provider>;
}

MyProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MyProvider;
