import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';


import CardRecipe from 'src/components/CardRecipe';
import './styles.scss';

const Favorites = ({ recipes }) => (
  <div className="recipes__container">
    <div className="recipes__container__title">
      <h2>Mes recettes favorites</h2>
    </div>
    <section className="recipes">
      {recipes?.map((recipe) => (
        <CardRecipe {...recipe} key={recipe.id} className="recipes__cards" />
      ))}
    </section>
  </div>
);

Favorites.propTypes = {
  recipes: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => {
  return {
    recipes: state.user.userFavoritesRecipes,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
