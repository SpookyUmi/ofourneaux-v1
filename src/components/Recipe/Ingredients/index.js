import React from 'react';

import './styles.scss';

const Ingredients = ({ingredients}) => (
  <div className="recipe__ingredients">
    <h2 className="recipe__ingredients__title">
      Ingrédients
    </h2>
    <div className="recipe__ingredients__list">
      {ingredients.map(ingredient => (
        <div key={ingredient.name} className="recipe__ingredient">
          <img className="recipe__ingredient__img" />
          <div className="recipe__ingredient__title">
            {ingredient.name}
          </div>
          <div className="recipe__ingredient__quantity">
            {ingredient.quantity + ingredient.unit}
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Ingredients;
