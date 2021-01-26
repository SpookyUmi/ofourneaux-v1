import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import './styles.scss';

const Connection = ({
  email, password, isLogged, trackEmail, trackPassword, handleLogin,
}) => (
  <div className="connection">
    <h2 className="connection__title">Connexion</h2>
    {isLogged && (<p className="connection__message"> Vous êtes connecté ! </p>)}
    <div className="connection__content">
      <form
        className="connection__content__form"
        action=""
        method="POST"
        onSubmit={handleLogin}
      >
        <div className="connection__content__form__input">
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
          />
        </div>
        <div className="connection__content__form__input">
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
          />
          {/* TODO: link to the forgotten password page */}
          <a href="">
            <div className="connection__content__text connection__content__text--forgotten-password">Mot de passe oublié ?</div>
          </a>
        </div>
        <input className="connection__content__button" type="submit" value="Connexion" />
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

Connection.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  isLogged: PropTypes.bool.isRequired,
  trackEmail: PropTypes.func.isRequired,
  trackPassword: PropTypes.func.isRequired,
  handleLogin: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  email: state.auth.email,
  password: state.auth.password,
  isLogged: state.auth.isLogged,
});

const mapDispatchToProps = (dispatch) => ({
  trackEmail: (event) => {
    // console.log('Input email :', event.target.value);
    dispatch({
      type: 'EDIT_FIELD_EMAIL',
      payload: {
        email: event.target.value,
      },
    });
  },

  trackPassword: (event) => {
    // console.log('Input password :', event.target.value);
    dispatch({
      type: 'EDIT_FIELD_PASSWORD',
      payload: {
        password: event.target.value,
      },
    });
  },

  handleLogin: (event) => {
    event.preventDefault();
    dispatch({
      type: 'SEND_LOGIN_REQUEST',
    });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Connection);
