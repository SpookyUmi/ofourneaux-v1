import React from 'react';
import PropTypes from 'prop-types';

const Profile = () => {
  return (
    <div className="profile">
      <h1 className="profile__title">Mon profil</h1>
      <div className="profile__wrapper">
        <img className="profile__img" src="" />
        <div className="profile__content">

          <div className="profile__content__header">
            {/* TODO: lien vers les recettes préférées */}
            <a>
              <img className="profile__content__header__icon" src="" />
            </a>
            {/* TODO: lien vers la liste de courses */}
            <a>
              <img className="profile__content__header__icon" src="" />
            </a>
          </div>

          <div className="profile__content__infos">
            <div className="profile__content__infos__inputs">
              <div className="profile__content__infos__input">
                <label>Nom</label>
                <input type="text" placeholder="Doe" />
              </div>
              <div className="profile__content__infos__input">
                <label>Prénom</label>
                <input type="text" placeholder="John" />
              </div>
              <div className="profile__content__infos__input">
                <label>Email</label>
                <input type="text" placeholder="johndoe@yahoo.fr" />
              </div>
            </div>
          </div>

          <div className="profile__content__constraints">
            <h2 className="profil__content__constraints__title">
              Mes contraintes alimentaires
            </h2>
            <div className="profil__content__constraints__inputs">
              <div className="profil__content__constraints__input">
                <input className="" type="checkbox" />
                <label>Végétalien</label>
              </div>
              <div className="profil__content__constraints__input">
                <input className="" type="checkbox" />
                <label>Végétarien</label>
              </div>
              <div className="profil__content__constraints__input">
                <input className="" type="checkbox" />
                <label>Sans gluten</label>
              </div>
              <div className="profil__content__constraints__input">
                <input className="" type="checkbox" />
                <label>Sans lactose</label>
              </div>
            </div>
          </div>
        </div>
      </div>      
    </div>
  );
};

export default Profile;
