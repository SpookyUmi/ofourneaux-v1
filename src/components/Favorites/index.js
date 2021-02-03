import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';


import CardRecipe from 'src/components/CardRecipe';
import './styles.scss';

const Favorites = ({ recipes }) => (
  <div className="recipes">
    {/* <h2>Résultats de la recherche</h2> */}
    {recipes?.map((recipe) => (
      <CardRecipe {...recipe} key={recipe.id} className="recipes__cards" />
    ))}
  </div>
);

Favorites.propTypes = {
  recipes: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => {
  return {
    recipes: state.user.favoriteRecipes,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
