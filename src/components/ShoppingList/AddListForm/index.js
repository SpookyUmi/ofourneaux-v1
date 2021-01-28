// == Import npm
import React, { useState } from 'react';
import PropTypes from 'prop-types';

// == Import
import '../styles.scss';

// == Composant
const AddListForm = ({ isClicked, setIsClicked, setUserItems, userItems }) => {

  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState(0);
  const [unit, setUnit] = useState('');

  return (
    <div className="shopping__list">
        {/* <button type="button" onClick>Ajouter un item</button> */}
      <section className="shopping__list__body">
        <form className="shopping__list__body__form">
          <label>
            <input type="text" name="item" placeholder="Liquide vaisselle..."
              onChange={(event) => { setName(event.target.value) }}
            />
          </label>
          <label>
            <input type="number" name="quantity" placeholder="quantité" className="shopping__list"
              onChange={(event) => { setQuantity(event.target.value) }}
            />
          </label>
          <select name="unit" placeholder="unité"
            onChange={(event) => { setUnit(event.target.value) }}
          >
            <option value="no unit"></option>
            <option value="grams">g</option>
            <option value="cL">cL</option>
            <option value="mL">mL</option>
            <option value="mL">càs</option>
            <option value="mL">càc</option>
            <option value="cup">cup</option>
          </select>
          <input
            type="submit"
            className="button__style"
            value="ajouter un item"
            onClick={(event) => {
              event.preventDefault();
              setUserItems([
                ...userItems,
                {
                  name: name,
                  quantity: quantity,
                  unit: unit
                }
              ])
            }}
          />
        </form>
      </section>

    </div>
  );
};

// == Export
export default AddListForm;
