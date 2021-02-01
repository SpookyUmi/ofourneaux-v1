import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// hard json data for test ( TODO PUT THIS IN PARENT ELEMENT FOR PROPS)
//import recipes from 'src/data/recipes';

import CardRecipe from 'src/components/CardRecipe';
import './styles.scss';

// import './recipes.scss';

// This component will display the main Header(or Navbar in mobile mode),
// the Recipes page's specific Header,
// map trough the data and display a CardRecipe element for each recipe,
// and finally the main Footer (in desktop mode)
const Recipes = ({ recipes }) => (
  <div className="recipes">
    {/* <RecipesHeader /> */}
    {/* <h2>Résultats de la recherche</h2> */}
    {recipes?.map((recipe) => (
      <CardRecipe {...recipe} key={recipe.id} className="recipes__cards"/>
    ))}
  </div>
);

Recipes.propTypes = {
  recipes: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => {
  return {
    recipes: state.recipes.recipes,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Recipes);
