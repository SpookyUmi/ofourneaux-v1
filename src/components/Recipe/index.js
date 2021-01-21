import React from 'react';
import PropTypes from 'prop-types';

import Informations from 'src/components/Recipe/Informations';
import Instructions from 'src/components/Recipe/Instructions';
import Ingredients from 'src/components/Recipe/Ingredients';

import './styles.scss';

const Recipe = ({recipes}) => {
  // console.log(recipes);

  return (
    <div className="recipe">
      <div className="recipe__block recipe__block--left" >
        <Informations recipe={recipes[0]} />
        <Instructions instructions={recipes[0].instructions} />
      </div>

      <div className="recipe__block recipe__block--right" >
        <img className="recipe__img" src={recipes[0].picture} />
        <Ingredients ingredients={recipes[0].ingredients} />
      </div>
    </div>
  )
};

Recipe.propTypes = {

};

export default Recipe;
