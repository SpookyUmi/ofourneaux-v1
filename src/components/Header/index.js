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
        <button className="header__elem">S'inscrire</button>
        <button className="header__elem">Se connecter</button>
      </div>
    </header>
  );
};

// == Export
export default Header;
