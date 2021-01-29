// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'

// == Import
import '../styles.scss';

// == Composant
const QuantitySetter = ({ quantity, setQuantity }) => {
  return (
    <div className="quantity__setter__block">
      <FontAwesomeIcon icon={faMinus}
        alt="bouton réduire"
        onClick={() => {
          setQuantity(quantity - 1);
        }}
      />
        <p>{quantity}</p>
      <FontAwesomeIcon icon={faPlus}
        alt="bouton augmenter"
        onClick={() => {
          setQuantity(quantity + 1);
        }}
      />
    </div>
  );
};

// == Export
export default QuantitySetter;
