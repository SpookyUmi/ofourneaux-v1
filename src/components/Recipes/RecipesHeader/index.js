import React from 'react';
import PropTypes from 'prop-types';

// import './recipesHeader.scss';

const RecipesHeader = () => (
  <div className="recipes__header">
    {/* TODO onClick buttons */}
    <button className="recipes__header__button" type="button">Entrées</button>
    <button className="recipes__header__button" type="button">Plats</button>
    <button className="recipes__header__button" type="button">Desserts</button>
  </div>
);

export default RecipesHeader;
