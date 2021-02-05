// YARN
import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

// import middlewares
import uploadImage from 'src/middlewares/firebase';

// icons
import heartFull from 'src/assets/icons/heart-full.svg';
import list from 'src/assets/icons/list.svg';

// components import
import Modal from './Modal';

// SCSS
import './styles.scss';

// component
const Profile = ({
  pictureUrl,
  lastName,
  firstName,
  email,
  status,
  message,
  getFavoritesRecipes,
  getShoppingList,
  trackLastName,
  trackFirstName,
  trackEmail,
  handleEditProfile,
  showModal,
  openModalConfirmDelete,
  toggleEatingPreference,
  tags,
  eatingPreferences,
  changeProfileImage,
}) => (
  <div className="profile">
    <h1 className="profile__title">Mon profil - {firstName}</h1>
    <div className="profile__wrapper">
      {/* TODO: access to the user's files to change/modify his profile picture
    (open a modal to allow him to choose?) */}
      <img className="profile__img" src={pictureUrl} alt="Icône de profil de l'utilisateur" />
      <div className="profile__content">
        <div className="profile__content__header">
          {/* TODO: check if the favorite recipes query works */}
          <section className="profile__content__header__section">
            <NavLink
              exact
              to="/profil/recettes-favorites"
              className="profile__content__header__link"
              onClick={getFavoritesRecipes}
            >
              <img className="profile__content__header__icon" src={heartFull} alt="Icône d'un coeur" />
            </NavLink>
            <p>Recettes favorites</p>
          </section>
          {/* TODO: check if the shopping list query works */}
          <section className="profile__content__header__section">
            <NavLink
              exact
              to="/profil/liste-de-courses"
              className="profile__content__header__link"
              onClick={getShoppingList}
            >
              <img className="profile__content__header__icon" src={list} alt="Icône d'une liste" />
            </NavLink>
            <p>Liste de courses</p>
          </section>
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
              <label className="profile__content__infos__label">Photo de Profil</label>
              <input
                className="profile__content__infos__field"
                type="file"
                onChange={changeProfileImage}
              />
            </div>
          </div>

          <div className="profile__content__block profile__content__constraints">
            <h3 className="profile__content__constraints__title">
              Mes exigences alimentaires
            </h3>
            <div className="profile__content__constraints__inputs">
              {
                tags.map((tag) => {
                  let checked = false;

                  eatingPreferences?.forEach((eatingPreference) => {
                    if (eatingPreference === tag.id) {
                      checked = true;
                    }
                  });

                  return (
                    <div
                      key={tag.id}
                      className="profile__content__constraints__input"
                    >
                      <input
                        id={tag.id}
                        className="profile__content__constraints__checkbox"
                        type="checkbox"
                        name={tag.name}
                        onChange={toggleEatingPreference}
                        checked={checked}
                      />
                      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                      <label
                        id={tag.id}
                        className="profile__content__constraints__label"
                        htmlFor={tag.id}
                      >
                        {tag.name}
                      </label>
                    </div>
                  );
                })
              }
            </div>
          </div>
        </div>

        <div className={message === 'L\'adresse mail est déjà utilisée' ? 'profile__content__message error-message' : 'profile__content__message'}>
          {message}
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
          <NavLink exact to="/admin/ajout-recette">
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

// PropTypes
Profile.propTypes = {
  pictureUrl: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  firstName: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  getFavoritesRecipes: PropTypes.func.isRequired,
  getShoppingList: PropTypes.func.isRequired,
  trackLastName: PropTypes.func.isRequired,
  trackFirstName: PropTypes.func.isRequired,
  trackEmail: PropTypes.func.isRequired,
  handleEditProfile: PropTypes.func.isRequired,
  showModal: PropTypes.bool.isRequired,
  openModalConfirmDelete: PropTypes.func.isRequired,
  toggleEatingPreference: PropTypes.func.isRequired,
  // eslint-disable-next-line react/require-default-props
  eatingPreferences: PropTypes.array,
  tags: PropTypes.array.isRequired,
  changeProfileImage: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  pictureUrl: state.user.pictureUrl,
  lastName: state.user.lastName,
  firstName: state.user.firstName,
  email: state.user.email,
  status: state.user.status,
  message: state.profile.message,
  showModal: state.profile.showModal,
  eatingPreferences: state.user.eatingPreferences,
  tags: state.app.tags,
  checked: state.profile.checked,
});

const mapDispatchToProps = (dispatch) => ({
  // sends the request to retrieve favorite recipes to the middleware "user.js"
  getFavoritesRecipes: () => {
    dispatch({
      type: 'COLLECT_FAVORITES_RECIPES',
    });
  },

  // sends the request to retrieve shopping list to the middleware "user.js"
  getShoppingList: () => {
    dispatch({
      type: 'COLLECT_SELECTED_RECIPES',
    });
  },

  // controlled fields
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
  changeProfileImage: async (event) => {
    const url = await uploadImage(event.target.files[0]);
    dispatch({
      type: 'CHANGE_PROFILE_PICTURE',
      payload: {
        pictureUrl: url,
      },
    });
  },

  // sends request to modify the profile to the middleware "profile.js"
  handleEditProfile: () => {
    dispatch({
      type: 'SEND_EDIT_PROFILE_REQUEST',
    });

    setTimeout(() => {
      dispatch({
        type: 'CLEAR_MESSAGE_PROFILE',
      });
    }, 3000);
  },

  // we dispatch the action of opening the modal
  // to confirm or cancel the deletion of the account
  openModalConfirmDelete: () => {
    dispatch({
      type: 'OPEN_MODAL',
    });
  },

  toggleEatingPreference: (event) => {
    // console.log(event.target.checked);
    // console.log(event.target.id);

    // impossible to use parseInt in dispatch
    // the id is therefore placed as an integer in a variable
    const idEatingPreference = parseInt(event.target.id, 10);

    // dispatch to the reducer "user.js"
    dispatch({
      type: 'UPDATE_EATING_PREFERENCES',
      payload: {
        id: idEatingPreference,
      },
    });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
