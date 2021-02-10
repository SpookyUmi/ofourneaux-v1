// YARN
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

// SCSS
import './styles.scss';

// component
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
  handleSubscription,
}) => (
  <div className="inscription">
    <h1 className="inscription__title">
      Inscription
    </h1>
    <div className="inscription__content">
      <div className="inscription__content__text">Créez votre compte et accédez aux services de O'fourneaux (générateur de recettes, liste de courses, recettes, favorites, etc).</div>
      <form
        action=""
        method="POST"
        className="inscription__content__form"
        onSubmit={handleSubscription}
      >

        <div className="connection__error-message error-message">
          {errorMessage}
        </div>

        <div className="inscription__content__inputs">
          <div className="inscription__content__input">
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
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
              autoComplete="off"
            />
          </div>
          <div className="inscription__content__input">
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
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
              autoComplete="off"
            />
          </div>
          <div className="inscription__content__input">
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
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
              autoComplete="off"
            />
          </div>
          <div className="inscription__content__input">
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
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
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
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

          <input className="inscription__content__footer__button button__style" type="submit" value="Je m'inscris" />
        </div>
      </form>
    </div>
  </div>
);

// PropTypes
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

// eslint-disable-next-line no-unused-vars
const mapStateToProps = (state, ownProps) => ({
  lastName: state.signUp.lastName,
  firstName: state.signUp.firstName,
  email: state.signUp.email,
  password: state.signUp.password,
  confirmPassword: state.signUp.confirmPassword,
  errorMessage: state.signUp.errorMessage,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  // controlled fields
  trackLastName: (event) => {
    dispatch({
      type: 'EDIT_FIELD_SIGN_UP_LAST_NAME',
      payload: {
        lastName: event.target.value,
      },
    });
  },
  trackFirstName: (event) => {
    dispatch({
      type: 'EDIT_FIELD_SIGN_UP_FIRST_NAME',
      payload: {
        firstName: event.target.value,
      },
    });
  },
  trackEmail: (event) => {
    dispatch({
      type: 'EDIT_FIELD_SIGN_UP_EMAIL',
      payload: {
        email: event.target.value,
      },
    });
  },
  trackPassword: (event) => {
    dispatch({
      type: 'EDIT_FIELD_SIGN_UP_PASSWORD',
      payload: {
        password: event.target.value,
      },
    });
  },
  trackConfirmPassword: (event) => {
    dispatch({
      type: 'EDIT_FIELD_SIGN_UP_CONFIRM_PASSWORD',
      payload: {
        confirmPassword: event.target.value,
      },
    });
  },

  // sends registration request to the middleware "signUp.js"
  handleSubscription: (event) => {
    event.preventDefault();
    dispatch({
      type: 'SEND_SUBSCRIPTION_REQUEST',
      redirect: ownProps.history.push,
    });
  },
});

// eslint-disable-next-line import/no-mutable-exports
let container = connect(mapStateToProps, mapDispatchToProps)(Inscription);

container = withRouter(container);

export default container;
