// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import '../styles.scss';

// == Composant
const GeneratedList = ({
  name, items, icon,
}) => (
  <div className="shopping__list" key={name}>
    <section className="shopping__list__header">
      <img src={icon} alt={name} />
      <h3>{name.replace(/-/g, ' ')}</h3>
    </section>
    <section className="shopping__list__body">
      {items.map((ingredient) => (
        <form className="shopping__list__body__form" key={ingredient.id}>
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label>
            <input
              type="checkbox"
              name={ingredient.name}
              className="shopping__list__body__form__input"
            />
            {ingredient.name}
          </label>
          <div className="shopping__list__body__form__quantity">
            <p><strong>{ingredient.quantity}</strong> {ingredient.unit}</p>
          </div>
        </form>
      ))}
    </section>
  </div>
);

GeneratedList.propTypes = {
  name: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    quantity: PropTypes.number,
    unit: PropTypes.string,
    category_id: PropTypes.number,
  })).isRequired,
};

export default GeneratedList;
