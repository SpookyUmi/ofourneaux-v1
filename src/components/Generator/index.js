// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import giftLogo from 'src/assets/images/surprise.svg';
import './styles.scss';

// == Composant
const Generator = ({ isClicked, setIsClicked, isLoggedIn }) => {

  return (
    <div className="generator">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#bfe285" fillOpacity="1" d="M0,96L80,122.7C160,149,320,203,480,192C640,181,800,107,960,90.7C1120,75,1280,117,1360,138.7L1440,160L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path>
      </svg>
      <h2 className="generator__title">Le Générateur</h2>
      <section className="generator__section">
        {/* When property isClicked is false, the generator displays a logo */}
        {!isClicked &&
          <>
            <img src={giftLogo}
              className="generator__section__logo"
              onClick={() => {
                setIsClicked(true);
              }}
            />
            <p className="generator__section__click">Click me</p>
          </>
        }
        {/* When property isClicked is true (when somebody clicked on the logo),
        it displays a form.
      */}
        {
          isClicked &&
          <form className="generator__form">
            <label htmlFor="nbRecipes">
              Nombre de recettes
            </label>
            <input type="number" name="nbRecipes" id="nbRecipes" min="0" max="20" />
            <label htmlFor="time">
              Temps
            </label>
            <input type="number" name="time" id="time" step="5" min="0" />
            <label htmlFor="difficulty">
              Difficulté
            </label>
            <select name="difficulty" id="difficulty">
                <option value="easy">Facile</option>
                <option value="average">Moyen</option>
                <option value="expert">Expérimenté</option>
            </select>
            {isLoggedIn &&
              <label>
                Recettes favorites uniquement
                <input type="checkbox" name="favourites" />
              </label>
            }
            {/* TODO: onSubmit, send GET/POST? request with form info AND season + last recipes used. Then redirect to /recettes */}
            <button type="submit">Try me !</button>
          </form>
        }

      </section>

    </div>
  );
};

// == Export
export default Generator;
