/* eslint-disable camelcase */
import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import { buildRecipeURL } from 'src/utils/buildRecipeURL';

import time from 'src/assets/icons/time.svg';
import fire from 'src/assets/icons/difficulty.svg';
import difficultyNameById from 'src/utils/difficultyNameById';

import './styles.scss';

// This component will display a card with a recipe's picture, title, total cooking time
// and a button to add the recipe to the user's selection.
// The props picture_url, title, preparation_time, baking_time, difficulty_id, getRecipeById, id
// are passed down by the Recipes component.
const CardRecipe = ({
  picture_url,
  title,
  preparation_time,
  baking_time,
  difficulty_id,
  getRecipeById,
  id,
  addRecipeToFavorites,
  addRecipeToShoppingList,
  isLogged,
  shoppingList,
  favoritesRecipes,
}) => {
  let messageButton = 'Sélectionner';
  let messageFavorite = 'Favoris';

  const checkIfRecipeIsInShoppingList = () => {
    shoppingList.forEach((itemList) => {
      if (itemList === id) {
        messageButton = 'Désélectionner';
      }
    });
  };

  const checkIfRecipeIsInFavorites = () => {
    favoritesRecipes.forEach((favoriteRecipe) => {
      if (favoriteRecipe === id) {
        messageFavorite = 'Retirer';
      }
    });
  };

  checkIfRecipeIsInShoppingList();
  checkIfRecipeIsInFavorites();

  return (
    <div className="card__recipe">
      <img className="card__recipe__img" src={picture_url} alt={title} />
      <div className="card__recipe__container">
        <h3 className="card__recipe__title">
          <NavLink to={title ? buildRecipeURL(title) : title} id={id} className="card__recipe__title__link" onClick={getRecipeById}>
            {title}
          </NavLink>
        </h3>
        <div className="card__recipe__infos">
          <section className="card__recipe__info">
            <img className="card__recipe__time__icon" src={time} alt="icône de durée" />
            <p className="card__recipe__time">{preparation_time + baking_time} min</p>
          </section>
          <section className="card__recipe__info">
            <img className="card__recipe__time__icon" src={fire} alt="icône de difficulté" />
            <p className="card__recipe__time">{difficultyNameById(difficulty_id)}</p>
          </section>
        </div>
        {
          isLogged
          && (
            <section className="card__recipe__buttons">
              <button
                id={id}
                className="card__recipe__select__button"
                type="button"
                onClick={addRecipeToShoppingList}
              >{messageButton}
              </button>
              <button
                id={id}
                className="card__recipe__favorite__button"
                type="button"
                onClick={addRecipeToFavorites}
              >{messageFavorite}
              </button>
            </section>
          )
        }
      </div>
    </div>
  );
};

CardRecipe.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  picture_url: PropTypes.string.isRequired,
  preparation_time: PropTypes.number.isRequired,
  baking_time: PropTypes.number.isRequired,
  difficulty_id: PropTypes.number.isRequired,
  getRecipeById: PropTypes.func.isRequired,
  addRecipeToFavorites: PropTypes.func.isRequired,
  addRecipeToShoppingList: PropTypes.func.isRequired,
  isLogged: PropTypes.bool.isRequired,
  shoppingList: PropTypes.array.isRequired,
  favoritesRecipes: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  isLogged: state.auth.isLogged,
  shoppingList: state.user.shoppingList,
  favoritesRecipes: state.user.favoritesRecipes,
});

const mapDispatchToProps = (dispatch) => ({
  getRecipeById: (event) => {
    dispatch({
      type: 'SEND_RECIPE_REQUEST',
      payload: {
        id: event.target.id,
      },
    });
  },

  addRecipeToShoppingList: (event) => {
    event.preventDefault();
    dispatch({
      type: 'UPDATE_SHOPPING_LIST_REQUEST',
      payload: {
        id: event.target.id,
      },
    });
  },

  addRecipeToFavorites: (event) => {
    event.preventDefault();
    dispatch({
      type: 'UPDATE_FAVORITES_REQUEST',
      payload: {
        id: event.target.id,
      },
    });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(CardRecipe);
