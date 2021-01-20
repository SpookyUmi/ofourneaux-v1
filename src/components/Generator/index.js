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
      <h2 className="generator__title">Le Générateur</h2>
      <section className="generator__section">
      {/* By default, the generator is filled with a surprise logo. When this logo is clicked, it displays a form. */}
      { !isClicked &&
          <img src={giftLogo}
            className="generator__section__elem"
            onClick={() => {
              setIsClicked(true);
            }}
          />
      }
      {
        isClicked &&
        <form>
            <label htmlFor="nbRecipes">Nombre de recettes :</label>
            <input type="number" id="nbRecipes" name="nbRecipes" max="20"/>
        <a type="submit">Try me !</a>
        </form>
      }

      </section>

    </div>
  );
};

// == Export
export default Generator;
