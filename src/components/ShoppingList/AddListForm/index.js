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
        <form className="shopping__list__body__form__addForm">
            <input type="text" name="item" placeholder="Lessive..."
              onChange={(event) => { setName(event.target.value) }}
            />
            <input type="number" name="quantity" placeholder="Quantité" className="shopping__list"
              onChange={(event) => { setQuantity(event.target.value) }}
            />
          <select name="unit" placeholder="Unité" defaultValue=""
            onChange={(event) => { setUnit(event.target.value) }}
          >
            <option disabled={true} value="">Unité</option>
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
