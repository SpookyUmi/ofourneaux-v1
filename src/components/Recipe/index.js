import React from 'react';

import Informations from 'src/components/Recipe/Informations';
import Instructions from 'src/components/Recipe/Instructions';
import Ingredients from 'src/components/Recipe/Ingredients';

import './styles.scss';

const Recipe = () => {
  return (
    <>
      {/* header/navbar */}
      TODO: ici le composant header/navbar (codé par Chloé)

      <div className="recipe__block-left">
        <Informations />
        <Instructions />
      </div>

      <div className="recipe__block-right">
        <img src=""></img>
        <Ingredients />
      </div>
    </>

  )
};

export default Recipe;
