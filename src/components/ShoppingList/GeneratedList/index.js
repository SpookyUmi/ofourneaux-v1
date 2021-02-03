// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import '../styles.scss';

// == Composant
const GeneratedList = ({ id, value, label, ingredients }) => {
  return (
      <div className="shopping__list" key={id}>
        <section className="shopping__list__header">
          <img src="" alt={value}/>
          <h3>{label}</h3>
          <img src="" alt="flèche"/>
        </section>
        <section className="shopping__list__body">
        {ingredients.map((ingredient) => (
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

GeneratedList.propTypes = {
  id: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
  ingredients: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    quantity: PropTypes.number,
    unit: PropTypes.string,
  })).isRequired,
};


// == Export
export default GeneratedList;
