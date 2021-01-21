// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import './styles.scss';

// == Composant
const Header = ({ title, isLoggedIn }) => {

  return (
    <header className="header">
      <div className="header__container">
        {/* TODO: onSubmit, send a GET request (axios), and redirect to /recettes */}
        <input type="text" placeholder="Recherche..." className="header__container__elem header__container__elem--input"/>
        <h1 className="header__container__title">{title}</h1>
        { !isLoggedIn &&
        <div className="header__container__buttons">
        {/* TODO: Link to /inscription */}
          <a className="header__container__elem header__container__elem--button">S'inscrire</a>
        {/* TODO: Link to /connexion */}
          <a className="header__container__elem">Se connecter</a>
        </div>
        }
        {
          isLoggedIn &&
          <div className="header__container__buttons">
          {/* TODO: Link to /profil */}
            <a className="header__container__elem header__container__elem--button">Mon profil</a>
          {/* TODO: onClick, toggle isLoggedIn to false + redirect to /home */}
            <a className="header__container__elem">Se déconnecter</a>
          </div>
        }
      </div>
    </header>
  );
};

// == Export
export default Header;
