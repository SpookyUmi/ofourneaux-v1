// == Import npm
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { NavLink, withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

// == Import
import './styles.scss';

// == Composant
const Header = ({ title, isLogged, trackSearch, handleSearch, recipes }) => {
  return (
    <header className="header">
      <div className="header__container">
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
            onChange={trackSearch}
          />
        </form>
        <NavLink exact to="/">
          <h1 className="header__container__title">{title}</h1>
        </NavLink>
        { !isLogged &&
          <div className="header__container__buttons desktop">
        {/* TODO: Link to /inscription */}
          <NavLink exact to="/inscription" className="header__container__elem button__style">S'inscrire</NavLink>
        {/* TODO: Link to /connexion */}
          <NavLink exact to="/connexion" className="header__container__elem header__container__elem--signin link__style">Se connecter</NavLink>
        </div>
        }
        {
          isLogged &&
          <div className="header__container__buttons desktop">
          {/* TODO: Link to /profil */}
            <NavLink exact to="/profil" className="header__container__elem button__style">Mon profil</NavLink>
          {/* TODO: onClick, toggle isLoggedIn to false + redirect to /home */}
            <NavLink to="/" className="header__container__elem link__style">Se déconnecter</NavLink>
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

const mapStateToProps = (state, ownProps) => {
  return {
    title: state.app.title,
    isLogged: state.auth.isLogged,
    recipes: state.recipes.recipes,
  }
};

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
      redirect: ownProps.history.push
    });
  }
});

let container = connect(mapStateToProps, mapDispatchToProps)(Header);

container = withRouter(container);

export default container;
