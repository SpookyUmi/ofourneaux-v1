// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import '../styles.scss';

import QuantitySetter from '../QuantitySetter';

// == Composant
const CustomList = ({ quantity, setQuantity }) => {
  return (
    <div className="shopping__list">
      <section className="shopping__list__header">
        <img src="" alt="catégorie" />
        <h3>Catégorie aliment</h3>
        <img src="" alt="flèche" />
      </section>
      <section className="shopping__list__body">
        <form className="shopping__list__body__form">
          <label>
            <input type="checkbox" name="ingredient" />
            Ingredient
          </label>
          <QuantitySetter quantity={quantity} setQuantity={setQuantity} />
        </form>
        <form className="shopping__list__body__form">
          <label>
            <input type="checkbox" name="ingredient" />
            Ingredient
          </label>
          <QuantitySetter quantity={quantity} setQuantity={setQuantity} />
        </form>
        <form className="shopping__list__body__form">
          <label>
            <input type="text" name="ingredient" placeholder="Aliment..."/>
          </label>
          <label>
            <input type="number" name="ingredient" placeholder="200" className="shopping__list"/>
          </label>
          <select name="unit">
            <option value="no unit"></option>
            <option value="grams">g</option>
            <option value="cL">cL</option>
            <option value="mL">mL</option>
            <option value="cup">cup</option>
          </select>
        </form>
      </section>
    </div>
  );
};

// == Export
export default CustomList;
