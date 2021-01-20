import React from 'react';

import Recipe from 'src/components/Recipe';

import recipes from 'src/data/recipes';

import './styles.css';

const App = () => {
  return (
    <>
      <Recipe recipes={recipes} />
    </>
  )
};

export default App;
