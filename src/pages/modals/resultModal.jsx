import PropTypes from 'prop-types';
import React from 'react';
import '../../styles/modals/Modal.css';

function ResultModal({ result }) {
  let resultClassName = '';
  switch (result) {
    case 'Empate.':
      resultClassName = 'empate';
      break;
    case 'Você venceu!':
      resultClassName = 'venceu';
      break;
    case 'Você perdeu.':
      resultClassName = 'perdeu';
      break;
    default:
      break;
  }

  return (
    <div className="container">
      <p className={resultClassName}>{result}</p>
      <p className="modalContinueBtn">Continuar</p>
      <p className="modalExitBtn">Sair</p>
    </div>
  );
}

ResultModal.propTypes = {
  result: PropTypes.string.isRequired,
};

export default ResultModal;
