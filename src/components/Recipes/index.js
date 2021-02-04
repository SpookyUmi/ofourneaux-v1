import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import CardRecipe from 'src/components/CardRecipe';
import './styles.scss';

const Recipes = ({ recipes }) => (
  <div className="recipes__container">
    <div className="recipes__container__title">
      <h2>Résultats de la recherche</h2>
    </div>
    <section className="recipes">
      {recipes?.map((recipe) => (
        <CardRecipe {...recipe} key={recipe.id} className="recipes__cards" />
      ))}
    </section>
  </div>
);

Recipes.propTypes = {
  recipes: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  recipes: state.recipes.recipes,
});

export default connect(mapStateToProps, null)(Recipes);
