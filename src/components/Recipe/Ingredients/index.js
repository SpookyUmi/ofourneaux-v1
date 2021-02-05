import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import './styles.scss';

const Ingredients = ({ ingredients, categories }) => (
  <div className="recipe__ingredients">
    <h2 className="recipe__ingredients__title">
      Ingrédients
    </h2>
    <div className="recipe__ingredients__list">
      {ingredients.map((ingredient) => (
        <div key={ingredient.name} className="recipe__ingredient">
          {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
          <img
            className="recipe__ingredient__img"
            src={categories.find((category) => category.id === ingredient.category_id).icon}
            alt="Photo de la catégorie de l'ingrédient"
          />
          <div className="recipe__ingredient__title">
            {ingredient.name}
          </div>
          <div className="recipe__ingredient__quantity">
            {`${ingredient.quantity} ${ingredient.unit}`}
          </div>
        </div>
      ))}
    </div>
  </div>
);

Ingredients.propTypes = {
  ingredients: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    category: PropTypes.string,
  })).isRequired,
  categories: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  categories: state.app.categories,
});

export default connect(mapStateToProps, null)(Ingredients);
