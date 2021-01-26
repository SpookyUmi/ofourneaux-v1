import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import './styles.scss';

const Header = ({ title, isLogged, handleDisconnect }) => (
  <header className="header">
    <div className="header__container">
      {/* TODO: onSubmit, send a GET request (axios), and redirect to /recettes */}
      <input type="text" placeholder="Recherche..." className="header__container__elem header__container__elem--input desktop"/>
      <NavLink exact to="/">
        <h1 className="header__container__title">{title}</h1>
      </NavLink>
      {
        !isLogged
        && (
          <div className="header__container__buttons desktop">
            <NavLink exact to="/inscription" className="header__container__elem button__style">S'inscrire</NavLink>
            <NavLink exact to="/connexion" className="header__container__elem header__container__elem--signin">Se connecter</NavLink>
          </div>
        )
      }
      {
        isLogged
        && (
          <div className="header__container__buttons desktop">
            <NavLink exact to="/profil" className="header__container__elem button__style">Mon profil</NavLink>
            <NavLink to="/" className="header__container__elem" onClick={handleDisconnect}>Se déconnecter</NavLink>
          </div>
        )
      }
    </div>
  </header>
);

Header.propTypes = {
  title: PropTypes.string.isRequired,
  isLogged: PropTypes.bool.isRequired,
  handleDisconnect: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  isLogged: state.auth.isLogged,
});

const mapDispatchToProps = (dispatch) => ({
  handleDisconnect: () => {
    dispatch({
      type: 'LOGOUT_SUCCESS',
    });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
