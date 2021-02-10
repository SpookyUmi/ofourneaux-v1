// YARN
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { NavLink, withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

// icons
import menu from 'src/assets/icons/nav.svg';

// SCSS
import './styles.scss';

// component
const Header = ({
  title,
  isLogged,
  handleDisconnect,
  trackSearch,
  handleSearch,
  setIsOpen,
  isOpen,
  search,
}) => (
  <header className="header">
    <div className="header__container">
      {/* TODO: onSubmit, send a GET request (axios), and redirect to /recettes */}
      {
        !isOpen
        && (
          <img
            className="header__container__menu__icon"
            src={menu}
            alt="icône menu"
            onClick={() => {
              setIsOpen(true);
            }}
          />
        )
      }
      {/* TODO: onSubmit, send a GET request (axios), and redirect to /recettes */}
      <form type="submit" onSubmit={handleSearch} className="header__container__searchform">
        <div className="header__container__searchform__icon">
          <FontAwesomeIcon icon={faSearch} />
        </div>
        <input
          type="text"
          placeholder="Recherche..."
          className="header__container__elem--input"
          id="searchInput"
          autoComplete="off"
          value={search}
          onChange={trackSearch}
        />
      </form>
      <NavLink exact to="/">
        <h1 className="header__container__title">{title}</h1>
      </NavLink>
      {
        !isLogged
        && (
          <div className="header__container__buttons desktop">
            <NavLink exact to="/inscription" className="header__container__elem button__style">S'inscrire</NavLink>
            <NavLink exact to="/connexion" className="header__container__elem header__container__elem--signin link__style">Se connecter</NavLink>
          </div>
        )
      }
      {
        isLogged
        && (
          <div className="header__container__buttons desktop">
            <NavLink exact to="/profil" className="header__container__elem button__style">Mon profil</NavLink>
            <NavLink to="/" className="header__container__elem header__container__elem--signout link__style" onClick={handleDisconnect}>Se déconnecter</NavLink>

          </div>
        )
      }
    </div>
  </header>
);

// PropTypes
Header.propTypes = {
  title: PropTypes.string.isRequired,
  isLogged: PropTypes.bool.isRequired,
  handleDisconnect: PropTypes.func.isRequired,
  trackSearch: PropTypes.func.isRequired,
  handleSearch: PropTypes.func.isRequired,
  setIsOpen: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  search: PropTypes.string.isRequired,
};

// eslint-disable-next-line no-unused-vars
const mapStateToProps = (state, ownProps) => ({
  title: state.app.title,
  isLogged: state.auth.isLogged,
  recipes: state.recipes.recipes,
  search: state.recipes.search,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  trackSearch: (event) => {
    // console.log('Input email :', event.target.value);
    dispatch({
      type: 'EDIT_SEARCH_FIELD',
      payload: {
        search: event.target.value,
      },
    });
  },

  handleSearch: (event) => {
    event.preventDefault();
    dispatch({
      type: 'SEND_SEARCH_REQUEST',
      redirect: ownProps.history.push,
    });
  },

  // when the user logs out, we dispatch the action
  handleDisconnect: () => {
    dispatch({
      type: 'LOGOUT_SUCCESS',
    });
  },
});

// eslint-disable-next-line import/no-mutable-exports
let container = connect(mapStateToProps, mapDispatchToProps)(Header);

container = withRouter(container);

export default container;
