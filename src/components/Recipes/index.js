import React from 'react';
import PropTypes from 'prop-types';

// hard json data for test ( TODO PUT THIS IN PARENT ELEMENT FOR PROPS)
import recipes from 'src/data/recipes';

import Header from 'src/components/Header';
import Footer from 'src/components/Footer';
import CardRecipe from 'src/components/CardRecipe';
import RecipesHeader from './RecipesHeader';

// import './recipes.scss';

// This component will display the main Header(or Navbar in mobile mode),
// the Recipes page's specific Header,
// map trough the data and display a CardRecipe element for each recipe,
// and finally the main Footer (in desktop mode)
const Recipes = ({ recipes, title }) => (
  <main className="recipes">
    <Header />
    <RecipesHeader title={title} />
    {recipes.map((recipe) => (
      <CardRecipe recipe={recipe} key={recipe.id} />
    ))}
    <Footer />
  </main>
);

// ! temporarily commented to avoid errors in the console
// Recipes.propTypes = {
//   recipes: PropTypes.array.isRequired,
//   title: PropTypes.string.isRequired,
// };

export default Recipes;
