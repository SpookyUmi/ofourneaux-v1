import React from 'react';

import './styles.scss';

const Inscription = () => {
  return (
    <div className="inscription">
      <h1 className="inscription__title">
        Inscription
      </h1>
      <div className="inscription__content">
        <p className="inscription__content__text">Créez votre compte et accédez aux services de Ofourneaux (générateur de recettes, liste de courses, recettes, favorites, etc).</p>

        <div className="inscription__content__inputs">
          <div className="inscription__content__input">
            <label className="inscription__content__label">
              Nom
            </label>
            <input className="inscription__content__field" type="text" placeholder="Doe" />
          </div>
          <div className="inscription__content__input">
            <label className="inscription__content__label">
              Prénom
            </label>
            <input className="inscription__content__field" type="text" placeholder="John" />
          </div>
          <div className="inscription__content__input">
            <label className="inscription__content__label">
              Email
            </label>
            <input className="inscription__content__field" type="text" placeholder="Email" />
          </div>
          <div className="inscription__content__input">
            <label className="inscription__content__label">
              Mot de passe
            </label>
            <input className="inscription__content__field" type="text" placeholder="Mot de passe" />
          </div>
          <div className="inscription__content__input">
            <label className="inscription__content__label">
              Confirmation mot de passe
            </label>
            <input className="inscription__content__field" type="text" placeholder="Confirmation du mot de passe" />
          </div>
        </div>

        <div className="inscription__content__footer">
          <div className="inscription__content__footer__password">
            <p className="inscription__content__footer__password__text">Votre mot de passe doit remplir les critères suivants :</p>
            <ul className="inscription__content__footer__password__instructions">
              <li>8 caractères minimum</li>
              <li>1 chiffre</li>
              <li>1 minuscule</li>
              <li>1 majuscule</li>
              <li>1 caractère spécial (ex: ! @ # $)</li>
            </ul>
          </div>

          <button className="inscription__content__footer__button" type="button">Je m'inscris</button>
        </div>
      </div>
    </div>
  );
};

export default Inscription;
