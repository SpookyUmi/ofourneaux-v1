import React from 'react';
import { connect } from 'react-redux';
import { NavLink, withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

import home from 'src/assets/icons/home.svg';
import arrow from 'src/assets/icons/up-arrow.svg';
import profile from 'src/assets/icons/profile.svg';
import list from 'src/assets/icons/list.svg';
import favorites from 'src/assets/icons/heart-full.svg';
import recipe from 'src/assets/icons/bookmark.svg';
import tag from 'src/assets/icons/tag.svg';
import users from 'src/assets/icons/users.svg';
import contact from 'src/assets/icons/contact.svg';
import about from 'src/assets/icons/about.svg';

import './styles.scss';

const Navbar = ({ isLogged, isAdmin, isOpen, setIsOpen, trackSearch, handleSearch }) => {

  return (
      <>
        {isOpen &&
        <div className="navbar">
          <div className="navbar__links__top">
          <img className="navbar__toggle__home__icon link__style" src={arrow} alt="icône flèche gauche"
            onClick={() => { setIsOpen(false) }}
              />
          <form onSubmit={handleSearch} className="navbar__searchform">
            <div className="navbar__searchform__icon">
              <FontAwesomeIcon icon={faSearch} />
            </div>
            <input
              type="text"
              placeholder="Recherche..."
              className="navbar__searchform__input"
              id="searchInputNavbar"
              onChange={trackSearch}
            />
          </form>
            <NavLink to="/" className="navbar__link__home link__style">
              <img className="navbar__link__icon" src={home} alt="icône accueil" />
              Accueil
            </NavLink>
            {/* TODO the following elements must only be displayed if the user is NOT logged in */}
            {!isLogged
            && (
            <>
              <NavLink to="/connexion" className="navbar__link__signin link__style">
                Se connecter
              </NavLink>
              <NavLink to="/insciption" className="navbar__link__signup button__style">
                S'inscrire
              </NavLink>
            </>
            )}
            {/* TODO the following elements must only be displayed if the user is logged in */}
            {isLogged
            && (
            <>
              <NavLink to="/profil/:slug" className="navbar__link__profile link__style">
                <img className="navbar__link__icon" src={profile} alt="icône profil" />
                Mon profil
              </NavLink>
              <NavLink to="/profil/liste-de-courses" className="navbar__link__list link__style">
                <img className="navbar__link__icon" src={list} alt="icône liste de courses" />
                Liste de courses
              </NavLink>
              <NavLink to="/profil/recettes-favorites" className="navbar__link__favorites link__style">
                <img className="navbar__link__icon" src={favorites} alt="icône favoris" />
                Recettes favoritesNavLink
              </NavLink>
            </>
            )}
            {/* TODO the following elements must only be displayed if the user is logged in AND ADMIN */}
            {isLogged && isAdmin
            && (
            <>
              <NavLink to="/profil" className="navbar__link__profile link__style">
                <img className="navbar__link__icon" src={profile} alt="icône profil" />
                Mon profil
              </NavLink>
              <NavLink to="/admin/ajout-recette" className="navbar__link__adminrecipes link__style">
                <img className="navbar__link__icon" src={recipe} alt="icône recettes" />
                Ajouter une recette
              </NavLink>
              <NavLink to="/admin/modification-recette" className="navbar__link__adminrecipes link__style">
                <img className="navbar__link__icon" src={recipe} alt="icône recettes" />
                Modifier/Supprimer une recette
              </NavLink>
              <NavLink to="/admin/gestion-labels" className="navbar__link__adminlabels link__style">
                <img className="navbar__link__icon" src={tag} alt="icône labels" />
                Gérer les labels
              </NavLink>
              <NavLink to="/admin/gestion-utilisateurs" className="navbar__link__adminusers link__style">
                <img className="navbar__link__icon" src={users} alt="icône utilisateurs" />
                Gérer les utilisateurs
              </NavLink>
            </>
            )}
        </div>
          {/* The following elements are displayed for all users */}
        <div className="navbar__links__bottom">
          <NavLink to="/contact" className="navbar__link__contact link__style">
            <img className="navbar__link__icon" src={contact} alt="icône contact" />
            Contact
          </NavLink>
          <NavLink to="/a-propos" className="navbar__link__about link__style">
            <img className="navbar__link__icon" src={about} alt="icône à propos" />
            A propos
          </NavLink>
        </div>
        </div>
        }
      </>
  )};

// ! temporarily commented to avoid errors in the console
// Navbar.propTypes = {
//   isLoggedIn: PropTypes.bool.isRequired,
//   isAdmin: PropTypes.bool.isRequired,
//   navBarIsOpen: PropTypes.bool.isRequired,
// };

const mapStateToProps = (state) => {
  return {
    isLogged: state.auth.isLogged,
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

let container = connect(mapStateToProps, mapDispatchToProps)(Navbar);

container = withRouter(container);

export default container;
