import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import trash from 'src/assets/icons/delete.svg';
import modifier from 'src/assets/icons/modifier.svg';
import heartLine from 'src/assets/icons/heart-line.svg';
import heartFull from 'src/assets/icons/heart-full.svg';

import './styles.scss';

const Image = ({
  id,
  picture,
  status,
  isLogged,
  handleEditOrDeleteRecipe,
  sendRecipeInFavorites,
  favoritesRecipes,
}) => {
  // by default the heart icon is empty
  let heart = heartLine;

  // check if the recipe is in the favorites to change
  // the source of the heart icon accordingly
  const checkIfRecipeIsInFavorites = () => {
    // console.log('Check if the recipe is in the favorites recipes list.');
    favoritesRecipes.forEach((favoriteRecipe) => {
      if (favoriteRecipe === id) {
        // console.log('Recipe is in favorites.');
        heart = heartFull;
        // console.log(heart);
      }
    });
  };

  if (favoritesRecipes && checkIfRecipeIsInFavorites());

  return (
    <div className="image">
      {/* TODO: put the icons in white */}
      <div className="image__icons">
        {
          status === 'admin'
          && (
            <div className="image__icons__admin">
              <NavLink
                exact
                to={{
                  pathname: `/admin/modification-recette/${id}`,
                }}
                id={id}
                onClick={handleEditOrDeleteRecipe}
              >
                <img id={id} className="image__icon" src={trash} alt="Icône de poubelle" />
              </NavLink>
              <NavLink
                exact
                to={{
                  pathname: `/admin/modification-recette/${id}`,
                }}
                id={id}
                onClick={handleEditOrDeleteRecipe}
              >
                <img id={id} className="image__icon" src={modifier} alt="Icône de crayon" />
              </NavLink>
            </div>
          )
        }

        {/* TODO: at the click, the icon change to fill up */}
        {
          isLogged
          && (
            <img id={id} className="image__icon" src={heart} alt="Icône de coeur vide ou plein" onClick={sendRecipeInFavorites} />
          )
        }
      </div>
      {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
      <img className="image__recipe" src={picture} alt="Photo de la recette" />
    </div>
  );
};

Image.propTypes = {
  // eslint-disable-next-line react/require-default-props
  id: PropTypes.number,
  picture: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  isLogged: PropTypes.bool.isRequired,
  handleEditOrDeleteRecipe: PropTypes.func.isRequired,
  sendRecipeInFavorites: PropTypes.func.isRequired,
  // eslint-disable-next-line react/require-default-props
  favoritesRecipes: PropTypes.array,
};

const mapStateToProps = (state) => ({
  id: state.recipe.id,
  status: state.user.status,
  isLogged: state.auth.isLogged,
  favoritesRecipes: state.user.favoritesRecipes,
});

const mapDispatchToProps = (dispatch) => ({
  // sends request to the middleware "recipe.js" to retrieve
  // the information of the recipe targeted for modification/deletion
  handleEditOrDeleteRecipe: (event) => {
    dispatch({
      type: 'SEND_RECIPE_REQUEST',
      payload: {
        id: event.target.id,
      },
    });
  },

  // sends the request to the middleware "recipe.js" to update
  // the list of the user's favorite recipes
  sendRecipeInFavorites: (event) => {
    dispatch({
      type: 'UPDATE_FAVORITES_REQUEST',
      payload: {
        id: event.target.id,
      },
    });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Image);
