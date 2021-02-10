// YARN
import React from 'react';
import { connect } from 'react-redux';
import { NavLink, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

// SCSS
import './styles.scss';

// component
const Connection = ({
  email,
  password,
  errorMessage,
  trackEmail,
  trackPassword,
  handleLogin,
}) => (
  <div className="connection">
    <h2 className="connection__title">Connexion</h2>
    <div className="connection__content">
      <form
        className="connection__content__form"
        action=""
        method="POST"
        onSubmit={handleLogin}
      >

        <div className="connection__error-message error-message">
          {errorMessage}
        </div>

        <div className="connection__content__form__input">
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label className="connection__content__form__label" htmlFor="email">
            Email
          </label>
          <input
            className="connection__content__form__field"
            type="text"
            id="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={trackEmail}
            autoComplete="off"
          />
        </div>
        <div className="connection__content__form__input">
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label className="connection__content__form__label" htmlFor="password">
            Mot de passe
          </label>
          <input
            className="connection__content__form__field"
            type="password"
            id="password"
            name="password"
            placeholder="Mot de passe"
            value={password}
            onChange={trackPassword}
            autoComplete="off"
          />
          {/* TODO: link to the forgotten password page */}
          <a href="">
            <div className="connection__content__text connection__content__text--forgotten-password">Mot de passe oublié ?</div>
          </a>
        </div>
        <input className="connection__content__button button__style" type="submit" value="Connexion" />
      </form>
      <div className="connection__content__inscription">
        <p className="connection__content__inscription__text">
          Pas encore de compte ?
        </p>
        <NavLink to="/inscription">
          <button className="connection__content__button" type="button">
            Inscription
          </button>
        </NavLink>
      </div>
    </div>
  </div>
);

// PropTypes
Connection.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  errorMessage: PropTypes.string.isRequired,
  trackEmail: PropTypes.func.isRequired,
  trackPassword: PropTypes.func.isRequired,
  handleLogin: PropTypes.func.isRequired,
};

// eslint-disable-next-line no-unused-vars
const mapStateToProps = (state, ownProps) => ({
  email: state.auth.email,
  password: state.auth.password,
  errorMessage: state.auth.errorMessage,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  // controlled fields by the reducer "auth.js"
  trackEmail: (event) => {
    dispatch({
      type: 'EDIT_FIELD_AUTH_EMAIL',
      payload: {
        email: event.target.value,
      },
    });
  },
  trackPassword: (event) => {
    dispatch({
      type: 'EDIT_FIELD_AUTH_PASSWORD',
      payload: {
        password: event.target.value,
      },
    });
  },

  // sends connection request to the middleware "auth.js"
  handleLogin: (event) => {
    event.preventDefault();
    dispatch({
      type: 'SEND_LOGIN_REQUEST',
      redirect: ownProps.history.push,
    });
  },
});

// eslint-disable-next-line import/no-mutable-exports
let container = connect(mapStateToProps, mapDispatchToProps)(Connection);

container = withRouter(container);

export default container;
