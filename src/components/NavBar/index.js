import React from 'react';
import PropTypes from 'prop-types';

import setToggleClassname from 'src/utils/setToggleClassname';

// import './navbar.scss';

const Navbar = ({ isLoggedIn, isAdmin, navBarIsOpen }) => (
  <div className="navbar">
    {/* The following elements are displayed for all users */}
    {/* TODO onClick button => navBarIsOpen */}
    <button className="navbar__toggle" type="button">
      {/* Here I want to display a "menu icon" if my navbar is closed
       and a "back arrow icon" when the navbar is opened,
       I will use the function setToggleClassname defined in src/utils */}
      <span className={`navbar__toggle__icon ${setToggleClassname(navBarIsOpen)}`} />
    </button>
    <input
      className="navbar__search"
      placeholder="Cake aux olives"
    />
    <a className="navbar__link__home" href="/accueil">
      <img className="navbar__link__home__icon" href="#" alt="icône accueil" />
      Accueil
    </a>
    {/* TODO the following elements must only be displayed if the user is NOT logged in */}
    {isLoggedIn === false
    && (
    <>
      <a className="navbar__link__signin" href="/connexion">
        Se connecter
      </a>
      <a className="navbar__link__signup" href="/insciption">
        S'inscrire
      </a>
    </>
    )}
    {/* TODO the following elements must only be displayed if the user is logged in */}
    {isLoggedIn === true
    && (
    <>
      <a className="navbar__link__profile" href="/profil/:slug">
        <img className="navbar__link__profile__icon" href="#" alt="icône profil" />
        Mon profil
      </a>
      <a className="navbar__link__list" href="/profil/liste-de-courses">
        <img className="navbar__link__list__icon" href="#" alt="icône liste de courses" />
        Liste de courses
      </a>
      <a className="navbar__link__favorites" href="/profil/recettes-favorites">
        <img className="navbar__link__favorites__icon" href="#" alt="icône favoris" />
        Recettes favorites
      </a>
    </>
    )}
    {/* TODO the following elements must only be displayed if the user is logged in AND ADMIN */}
    {isLoggedIn === true && isAdmin === true
    && (
    <>
      <a className="navbar__link__profile" href="/profil/:slug">
        <img className="navbar__link__profile__icon" href="#" alt="icône profil" />
        Mon profil
      </a>
      <a className="navbar__link__adminrecipes" href="/admin/ajout-recettes">
        <img className="navbar__link__adminrecipes__icon" href="#" alt="icône recettes" />
        Ajouter une recette
      </a>
      <a className="navbar__link__adminrecipes" href="/admin/modification-recettes">
        <img className="navbar__link__adminrecipes__icon" href="#" alt="icône recettes" />
        Modifier/Supprimer une recette
      </a>
      <a className="navbar__link__adminlabels" href="/admin/gestion-labels">
        <img className="navbar__link__adminlabels__icon" href="#" alt="icône labels" />
        Gérer les labels
      </a>
      <a className="navbar__link__adminusers" href="/admin/gestion-utilisateurs">
        <img className="navbar__link__adminusers__icon" href="#" alt="icône utilisateurs" />
        Gérer les utilisateurs
      </a>
    </>
    )}
    {/* The following elements are displayed for all users */}
    <a className="navbar__link__contact" href="/contact">
      <img className="navbar__link__contact__icon" href="#" alt="icône contact" />
      Contact
    </a>
    <a className="navbar__link__about" href="/a-propos">
      <img className="navbar__link__about__icon" href="#" alt="icône à propos" />
      A propos
    </a>
  </div>
);

Navbar.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  isAdmin: PropTypes.bool.isRequired,
  navBarIsOpen: PropTypes.bool.isRequired,
};

export default Navbar;
