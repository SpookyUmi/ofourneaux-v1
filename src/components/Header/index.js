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
        <input type="text" placeholder="Recherche..." className="header__container__elem header__container__elem--input desktop"/>
        <h1 className="header__container__title">{title}</h1>
        { !isLoggedIn &&
          <div className="header__container__buttons desktop">
        {/* TODO: Link to /inscription */}
          <a className="header__container__elem button__style">S'inscrire</a>
        {/* TODO: Link to /connexion */}
          <a className="header__container__elem header__container__elem--signin">Se connecter</a>
        </div>
        }
        {
          isLoggedIn &&
          <div className="header__container__buttons desktop">
          {/* TODO: Link to /profil */}
            <a className="header__container__elem button__style">Mon profil</a>
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
