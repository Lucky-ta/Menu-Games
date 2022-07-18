import PropTypes from 'prop-types';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/modals/Modal.css';

function ResultModal({ result, setModal }) {
  const navigate = useNavigate();

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

  const handleExitBtn = () => {
    navigate('/');
  };

  const handleContinueGame = () => {
    setModal(false);
  };

  return (
    <div className="container">
      <p className={resultClassName}>{result}</p>
      <button
        type="button"
        className="modalContinueBtn"
        onClick={handleContinueGame}
      >
        Continuar
      </button>
      <button type="button" onClick={handleExitBtn} className="modalExitBtn">
        Sair
      </button>
    </div>
  );
}

ResultModal.propTypes = {
  result: PropTypes.string.isRequired,
  setModal: PropTypes.func.isRequired,
};

export default ResultModal;
