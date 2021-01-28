import React, { useState } from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import PropTypes from 'prop-types';

import home from 'src/assets/icons/home.svg';
import menu from 'src/assets/icons/nav.svg';
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

const Navbar = ({ isLogged, isAdmin }) => {

  const [isOpen, setIsOpen] = useState(false);

  return (
  <div className="navbar">
    {/* The following elements are displayed for all users */}
    {/* TODO onClick button => navBarIsOpen */}
      {/* Here I want to display a "menu icon" if my navbar is closed
        and a "back arrow icon" when the navbar is opened,
       I will use the function setToggleClassname defined in src/utils */}
        {!isOpen &&
          <img className="navbar__toggle__home__icon" src={menu} alt="icône menu"
            onClick={() => { setIsOpen(true) }}
          />
        }
        {isOpen &&
          <img className="navbar__toggle__home__icon" src={arrow} alt="icône flèche gauche"
        onClick={() => { setIsOpen(false) }}
          />
        }
    {/* <input
      className="navbar__search"
      placeholder="Cake aux olives"
    /> */}
    <form type="submit" className="header__container__searchform">
      <div className="header__container__searchform__icon">
        <FontAwesomeIcon icon={faSearch} />
      </div>
      <input
        type="text"
        placeholder="Recherche..."
        className="header__container__elem--input"
        id="searchInput"
      />
    </form>
    <a className="navbar__link__home" href="/">
      <img className="navbar__link__home__icon" src={home} alt="icône accueil" />
      Accueil
    </a>
    {/* TODO the following elements must only be displayed if the user is NOT logged in */}
    {!isLogged
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
    {isLogged
    && (
    <>
      <a className="navbar__link__profile" href="/profil/:slug">
        <img className="navbar__link__profile__icon" href={profile} alt="icône profil" />
        Mon profil
      </a>
      <a className="navbar__link__list" href="/profil/liste-de-courses">
        <img className="navbar__link__list__icon" href={list} alt="icône liste de courses" />
        Liste de courses
      </a>
      <a className="navbar__link__favorites" href="/profil/recettes-favorites">
        <img className="navbar__link__favorites__icon" href={favorites} alt="icône favoris" />
        Recettes favorites
      </a>
    </>
    )}
    {/* TODO the following elements must only be displayed if the user is logged in AND ADMIN */}
    {isLogged && isAdmin
    && (
    <>
      <a className="navbar__link__profile" href="/profil/:slug">
        <img className="navbar__link__profile__icon" href={profile} alt="icône profil" />
        Mon profil
      </a>
      <a className="navbar__link__adminrecipes" href="/admin/ajout-recette">
        <img className="navbar__link__adminrecipes__icon" href={recipe} alt="icône recettes" />
        Ajouter une recette
      </a>
      <a className="navbar__link__adminrecipes" href="/admin/modification-recette">
        <img className="navbar__link__adminrecipes__icon" href={recipe} alt="icône recettes" />
        Modifier/Supprimer une recette
      </a>
      <a className="navbar__link__adminlabels" href="/admin/gestion-labels">
        <img className="navbar__link__adminlabels__icon" href={tag} alt="icône labels" />
        Gérer les labels
      </a>
      <a className="navbar__link__adminusers" href="/admin/gestion-utilisateurs">
        <img className="navbar__link__adminusers__icon" href={users} alt="icône utilisateurs" />
        Gérer les utilisateurs
      </a>
    </>
    )}
    {/* The following elements are displayed for all users */}
    <a className="navbar__link__contact" href="/contact">
      <img className="navbar__link__contact__icon" src={contact} alt="icône contact" />
      Contact
    </a>
    <a className="navbar__link__about" href="/a-propos">
      <img className="navbar__link__about__icon" src={about} alt="icône à propos" />
      A propos
    </a>
  </div>
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

const mapDispatchToProps = (dispatch) => {
  return {}
};

export default connect(mapStateToProps, null)(Navbar);
