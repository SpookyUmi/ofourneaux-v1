// == Import npm
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

// == Import
import arrow from 'src/assets/icons/up-arrow.svg';
import pancakes from 'src/assets/images/pancakes.png';
import './styles.scss';

// == Composant
//! In this container, we will use "gen" in our actions, functions and Redux payload as a shortcut for "generator".
const Generator = ({
  isClicked,
  isLogged,
  handleClickIn,
  handleClickOut,
  trackGenNumber,
  trackGenTime,
  trackGenDifficulty,
  handleGenerator,
  handleGeneratorLogged,
  trackGenFavorites,
}) => (
  <div className="background__image">
    <div className="generator">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#bfe285" fillOpacity="1" d="M0,96L80,122.7C160,149,320,203,480,192C640,181,800,107,960,90.7C1120,75,1280,117,1360,138.7L1440,160L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z" />
      </svg>
      <div className="generator__flexblock">
        <section className="generator__description">
          <h2 className="generator__title">Le Générateur</h2>
          <p className="generator__text">Un outil intelligent, qui tient compte de la saison, de vos exigences alimentaires et des 7 dernières recettes que vous avez sélectionnées. Affinez vous-même les critères de sélection du générateur grâce à son formulaire intégré.</p>
        </section>
        <section className="generator__section">
          {/* When property isClicked is false, the generator displays a logo */}
          {!isClicked
              && (
              <div className="generator--animation">
                <img
                  src={pancakes}
                  className="generator__section__logo"
                  alt="logo de cadeau"
                  onClick={handleClickIn}
                />
                {/* <p className="generator__section__click">Click me</p> */}
              </div>
              )}
          {/* When property isClicked is true (when somebody clicked on the logo),
            it displays a form. */}
          {isClicked
              && (
              <form className="generator__form">
                <img
                  src={arrow}
                  alt="logo de flèche"
                  className="generator__section__arrow link__style"
                  onClick={handleClickOut}
                />
                <div className="generator__form__section">
                  <label htmlFor="nbRecipes">
                    Recettes
                    <input
                      type="number"
                      name="nbRecipes"
                      id="nbRecipes"
                      min="1"
                      max="20"
                      placeholder="2"
                      onChange={trackGenNumber}
                    />
                  </label>
                  <label htmlFor="time">
                    Temps max
                    <input
                      type="number"
                      name="time"
                      id="time"
                      step="5"
                      min="0"
                      placeholder="35 min"
                      defaultValue=""
                      onChange={trackGenTime}
                    />
                  </label>
                </div>
                {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                <label htmlFor="difficulty">
                  Difficulté
                </label>
                <select name="difficulty" id="difficulty" onChange={trackGenDifficulty}>
                  <option value="">Indifférent</option>
                  <option value="easy">Facile</option>
                  <option value="average">Moyen</option>
                  <option value="expert">Difficile</option>
                </select>
                {isLogged
                  && (
                  // eslint-disable-next-line jsx-a11y/label-has-associated-control
                  <label className="generator__form__section__favorites">
                    Recettes favorites uniquement
                    <input type="checkbox" name="favorites" onChange={trackGenFavorites} />
                  </label>
                  )}
                <button
                  type="submit"
                  onClick={
                  isLogged ? handleGeneratorLogged : handleGenerator
                }
                >Try me !
                </button>
              </form>
              )}
        </section>
      </div>
    </div>
  </div>
);

Generator.propTypes = {
  isClicked: PropTypes.bool.isRequired,
  isLogged: PropTypes.bool.isRequired,
  handleClickIn: PropTypes.func.isRequired,
  handleClickOut: PropTypes.func.isRequired,
  trackGenNumber: PropTypes.func.isRequired,
  trackGenTime: PropTypes.func.isRequired,
  trackGenDifficulty: PropTypes.func.isRequired,
  handleGenerator: PropTypes.func.isRequired,
  handleGeneratorLogged: PropTypes.func.isRequired,
  trackGenFavorites: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  isLogged: state.auth.isLogged,
  isClicked: state.app.isClicked,
});

const mapDispatchToProps = (dispatch, ownProps) => ({

  handleClickIn: (event) => {
    event.preventDefault();
    dispatch({
      type: 'CLICK_IN',
    });
  },

  handleClickOut: (event) => {
    event.preventDefault();
    dispatch({
      type: 'CLICK_OUT',
    });
  },

  trackGenNumber: (event) => {
    event.preventDefault();
    let number;
    if (event.target.value) {
      number = event.target.value;
    }
    else {
      number = 1;
    }
    dispatch({
      type: 'EDIT_GEN_NUMBER',
      payload: {
        numberGen: number,
      },
    });
  },

  trackGenTime: (event) => {
    event.preventDefault();
    let time;
    if (event.target.value) {
      time = event.target.value;
    }
    else {
      time = event.target.defaultValue;
    }
    dispatch({
      type: 'EDIT_GEN_TIME',
      payload: {
        timeGen: time,
      },
    });
  },

  trackGenDifficulty: (event) => {
    event.preventDefault();
    let difficultyId;
    if (event.target.value === 'easy') {
      difficultyId = 1;
    }
    else if (event.target.value === 'average') {
      difficultyId = 2;
    }
    else if (event.target.value === 'expert') {
      difficultyId = 3;
    }
    else {
      difficultyId = '';
    }
    dispatch({
      type: 'EDIT_GEN_DIFFICULTY',
      payload: {
        diffGen: difficultyId,
      },
    });
  },

  trackGenFavorites: (event) => {
    console.log(event.target.checked);
    dispatch({
      type: 'EDIT_GEN_FAVORITES',
      payload: {
        favGen: event.target.checked,
      },
    });
  },

  handleGenerator: (event) => {
    event.preventDefault();
    dispatch({
      type: 'SEND_GEN_REQUEST',
      redirect: ownProps.history.push,
    });
    dispatch({
      type: 'CLICK_OUT',
    });
  },

  handleGeneratorLogged: (event) => {
    event.preventDefault();
    dispatch({
      type: 'SEND_GEN_LOGGED_REQUEST',
      redirect: ownProps.history.push,
    });
    dispatch({
      type: 'CLICK_OUT',
    });
  },
});

// eslint-disable-next-line import/no-mutable-exports
let container = connect(mapStateToProps, mapDispatchToProps)(Generator);

container = withRouter(container);

export default container;
