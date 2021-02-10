import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import CardRecipe from 'src/components/CardRecipe';
import './styles.scss';

const Recipes = ({ recipes, setIsOpen }) => {
  useEffect(() => {
    setIsOpen(false);
  }, []);
  return (
    <div className="recipes__container">
      <div className="recipes__container__title">
        <h2>Résultats de la recherche</h2>
      </div>
      <section className="recipes__card">
        {recipes?.map((recipe) => (
          <CardRecipe {...recipe} key={recipe.id} className="recipes__cards" />
        ))}
      </section>
    </div>
  );
};

Recipes.propTypes = {
  recipes: PropTypes.array.isRequired,
  setIsOpen: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  recipes: state.recipes.recipes,
});

export default connect(mapStateToProps, null)(Recipes);
