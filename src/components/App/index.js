import React from 'react';

import Recipe from 'src/components/Recipe';

import recipes from 'src/data/recipes';

import './styles.scss';

const App = () => (
  <div className="app">
    <Recipe recipes={recipes} />
  </div>
);

export default App;
