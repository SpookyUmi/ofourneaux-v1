// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import '../styles.scss';

import QuantitySetter from '../QuantitySetter';

// == Composant
const GeneratedList = ({ quantity, setQuantity }) => {
  return (
    <div className="shopping__list">
      <section className="shopping__list__header">
        <img src="" alt="catégorie"/>
        <h3>Catégorie aliment</h3>
        <img src="" alt="flèche"/>
      </section>
      <section className="shopping__list__body">
        <form className="shopping__list__body__form">
          <label>
            <input type="checkbox" name="ingredient"/>
            Ingredient
          </label>
          <QuantitySetter quantity={quantity} setQuantity={setQuantity}/>
        </form>
        <form className="shopping__list__body__form">
          <label>
            <input type="checkbox" name="ingredient"/>
            Ingredient
          </label>
          <QuantitySetter quantity={quantity} setQuantity={setQuantity}/>
        </form>
      </section>
    </div>
  );
};

// == Export
export default GeneratedList;
