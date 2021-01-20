// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import './styles.scss';

// == Composant
const Header = ({ title, isLoggedIn }) => {

  return (
    <header className="header">
      {/* TODO: onSubmit, send a GET request (axios), and redirect to /recettes */}
      <input type="text" placeholder="Recherche..." className="header__elem header__elem--input"/>
      <h1 className="header__title">{title}</h1>
      { !isLoggedIn &&
      <div className="header__buttons">
      {/* TODO: Link to /inscription */}
        <a className="header__elem header__elem--button">S'inscrire</a>
      {/* TODO: Link to /connexion */}
        <a className="header__elem">Se connecter</a>
      </div>
      }
      {
        isLoggedIn &&
        <div className="header__buttons">
        {/* TODO: Link to /profil */}
          <a className="header__elem header__elem--button">Mon profil</a>
        {/* TODO: onClick, toggle isLoggedIn to false + redirect to /home */}
          <a className="header__elem">Se déconnecter</a>
        </div>
      }

    </header>
  );
};

// == Export
export default Header;
