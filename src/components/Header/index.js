// == Import npm
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { NavLink, Redirect } from 'react-router-dom';

// == Import
import './styles.scss';

// == Composant
const Header = ({ title, isLogged }) => {
  return (
    <header className="header">
      <div className="header__container">
        {/* TODO: onSubmit, send a GET request (axios), and redirect to /recettes */}
        <input type="text" placeholder="Recherche..." className="header__container__elem header__container__elem--input desktop"/>
        <NavLink exact to="/">
          <h1 className="header__container__title">{title}</h1>
        </NavLink>
        { !isLogged &&
          <div className="header__container__buttons desktop">
        {/* TODO: Link to /inscription */}
          <NavLink exact to="/inscription" className="header__container__elem button__style">S'inscrire</NavLink>
        {/* TODO: Link to /connexion */}
          <NavLink exact to="/connexion" className="header__container__elem header__container__elem--signin">Se connecter</NavLink>
        </div>
        }
        {
          isLogged &&
          <div className="header__container__buttons desktop">
          {/* TODO: Link to /profil */}
            <NavLink exact to="/profil" className="header__container__elem button__style">Mon profil</NavLink>
          {/* TODO: onClick, toggle isLoggedIn to false + redirect to /home */}
            <NavLink to="/" className="header__container__elem">Se déconnecter</NavLink>
          </div>
        }
      </div>
    </header>
  );
};

Header.proptypes ={
  title: PropTypes.string.isRequired,
  isLogged: PropTypes.bool.isRequired,
}

const mapStateToProps = (state) => {
  return {
    isLogged: state.auth.isLogged,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {}
};

export default connect(mapStateToProps, null)(Header);
