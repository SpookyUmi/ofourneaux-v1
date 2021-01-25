import React from 'react';

import './styles.scss';

const Connection = () => (
  <div className="connection">
    <h1 className="connection__title">Connexion</h1>
    <div className="connection__content">
      <form className="connection__content__form" action="" method="POST">
        <div className="connection__content__form__input">
          <label className="connection__content__form__label" htmlFor="email">
            Email
          </label>
          <input className="connection__content__form__field" type="text" id="email" name="email" placeholder="Email" />
        </div>
        <div className="connection__content__form__input">
          <label className="connection__content__form__label" htmlFor="password">
            Mot de passe
          </label>
          <input className="connection__content__form__field" type="password" id="password" name="password" placeholder="Mot de passe"/>
          {/* TODO: link to the forgotten password page */}
          <a href="">
            <div className="connection__content__text connection__content__text--forgotten-password">Mot de passe oublié ?</div>
          </a>
        </div>
        <input className="connection__content__button" type="submit" value="Connexion"/>
      </form>
      <div className="connection__content__inscription">
        <p className="connection__content__inscription__text">
          Pas encore de compte ?
        </p>
        {/* TODO: link to the subscribe page */}
        <a href="">
          <button className="connection__content__button" type="button">
            Inscription
          </button>
        </a>
      </div>
    </div>
  </div>
);
