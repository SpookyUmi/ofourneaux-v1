import React from 'react';

import './styles.scss';

const Inscription = () => {
  return (
    <div className="inscription">
      <h1 className="inscription__title">
        Inscription
      </h1>
      <div className="inscription__content">
        <p className="inscription__content__text">Créez votre compte et accédez aux services de Ofourneaux (générateur de recettes, liste de courses, recettes, favorites, ...)</p>

        <div className="inscription__content__inputs">
          <div className="inscription__content__input">
            <label className="inscription__content__input__label">
              Nom
            </label>
            <input className="inscription__content__input__field" type="text" placeholder="Doe" />
          </div>
          <div className="inscription__content__input">
            <label className="inscription__content__input__label">
              Prénom
            </label>
            <input className="inscription__content__input__field" type="text" placeholder="John" />
          </div>
          <div className="inscription__content__input">
            <label className="inscription__content__input__label">
              Email
            </label>
            <input className="inscription__content__input__field" type="text" placeholder="Email" />
          </div>
          <div className="inscription__content__input">
            <label className="inscription__content__input__label">
              Mot de passe
            </label>
            <input className="inscription__content__input__field" type="text" placeholder="Mot de passe" />
          </div>
          <div className="inscription__content__input">
            <label className="inscription__content__input__label">
              Confirmation mot de passe
            </label>
            <input className="inscription__content__input__field" type="text" placeholder="Confirmation du mot de passe" />
          </div>
        </div>

        <p className="inscription__content__text">Votre mot de passe doit remplir les critères suivants :</p>
        <ul>
          <li>8 caractères minimum</li>
          <li>1 chiffre</li>
          <li>1 minuscule</li>
          <li>1 majuscule</li>
          <li>1 caractère spécial (ex: ! @ # $)</li>
        </ul>

        <button className="inscription__content__button" type="button">Je m'inscris</button>
      </div>
    </div>
  );
};

export default Inscription;
