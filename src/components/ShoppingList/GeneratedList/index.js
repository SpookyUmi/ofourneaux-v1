// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import '../styles.scss';

//import QuantitySetter from '../QuantitySetter';

// == Composant
const GeneratedList = ({ id, value, label, items }) => {
  return (
      <div className="shopping__list" key={id}>
        <section className="shopping__list__header">
          <img src="" alt={value}/>
          <h3>{label}</h3>
          <img src="" alt="flèche"/>
        </section>
        <section className="shopping__list__body">
        {items.map((ingredient) => (
          <form className="shopping__list__body__form" key={ingredient.id}>
            <label>
              <input type="checkbox" name="ingredient" />
              {ingredient.name}
            </label>
            <div className="shopping__list__body__form__quantity">
              <p>{ingredient.quantity} {ingredient.unit}</p>
            </div>
          </form>
        ))}
        </section>
      </div>

  );

};

// == Export
export default GeneratedList;
