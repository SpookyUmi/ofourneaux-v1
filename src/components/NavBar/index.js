// YARN
import React, { useRef } from 'react';
import { connect } from 'react-redux';
import { NavLink, withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

// icons
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

// SCSS
import './styles.scss';

// component
const Navbar = ({
  isLogged,
  status,
  isOpen,
  setIsOpen,
  trackSearch,
  handleSearch,
  handleDisconnect,
  getFavoritesRecipes,
  getSelectedRecipes,
  search,
}) => {
  const node = useRef();
  const handleClick = (event) => {
    if (node.current.contains(event.target)) {
      return;
    } setIsOpen(false);
  };
  document.addEventListener('mousedown', handleClick);

  return (
    <div className={`navbar ${isOpen ? 'show__navbar' : ''}`} ref={node}>
      {isOpen
        && (
        <>
          <div className="navbar__links__top">
            <div className="icon__style toggle__icon__container">
              <img
                className="navbar__toggle__home__icon link__style transition"
                src={arrow}
                alt="icône flèche gauche"
                onClick={() => {
                  setIsOpen(false);
                }}
              />
            </div>
            <form onSubmit={handleSearch} className="navbar__searchform transition">
              <div className="navbar__searchform__icon transition">
                <FontAwesomeIcon icon={faSearch} />
              </div>
              <input
                type="text"
                placeholder="Recherche..."
                className="navbar__searchform__input transition"
                id="searchInputNavbar"
                value={search}
                onChange={trackSearch}
              />
            </form>
            <NavLink
              to="/"
              className="navbar__link__home link__style transition"
              onClick={() => {
                setIsOpen(false);
              }}
            >
              <div className="icon__style">
                <img className="navbar__link__icon" src={home} alt="icône accueil" />
              </div>
              Accueil
            </NavLink>

            {/* The following elements must only be displayed if the user is NOT logged in */}
            {
            !isLogged
            && (
              <>
                <NavLink
                  to="/connexion"
                  className="navbar__link__signin link__style transition"
                  onClick={() => {
                    setIsOpen(false);
                  }}
                >
                  Se connecter
                </NavLink>
                <NavLink
                  to="/inscription"
                  className="navbar__link__signup button__style transition"
                  onClick={() => {
                    setIsOpen(false);
                  }}
                >
                  S'inscrire
                </NavLink>
              </>
            )
          }
            {/* The following elements must only be displayed if the user is logged in */}
            {
          isLogged && status === 'user'
            && (
              <>
                <NavLink
                  to="/profil"
                  className="navbar__link__profile transition"
                  onClick={() => {
                    setIsOpen(false);
                  }}
                >
                  <div className="icon__style">
                    <img className="navbar__link__icon" src={profile} alt="icône profil" />
                  </div>
                  Mon profil
                </NavLink>
                <NavLink
                  to="/profil/liste-de-courses"
                  className="navbar__link__list link__style transition"
                  onClick={getSelectedRecipes}
                >
                  <div className="icon__style">
                    <img className="navbar__link__icon" src={list} alt="icône liste de courses" />
                  </div>
                  Liste de courses
                </NavLink>
                <NavLink
                  to="/profil/recettes-favorites"
                  className="navbar__link__favorites link__style transition"
                  onClick={getFavoritesRecipes}
                >
                  <div className="icon__style favorites__icon">
                    <img className="navbar__link__icon" src={favorites} alt="icône favoris" />
                  </div>
                  Recettes favorites
                </NavLink>
                <NavLink
                  to="/"
                  className="navbar__link__logout link__style transition"
                  onClick={handleDisconnect}
                >
                  Se déconnecter
                </NavLink>
              </>
            )
          }
            {/* The following elements must only be displayed if the user is logged in AND ADMIN */}
            {isLogged && status === 'admin'
          && (
          <>
            <NavLink
              to="/profil"
              className="navbar__link__profile link__style transition"
              onClick={() => {
                setIsOpen(false);
              }}
            >
              <div className="icon__style">
                <img className="navbar__link__icon" src={profile} alt="icône profil" />
              </div>
              Mon profil
            </NavLink>
            <NavLink
              to="/admin/ajout-recette"
              className="navbar__link__adminrecipes link__style transition"
              onClick={() => {
                setIsOpen(false);
              }}
            >
              <div className="icon__style">
                <img className="navbar__link__icon" src={recipe} alt="icône recettes" />
              </div>
              Ajouter une recette
            </NavLink>
            <NavLink
              to="/admin/gestion-labels"
              className="navbar__link__adminlabels link__style transition"
              onClick={() => {
                setIsOpen(false);
              }}
            >
              <div className="icon__style">
                <img className="navbar__link__icon" src={tag} alt="icône labels" />
              </div>
              Gérer les labels
            </NavLink>
            <NavLink
              to="/admin/gestion-utilisateurs"
              className="navbar__link__adminusers link__style transition"
              onClick={() => {
                setIsOpen(false);
              }}
            >
              <div className="icon__style">
                <img className="navbar__link__icon" src={users} alt="icône utilisateurs" />
              </div>
              Gérer les utilisateurs
            </NavLink>
            <NavLink
              to="/"
              className="navbar__link__logout link__style transition"
              onClick={handleDisconnect}
            >
              Se déconnecter
            </NavLink>
          </>
          )}
          </div>

          {/* The following elements are displayed for all users */}

          <div className="navbar__links__bottom">
            <NavLink
              to="/contact"
              className="navbar__link__contact link__style transition"
              onClick={() => {
                setIsOpen(false);
              }}
            >
              <div className="icon__style">
                <img className="navbar__link__icon" src={contact} alt="icône contact" />
              </div>
              Contact
            </NavLink>
            <NavLink
              to="/a-propos"
              className="navbar__link__about link__style transition"
              onClick={() => {
                setIsOpen(false);
              }}
            >
              <div className="icon__style">
                <img className="navbar__link__icon" src={about} alt="icône à propos" />
              </div>
              A propos
            </NavLink>
          </div>
        </>
        )}
    </div>
  );
};

Navbar.propTypes = {
  isLogged: PropTypes.bool.isRequired,
  status: PropTypes.string.isRequired,
  search: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  setIsOpen: PropTypes.func.isRequired,
  trackSearch: PropTypes.func.isRequired,
  handleSearch: PropTypes.func.isRequired,
  handleDisconnect: PropTypes.func.isRequired,
  getFavoritesRecipes: PropTypes.func.isRequired,
  getSelectedRecipes: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  isLogged: state.auth.isLogged,
  status: state.user.status,
  search: state.recipes.search,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  trackSearch: (event) => {
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

  // sends the request to retrieve favorite recipes to the middleware "profile.js"
  getFavoritesRecipes: () => {
    dispatch({
      type: 'COLLECT_FAVORITES_RECIPES',
    });
  },

  getSelectedRecipes: () => {
    dispatch({
      type: 'COLLECT_SELECTED_RECIPES',
    });
  },
});

{ /* eslint-disable-next-line import/no-mutable-exports */ }
let container = connect(mapStateToProps, mapDispatchToProps)(Navbar);

container = withRouter(container);

export default container;
