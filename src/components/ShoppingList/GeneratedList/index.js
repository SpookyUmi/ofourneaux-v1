// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import '../styles.scss';

import QuantitySetter from '../QuantitySetter';
import categories from 'src/data/categories';

// == Composant
const GeneratedList = ({ setQuantity }) => {
  return (
    <>
    {categories.map((category) => (
      <div className="shopping__list" key={category.id}>
        <section className="shopping__list__header">
          <img src="" alt={category.name}/>
          <h3>{category.label}</h3>
          <img src="" alt="flèche"/>
        </section>
        <section className="shopping__list__body">
        {category.items.map((ingredient) => (
          <form className="shopping__list__body__form" key={ingredient.id}>
            <label>
              <input type="checkbox" name="ingredient" />
              {ingredient.name}
            </label>
            <div className="shopping__list__body__form__quantity">
              <QuantitySetter quantity={ingredient.quantity} setQuantity={setQuantity} />
              <p>{ingredient.unit}</p>
            </div>
          </form>
        ))}
        </section>
      </div>
    ))}
    </>
  );

};

// == Export
export default GeneratedList;
