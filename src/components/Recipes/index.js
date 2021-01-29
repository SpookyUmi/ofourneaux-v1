import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// hard json data for test ( TODO PUT THIS IN PARENT ELEMENT FOR PROPS)
//import recipes from 'src/data/recipes';

import CardRecipe from 'src/components/CardRecipe';
import RecipesHeader from './RecipesHeader';

// import './recipes.scss';

// This component will display the main Header(or Navbar in mobile mode),
// the Recipes page's specific Header,
// map trough the data and display a CardRecipe element for each recipe,
// and finally the main Footer (in desktop mode)
const Recipes = ({ recipes }) => (
  <main className="recipes">
    <RecipesHeader />
    {recipes?.map((recipe) => (
      <CardRecipe {...recipe} key={recipe.id} />
    ))}
  </main>
);

// ! temporarily commented to avoid errors in the console
// Recipes.propTypes = {
//   recipes: PropTypes.array.isRequired,
//   title: PropTypes.string.isRequired,
// };

const mapStateToProps = (state) => {
  return {
    recipes: state.recipes.recipes,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Recipes);
