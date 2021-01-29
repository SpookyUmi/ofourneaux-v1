// == Import npm
import React, { useState } from 'react';
import PropTypes from 'prop-types';

// == Import
import '../styles.scss';

import AddListForm from '../AddListForm';
import QuantitySetter from '../QuantitySetter';

// == Composant
const CustomList = ({ quantity, setQuantity, name, setUserCategories, isClicked, setIsClicked }) => {

  const [userItems, setUserItems] = useState([]);

  return (
    <div className="shopping__list">
      <section className="shopping__list__header">
        <img src="" alt="catégorie" />
        <h3>{name}</h3>
        <img src="" alt="flèche" />
      </section>
      <section className="shopping__list__body">
      {userItems.map((item) => (
        <form key={item.name} className="shopping__list__body__form">
          <label>
            <input type="checkbox" name="ingredient" />
            {item.name}
          </label>
          <QuantitySetter key={item.name} quantity={item.quantity} setQuantity={setQuantity} />
        </form>
      ))}
        <AddListForm isClicked={isClicked} setIsClicked={setIsClicked} setUserItems={setUserItems} userItems={userItems} />
      </section>
    </div>
  );
};

// == Export
export default CustomList;
