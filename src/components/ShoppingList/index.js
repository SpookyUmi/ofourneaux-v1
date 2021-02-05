// == Import npm
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// == Import
import './styles.scss';

import CardRecipe from 'src/components/CardRecipe';
import GeneratedList from './GeneratedList';

// == Composant
const ShoppingList = ({
  recipes, ingredients, categories, setIsOpen,
}) => {
  setIsOpen(false);
  const categoriesWithIngredients = categories.map((category) => ({
    name: category.name,
    icon: category.icon,
    items: ingredients.filter((ingredient) => ingredient.category_id === category.id),
  }));
  // console.log('CATEGORIES INGRID', categoriesWithIngredients);
  return (
    <div className="shoppinglist__container">
      <div className="recipes__container__title">
        <h2>Recettes sélectionnées</h2>
      </div>
      <section className="shoppinglist__recipes">
        {recipes?.map((recipe) => (
          <CardRecipe
            key={recipe.id}
              // We provide every keys of `recipe` object
              // to CardRecipe props
            {...recipe}
          />
        ))}
      </section>
      <h2>Liste de courses</h2>
      <section className="lists">
        {categoriesWithIngredients?.map((category) => (
          category.items.length >= 1
          && (
          <GeneratedList
            key={category.name}
            {...category}
          />
          )
        ))}
      </section>
    </div>

  );
};

ShoppingList.propTypes = {
  recipes: PropTypes.array.isRequired,
  ingredients: PropTypes.array.isRequired,
  categories: PropTypes.array.isRequired,
  setIsOpen: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  recipes: state.user.selectedRecipes,
  ingredients: state.user.ingredientsList,
  categories: state.app.categories,
});

export default connect(mapStateToProps, null)(ShoppingList);
