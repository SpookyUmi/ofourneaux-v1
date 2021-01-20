import React from 'react';

import './styles.scss';

const Ingredients = () => {
  return (
    <div className="recipe__ingredients">
      <h2 className="recipe__ingredients__title">
        Ingrédients
      </h2>
      <div className="recipe__ingredients__list">
        <div className="recipe__ingredient">
          <img className="recipe__ingredient__img" />
          <div className="recipe__ingredient__title">
            Nom
          </div>
          <div className="recipe__ingredient__quantity">
            Unité
          </div>
        </div>
        <div className="recipe__ingredient">
          <img className="recipe__ingredient__img" />
          <div className="recipe__ingredient__title">
            Nom
          </div>
          <div className="recipe__ingredient__quantity">
            Unité
          </div>
        </div>
        <div className="recipe__ingredient">
          <img className="recipe__ingredient__img" />
          <div className="recipe__ingredient__title">
            Nom
          </div>
          <div className="recipe__ingredient__quantity">
            Unité
          </div>
        </div>
        <div className="recipe__ingredient">
          <img className="recipe__ingredient__img" />
          <div className="recipe__ingredient__title">
            Nom
          </div>
          <div className="recipe__ingredient__quantity">
            Unité
          </div>
        </div>
        <div className="recipe__ingredient">
          <img className="recipe__ingredient__img" />
          <div className="recipe__ingredient__title">
            Nom
          </div>
          <div className="recipe__ingredient__quantity">
            Unité
          </div>
        </div>
      </div>
    </div>

  )
};

export default Ingredients;
