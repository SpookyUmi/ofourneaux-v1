function difficultyIdByName(name) {
  if (name === 'Facile') {
    return 1;
  } else if (name === 'Moyen') {
    return 2;
  } else if (name === 'Difficile') {
    return 3;
  };
}
export default difficultyIdByName;
