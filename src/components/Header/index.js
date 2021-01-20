// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import './styles.scss';

// == Composant
const Header = ({ title }) => {

  return (
    <header className="header">
      <input type="text" placeholder="Soupe au chat" className="header__elem"/>
      <h1 className="header__elem">{title}</h1>
      <div className="header__buttons">
        <a className="header__elem--button">S'inscrire</a>
        <a className="header__elem">Se connecter</a>
      </div>
    </header>
  );
};

// == Export
export default Header;
