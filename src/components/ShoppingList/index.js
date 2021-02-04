// == Import npm
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// == Import
import './styles.scss';

import CardRecipe from 'src/components/CardRecipe';
// import GeneratedList from './GeneratedList';

// == Composant
const ShoppingList = ({ recipes }) => (
  <div className="container">
    <h2>Recettes sélectionnées</h2>
    <section className="recipes">
      {recipes?.map((recipe) => (
        <CardRecipe
          key={recipe.id}
            // We provide every keys of `recipe` object
            // to CardRecipe props
          {...recipe}
        />
      ))}
    </section>
    {/* <h2>Liste de courses</h2>
    <section className="lists">
      {categories?.map((category) => (
        <GeneratedList
          key={category.id}
          {...category}
        />
      ))}
    </section> */}
  </div>
);

ShoppingList.propTypes = {
  recipes: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  recipes: state.user.selectedRecipes,
  categories: state.user.ingredientsList,
});

export default connect(mapStateToProps, null)(ShoppingList);
