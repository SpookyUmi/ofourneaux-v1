// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import './styles.scss';
import recipes from 'src/data/recipes';

import CardRecipe from 'src/components/CardRecipe';
import GeneratedList from './GeneratedList';
import CustomList from './CustomList';

// == Composant
const ShoppingList = ({ quantity, setQuantity }) => {
  return (
    <div className="container">
      <h2>Recettes sélectionnées</h2>
      <section className="recipes">
        {recipes.map((recipe) => (
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
        {/* TODO: map on `categories` to display all the required lists of ingredients
        {categories.map((category) => (
          <GeneratedList
            key={category.id}
            {...category}
          />
        ))} */}
        <GeneratedList quantity={quantity} setQuantity={setQuantity}/>
        <h2>Liste personnalisée</h2>
        <CustomList quantity={quantity} setQuantity={setQuantity}/>
      </section>
    </div>
  );
};

// == Export
export default ShoppingList;
