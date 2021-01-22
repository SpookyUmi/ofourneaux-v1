import React from 'react';

import './styles.scss';

const Inscription = () => {
  return (
    <div className="inscription">
      <h1 className="inscription__title">
        Inscription
      </h1>
      <div className="inscription__content">
        <div className="inscription__content__text">Créez votre compte et accédez aux services de Ofourneaux (générateur de recettes, liste de courses, recettes, favorites, etc).</div>

        <form action="" method="POST" className="inscription__content__form">
          <div className="inscription__content__inputs">
            <div className="inscription__content__input">
              <label 
                className="inscription__content__label" 
                htmlFor="last-name"
              >
                Nom
              </label>
              <input 
                className="inscription__content__field" 
                type="text" 
                id="last-name" 
                name="last-name" 
                placeholder="Doe" 
                required 
              />
            </div>
            <div className="inscription__content__input">
              <label 
                className="inscription__content__label" 
                htmlFor="first-name"
              >
                Prénom
              </label>
              <input 
                className="inscription__content__field" 
                type="text" 
                id="first-name" 
                name="first-name" 
                placeholder="John" 
                required 
              />
            </div>
            <div className="inscription__content__input">
              <label 
                className="inscription__content__label" 
                htmlFor="email"
              >
                Email
              </label>
              <input 
                className="inscription__content__field" 
                type="text" 
                id="email" 
                name="email" 
                placeholder="Email" 
                required 
              />
            </div>
            <div className="inscription__content__input">
              <label 
                className="inscription__content__label" 
                htmlFor="password"
              >
                Mot de passe
              </label>
              <input 
                className="inscription__content__field" 
                type="password" 
                id="password" 
                name="password" 
                placeholder="Mot de passe" 
                minlenght="8" 
                required 
              />
            </div>
            <div className="inscription__content__input">
              <label 
                className="inscription__content__label" 
                htmlFor="password-confirm"
              >
                Confirmation mot de passe
              </label>
              <input 
                className="inscription__content__field" 
                type="password" 
                id="password-confirm" 
                name="password-confirm" 
                placeholder="Confirmation du mot de passe" 
                minlenght="8" 
                required 
              />
            </div>
          </div>

          <div className="inscription__content__footer">
            <div className="inscription__content__footer__password">
              <div className="inscription__content__footer__password__text">Votre mot de passe doit remplir les critères suivants :</div>
              <ul className="inscription__content__footer__password__instructions">
                <li>8 caractères minimum</li>
                <li>1 chiffre</li>
                <li>1 minuscule</li>
                <li>1 majuscule</li>
                <li>1 caractère spécial (ex: ! @ # $)</li>
              </ul>
            </div>

            <input className="inscription__content__footer__button" type="submit" value="Je m'inscris" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Inscription;
