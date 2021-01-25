import React from 'react';
import PropTypes from 'prop-types';

// import './recipesHeader.scss';

const RecipesHeader = ({ title }) => (
  <div className="recipes__header">
    <h1 className="recipes__header__title">{title}</h1>
    {/* TODO onClick buttons */}
    <button className="recipes__header__button" type="button">Entrées</button>
    <button className="recipes__header__button" type="button">Plats</button>
    <button className="recipes__header__button" type="button">Desserts</button>
  </div>
);

RecipesHeader.propTypes = {
  title: PropTypes.string.isRequired,
};

export default RecipesHeader;
