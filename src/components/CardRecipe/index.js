import React from 'react';
import PropTypes from 'prop-types';

// import './cardRecipe.scss';

// This component will display a card with a recipe's picture, title, total cooking time
// and a button to add the recipe to the user's selection (if logged in)
// or to redirect to sign in (if not logged in)
const CardRecipe = ({ recipe }) => (
  <div className="card__recipe">
    <img className="card__recipe__img" src={recipe.picture} alt={recipe.title} />
    <h1 className="card__recipe__title">
      <a className="card__recipe__title__link" href="/recette/:slug">
        {recipe.title}
      </a>
    </h1>
    <img className="card__recipe__time__icon" src="" alt="icône de durée" />
    <p className="card__recipe__time">{recipe.preparation_time + recipe.baking_time} Minutes</p>
    {/* TODO onClick buttons */}
    <button className="card__recipe__select__button" type="button">Sélectionner</button>
    <button className="card__recipe__favorite__button" type="button">Ajouter aux favoris</button>
  </div>
);

CardRecipe.propTypes = {
  recipe: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
    preparation_time: PropTypes.number.isRequired,
    baking_time: PropTypes.number.isRequired,
  }).isRequired,
};

export default CardRecipe;
