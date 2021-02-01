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
  handleGeneratorLogged
  }) => {

  return (
    <div className="background__image">
      <div className="generator">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#bfe285" fillOpacity="1" d="M0,96L80,122.7C160,149,320,203,480,192C640,181,800,107,960,90.7C1120,75,1280,117,1360,138.7L1440,160L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path>
        </svg>
        <div className="generator__flexblock">
          <section className="generator__description">
            <h2 className="generator__title">Le Générateur</h2>
            <p className="generator__text">Un outil intelligent, qui tient compte de la saison, de vos exigences alimentaires et des 7 dernières recettes que vous avez sélectionnées. Affinez vous-même les critères de sélection du générateur grâce à son formulaire intégré.</p>
          </section>
          <section className="generator__section">
            {/* When property isClicked is false, the generator displays a logo */}
            {!isClicked &&
              <div className="generator--animation">
                <img src={pancakes}
                  className="generator__section__logo"
                  alt="logo de cadeau"
                  onClick={handleClickIn}
                />
                {/* <p className="generator__section__click">Click me</p> */}
              </div>
            }
            {/* When property isClicked is true (when somebody clicked on the logo),
            it displays a form.*/}
            {isClicked &&
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
                  <input type="number" name="nbRecipes" id="nbRecipes" min="0" max="20" placeholder="5"
                    onChange={trackGenNumber}
                  />
                  </label>
                  <label htmlFor="time">
                    Temps (min)
                  <input type="number" name="time" id="time" step="5" min="0" placeholder="35 min"
                    onChange={trackGenTime}
                  />
                  </label>
                </div>
                <label htmlFor="difficulty">
                  Difficulté
                </label>
                <select name="difficulty" id="difficulty" onChange={trackGenDifficulty} defaultValue="" placeholder>
                    <option value="">Indifférent</option>
                    <option value="easy">Facile</option>
                    <option value="average">Intermédiaire</option>
                    <option value="expert">Expérimenté</option>
                  </select>
                {/* {isLogged &&
                  <label>Recettes favorites uniquement
                    <input type="checkbox" name="favorites" onChange={trackGenFavorites} />
                  </label>
                } */}
                {/* TODO: onSubmit, send GET/POST? request with form info AND season + last recipes used. Then redirect to /recettes */}
                <button type="submit" onClick={
                  isLogged ? handleGeneratorLogged : handleGenerator
                }>Try me !</button>
              </form>
            }

          </section>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    isLogged: state.auth.isLogged,
    isClicked: state.app.isClicked
  }
};

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
    dispatch({
      type: 'EDIT_GEN_NUMBER',
      payload: {
        numberGen: event.target.value
      }
    })
  },

  trackGenTime: (event) => {
    event.preventDefault();
    dispatch({
      type: 'EDIT_GEN_TIME',
      payload: {
        timeGen: event.target.value
      }
    })
  },

  trackGenDifficulty: (event) => {
    event.preventDefault();
    let difficultyId;
    if (event.target.value === 'Facile') {
      return difficultyId = 1;
    } else if (event.target.value === 'Moyen') {
      return difficultyId = 2;
    } else if (event.target.value === 'Difficile') {
      return difficultyId = 3;
    }
    dispatch({
      type: 'EDIT_GEN_DIFFICULTY',
      payload: {
        diffGen: difficultyId
      }
    })
  },

  handleGenerator: (event) => {
    event.preventDefault();
    dispatch({
      type: 'SEND_GEN_REQUEST',
      redirect: ownProps.history.push
    });
  },

  handleGeneratorLogged: (event) => {
    event.preventDefault();
    dispatch({
      type: 'SEND_GEN_LOGGED_REQUEST',
      redirect: ownProps.history.push
    });
  },
});

let container = connect(mapStateToProps, mapDispatchToProps)(Generator);

container = withRouter(container);

export default container;
