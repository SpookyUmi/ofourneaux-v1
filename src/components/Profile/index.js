import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import profilePicture from 'src/assets/images/profile-picture.jpg';
import heartFull from 'src/assets/icons/heart-full.svg';
import list from 'src/assets/icons/list.svg';
import uploadImage from 'src/middlewares/firebase';

import Modal from './Modal';

import './styles.scss';

const imageUrl = async (e) => {
  const url = await uploadImage(e.target.files[0]);
  console.log('URl =>', url);
};

const Profile = ({
  lastName,
  firstName,
  email,
  status,
  getFavoritesRecipes,
  getShoppingList,
  trackLastName,
  trackFirstName,
  trackEmail,
  handleEditProfile,
  showModal,
  openModalConfirmDelete,
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
          <NavLink
            exact
            to="/recettes-favorites"
            onClick={getFavoritesRecipes}
          >
            <img className="profile__content__header__icon" src={heartFull} alt="Icône d'un coeur" />
          </NavLink>
          {/* TODO: function to query shopping list */}
          <NavLink
            exact
            to="/liste-de-courses"
            onClick={getShoppingList}
          >
            <img className="profile__content__header__icon" src={list} alt="Icône d'une liste" />
          </NavLink>
        </div>

        <div className="profile__content__infos">
          <div className="profile__content__block profile__content__infos__inputs">
            <div className="profile__content__infos__input">
              {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
              <label className="profile__content__infos__label">Nom</label>
              <input
                className="profile__content__infos__field"
                type="text"
                placeholder="Doe"
                value={lastName}
                onChange={trackLastName}
              />
            </div>
            <div className="profile__content__infos__input">
              {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
              <label className="profile__content__infos__label">Prénom</label>
              <input
                className="profile__content__infos__field"
                type="text"
                placeholder="John"
                value={firstName}
                onChange={trackFirstName}
              />
            </div>
            <div className="profile__content__infos__input">
              {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
              <label className="profile__content__infos__label">Email</label>
              <input
                className="profile__content__infos__field"
                type="text"
                placeholder="johndoe@yahoo.fr"
                value={email}
                onChange={trackEmail}
              />
            </div>
            <div className="profile__content__infos__input">
              {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
              <label className="profile__content__infos__label">Photo de profil</label>
              <input
                className="profile__content__infos__field"
                type="file"
                onChange={imageUrl}
              />
            </div>
          </div>

          <div className="profile__content__block profile__content__constraints">
            <h3 className="profile__content__constraints__title">
              Mes contraintes alimentaires
            </h3>
            <div className="profile__content__constraints__inputs">
              <div className="profile__content__constraints__input">
                <input className="profile__content__constraints__checkbox" type="checkbox" id="vegetalien" name="vegetalien" />
                {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                <label className="profile__content__constraints__label" htmlFor="vegetalien">Végétalien</label>
              </div>
              <div className="profile__content__constraints__input">
                <input className="profile__content__constraints__checkbox" type="checkbox" id="vegetarien" name="vegetarien" />
                {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                <label className="profile__content__constraints__label" htmlFor="vegetarien">Végétarien</label>
              </div>
              <div className="profile__content__constraints__input">
                <input className="profile__content__constraints__checkbox" type="checkbox" id="no-gluten" name="no-gluten" />
                {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                <label className="profile__content__constraints__label" htmlFor="no-gluten">Sans gluten</label>
              </div>
              <div className="profile__content__constraints__input">
                <input className="profile__content__constraints__checkbox" type="checkbox" id="no-lactose" name="no-lactose" />
                {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                <label className="profile__content__constraints__label" htmlFor="no-lactose">Sans lactose</label>
              </div>
            </div>
          </div>
        </div>

        <div className="profile__content__buttons">
          <button
            type="button"
            className="profile__content__button"
            onClick={handleEditProfile}
          >
            Modifier
          </button>
          {
            status === 'admin'
            && (
            <NavLink exact to="/admin/ajout-recettes">
              <button type="button" className="profile__content__button">
                Espace administrateur
              </button>
            </NavLink>
            )
          }
        </div>

        <p className="profile__content__text">
          Pour la suppression de votre compte, veuillez cliquer
          <span
            className="profile__content__text--underline"
            onClick={openModalConfirmDelete}
          >
            ici
          </span>.
        </p>
      </div>
    </div>
    {/* when the user tries to delete his account
    a modal asking him to confirm his choix is opened */}
    {showModal && <Modal />}
  </div>
);

Profile.propTypes = {
  lastName: PropTypes.string.isRequired,
  firstName: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  getFavoritesRecipes: PropTypes.func.isRequired,
  getShoppingList: PropTypes.func.isRequired,
  trackLastName: PropTypes.func.isRequired,
  trackFirstName: PropTypes.func.isRequired,
  trackEmail: PropTypes.func.isRequired,
  handleEditProfile: PropTypes.func.isRequired,
  showModal: PropTypes.bool.isRequired,
  openModalConfirmDelete: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  lastName: state.user.lastName,
  firstName: state.user.firstName,
  email: state.user.email,
  status: state.user.status,
  showModal: state.profile.showModal,
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

  trackLastName: (event) => {
    dispatch({
      type: 'EDIT_FIELD_PROFILE_LAST_NAME',
      payload: {
        lastName: event.target.value,
      },
    });
  },

  trackFirstName: (event) => {
    dispatch({
      type: 'EDIT_FIELD_PROFILE_FIRST_NAME',
      payload: {
        firstName: event.target.value,
      },
    });
  },

  trackEmail: (event) => {
    dispatch({
      type: 'EDIT_FIELD_PROFILE_EMAIL',
      payload: {
        email: event.target.value,
      },
    });
  },

  handleEditProfile: () => {
    dispatch({
      type: 'SEND_EDIT_PROFILE_REQUEST',
    });
  },

  openModalConfirmDelete: () => {
    dispatch({
      type: 'OPEN_MODAL',
    });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
