import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import './styles.scss';

const Inscription = ({
  lastName,
  firstName,
  email,
  password,
  confirmPassword,
  errorMessage,
  trackFirstName,
  trackLastName,
  trackEmail,
  trackPassword,
  trackConfirmPassword,
  handleSubscription
}) => (
  <div className="inscription">
    <h1 className="inscription__title">
      Inscription
    </h1>
    <div className="inscription__content">
      <div className="inscription__content__text">Créez votre compte et accédez aux services de Ofourneaux (générateur de recettes, liste de courses, recettes, favorites, etc).</div>

      <form
        action=""
        method="POST"
        className="inscription__content__form"
        onSubmit={handleSubscription}
      >
        {errorMessage}
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
              value={lastName}
              onChange={trackLastName}
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
              value={firstName}
              onChange={trackFirstName}
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
              value={email}
              onChange={trackEmail}
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
              value={password}
              onChange={trackPassword}
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
              value={confirmPassword}
              onChange={trackConfirmPassword}
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

Inscription.propTypes = {
  lastName: PropTypes.string.isRequired,
  firstName: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  confirmPassword: PropTypes.string.isRequired,
  errorMessage: PropTypes.string.isRequired,
  trackLastName: PropTypes.func.isRequired,
  trackFirstName: PropTypes.func.isRequired,
  trackEmail: PropTypes.func.isRequired,
  trackPassword: PropTypes.func.isRequired,
  trackConfirmPassword: PropTypes.func.isRequired,
  handleSubscription: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  lastName: state.signIn.lastName,
  firstName: state.signIn.firstName,
  email: state.signIn.email,
  password: state.signIn.password,
  confirmPassword: state.signIn.confirmPassword,
  errorMessage: state.signIn.errorMessage,
});

const mapDispatchToProps = (dispatch) => ({
  trackLastName: (event) => {
    dispatch({
      type: 'EDIT_FIELD_LAST_NAME',
      payload: {
        lastName: event.target.value,
      },
    });
  },

  trackFirstName: (event) => {
    dispatch({
      type: 'EDIT_FIELD_FIRST_NAME',
      payload: {
        firstName: event.target.value,
      },
    });
  },

  trackEmail: (event) => {
    dispatch({
      type: 'EDIT_FIELD_EMAIL',
      payload: {
        email: event.target.value,
      },
    });
  },

  trackPassword: (event) => {
    dispatch({
      type: 'EDIT_FIELD_PASSWORD',
      payload: {
        password: event.target.value,
      },
    });
  },

  trackConfirmPassword: (event) => {
    dispatch({
      type: 'EDIT_FIELD_CONFIRM_PASSWORD',
      payload: {
        confirmPassword: event.target.value,
      },
    });
  },

  handleSubscription: (event) => {
    event.preventDefault();
    dispatch({
      type: 'SEND_SUBSCRIPTION_REQUEST',
    });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Inscription);
