import React from 'react';
import PropTypes from 'prop-types';

import profilePicture from 'src/assets/images/profile-picture.jpg';
import heartFull from 'src/assets/icons/heart-full.svg';
import list from 'src/assets/icons/list.svg';

import './styles.scss';

const Profile = () => {
  return (
    <div className="profile">
      <h1 className="profile__title">Mon profil</h1>
      <div className="profile__wrapper">
        <img className="profile__img" src={profilePicture} />
        <div className="profile__content">

          <div className="profile__content__header">
            {/* TODO: lien vers les recettes préférées */}
            <a>
              <img className="profile__content__header__icon" src={heartFull} />
            </a>
            {/* TODO: lien vers la liste de courses */}
            <a>
              <img className="profile__content__header__icon" src={list} />
            </a>
          </div>

          <div className="profile__content__infos">
            <div className="profile__content__infos__inputs">
              <div className="profile__content__infos__input">
                <label className="profile__content__infos__label">Nom</label>
                <input className="profile__content__infos__field" type="text" placeholder="Doe" />
              </div>
              <div className="profile__content__infos__input">
                <label className="profile__content__infos__label">Prénom</label>
                <input className="profile__content__infos__field" type="text" placeholder="John" />
              </div>
              <div className="profile__content__infos__input">
                <label className="profile__content__infos__label">Email</label>
                <input className="profile__content__infos__field" type="text" placeholder="johndoe@yahoo.fr" />
              </div>
            </div>

            <div className="profile__content__constraints">
              <h2 className="profile__content__constraints__title">
                Mes contraintes alimentaires
              </h2>
              <div className="profile__content__constraints__inputs">
                <div className="profile__content__constraints__input">
                  <input className="profile__content__constraints__checkbox" type="checkbox" id="vegetalien" name="vegetalien"/>
                  <label className="profile__content__constraints__label" htmlFor="vegetalien">Végétalien</label>
                </div>
                <div className="profile__content__constraints__input">
                  <input className="profile__content__constraints__checkbox" type="checkbox" id="vegetarien" name="vegetarien"/>
                  <label className="profile__content__constraints__label" htmlFor="vegetarien">Végétarien</label>
                </div>
                <div className="profile__content__constraints__input">
                  <input className="profile__content__constraints__checkbox" type="checkbox" id="no-gluten" name="no-gluten"/>
                  <label className="profile__content__constraints__label" htmlFor="no-gluten">Sans gluten</label>
                </div>
                <div className="profile__content__constraints__input">
                  <input className="profile__content__constraints__checkbox" type="checkbox" id="no-lactose" name="no-lactose"/>
                  <label className="profile__content__constraints__label" htmlFor="no-lactose">Sans lactose</label>
                </div>
              </div>
            </div>
          </div>

          <div className="profile__content__buttons">
            <button className="profile__content__button">Modifier</button>
            {/* TODO: to be displayed only when the user is an administrator */}
            <button className="profile__content__button">Espace administrateur</button>
          </div>

          <p className="profile__content__text">Pour la suppression de votre compte, veuillez cliquer <a className="profile__content__text--underline" href="">ici</a>.</p>
        </div>
      </div>      
    </div>
  );
};

Profile.propTypes = {

};

export default Profile;
