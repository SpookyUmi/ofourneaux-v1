import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import { buildRecipeURL } from 'src/utils/buildRecipeURL';

import time from 'src/assets/icons/time.svg';
import fire from 'src/assets/icons/difficulty.svg';

import './styles.scss';

// This component will display a card with a recipe's picture, title, total cooking time
// and a button to add the recipe to the user's selection (if logged in)
// or to redirect to sign in (if not logged in)
const CardRecipe = ({
  picture,
  title,
  preparation_time,
  baking_time,
  difficulty,
  getRecipeById,
  id,
}) => (
  <div className="card__recipe">
    <img className="card__recipe__img" src={picture} alt={title} />
    <h3 className="card__recipe__title">
      <NavLink to={buildRecipeURL(title)} id={id} className="card__recipe__title__link" onClick={getRecipeById}>
        {title}
      </NavLink>
    </h3>
    <section className="card__recipe__info">
      <img className="card__recipe__time__icon" src={time} alt="icône de durée" />
      <p className="card__recipe__time">{preparation_time + baking_time} min</p>
    </section>
    <section className="card__recipe__info">
      <img className="card__recipe__time__icon" src={fire} alt="icône de difficulté" />
      <p className="card__recipe__time">{difficulty}</p>
    </section>
    {/* TODO onClick buttons */}
    <section className="card__recipe__buttons">
      <button id="special__button" className="card__recipe__select__button" type="button">Sélectionner</button>
      <button id="special__button" className="card__recipe__favorite__button" type="button">Favoris</button>
    </section>
  </div>
);

CardRecipe.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  preparation_time: PropTypes.number.isRequired,
  baking_time: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  getRecipeById: (event) => {
    dispatch({
      type: 'SEND_RECIPE_REQUEST',
      payload: {
        id: event.target.id,
      }
    });
  },
});

export default connect(null, mapDispatchToProps)(CardRecipe);
