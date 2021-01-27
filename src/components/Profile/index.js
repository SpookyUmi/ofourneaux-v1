import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import profilePicture from 'src/assets/images/profile-picture.jpg';
import heartFull from 'src/assets/icons/heart-full.svg';
import list from 'src/assets/icons/list.svg';

import './styles.scss';

const Profile = ({
  lastName,
  firstName,
  email,
  status,
  getFavoritesRecipes,
  getShoppingList,
}) => (
  <div className="profile">
    <h1 className="profile__title">Mon profil</h1>
    <div className="profile__wrapper">
      {/* TODO: access to the user's files to change/modify his profile picture
      (open a modal to allow him to choose?) */}
      <img className="profile__img" src={profilePicture} alt="Icône de profil de l'utilisateur" />
      <div className="profile__content">

        <div className="profile__content__header">
          {/* TODO: function to query favorite recipes */}
          <NavLink exact to="/recettes-favorites" onClick={getFavoritesRecipes}>
            <img className="profile__content__header__icon" src={heartFull} alt="Icône d'un coeur" />
          </NavLink>
          {/* TODO: function to query shopping list */}
          <NavLink exact to="/liste-de-courses" onClick={getShoppingList}>
            <img className="profile__content__header__icon" src={list} alt="Icône d'une liste" />
          </NavLink>
        </div>

        <div className="profile__content__infos">
          <div className="profile__content__block profile__content__infos__inputs">
            <div className="profile__content__infos__input">
              <label className="profile__content__infos__label">Nom</label>
              <input className="profile__content__infos__field" type="text" placeholder="Doe" value={lastName} />
            </div>
            <div className="profile__content__infos__input">
              <label className="profile__content__infos__label">Prénom</label>
              <input className="profile__content__infos__field" type="text" placeholder="John" value={firstName} />
            </div>
            <div className="profile__content__infos__input">
              <label className="profile__content__infos__label">Email</label>
              <input className="profile__content__infos__field" type="text" placeholder="johndoe@yahoo.fr" value={email} />
            </div>
          </div>

          <div className="profile__content__block profile__content__constraints">
            <h3 className="profile__content__constraints__title">
              Mes contraintes alimentaires
            </h3>
            <div className="profile__content__constraints__inputs">
              <div className="profile__content__constraints__input">
                <input className="profile__content__constraints__checkbox" type="checkbox" id="vegetalien" name="vegetalien" />
                <label className="profile__content__constraints__label" htmlFor="vegetalien">Végétalien</label>
              </div>
              <div className="profile__content__constraints__input">
                <input className="profile__content__constraints__checkbox" type="checkbox" id="vegetarien" name="vegetarien" />
                <label className="profile__content__constraints__label" htmlFor="vegetarien">Végétarien</label>
              </div>
              <div className="profile__content__constraints__input">
                <input className="profile__content__constraints__checkbox" type="checkbox" id="no-gluten" name="no-gluten" />
                <label className="profile__content__constraints__label" htmlFor="no-gluten">Sans gluten</label>
              </div>
              <div className="profile__content__constraints__input">
                <input className="profile__content__constraints__checkbox" type="checkbox" id="no-lactose" name="no-lactose" />
                <label className="profile__content__constraints__label" htmlFor="no-lactose">Sans lactose</label>
              </div>
            </div>
          </div>
        </div>

        <div className="profile__content__buttons">
          <button type="button" className="profile__content__button">Modifier</button>
          {
            status === 'admin'
            && (
            <button type="button" className="profile__content__button">
              Espace administrateur
            </button>
            )
          }
        </div>

        <p className="profile__content__text">Pour la suppression de votre compte, veuillez cliquer
          {/* TODO: link to the deletion account page */}
          <a className="profile__content__text--underline" href="">ici</a>.
        </p>
      </div>
    </div>
  </div>
);

Profile.propTypes = {
  lastName: PropTypes.string.isRequired,
  firstName: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  getFavoritesRecipes: PropTypes.func.isRequired,
  getShoppingList: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  lastName: state.user.lastName,
  firstName: state.user.firstName,
  email: state.user.email,
  status: state.user.status,
});

const mapDispatchToProps = (dispatch) => ({
  getFavoritesRecipes: () => {
    dispatch({
      type: 'SEND_FAVORITES_RECIPES_REQUEST',
    });
  },
  getShoppingList: () => {
    dispatch({
      type: 'SEND_SHOPPING_LIST_REQUEST',
    });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
