import React from 'react';

import Recipe from 'src/components/Recipe';

import recipes from 'src/data/recipes';

import './styles.scss';

const App = () => (
  <>
    <Recipe recipes={recipes} />
  </>
  );

export default App;
