const jokenpoVerifyResult = (enemyOption, playerOption) => {
  const options = ['Pedra', 'Papel', 'Tesoura'];

  if (enemyOption === playerOption) {
    return 'Empate.';
  }

  if (enemyOption === options[0] && playerOption === options[1]) {
    return 'Você venceu!';
  }

  if (enemyOption === options[0] && playerOption === options[2]) {
    return 'Você perdeu.';
  }

  if (enemyOption === options[1] && playerOption === options[2]) {
    return 'Você venceu!';
  }

  if (enemyOption === options[1] && playerOption === options[0]) {
    return 'Você perdeu.';
  }

  if (enemyOption === options[2] && playerOption === options[0]) {
    return 'Você venceu!';
  }

  if (enemyOption === options[2] && playerOption === options[1]) {
    return 'Você perdeu.';
  } return null;
};

export default jokenpoVerifyResult;
