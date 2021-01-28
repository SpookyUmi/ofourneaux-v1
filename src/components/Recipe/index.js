import React from 'react';

import Informations from 'src/components/Recipe/Informations';
import Instructions from 'src/components/Recipe/Instructions';
import Ingredients from 'src/components/Recipe/Ingredients';
import Image from 'src/components/Recipe/Image';

import './styles.scss';

const Recipe = () => (
  <div className="recipe">
    <div className="recipe__block recipe__block--left">
      <Informations />
      <Instructions />
    </div>

    <div className="recipe__block recipe__block--right">
      <Image />
      <Ingredients />
    </div>
  </div>
);

export default Recipe;
