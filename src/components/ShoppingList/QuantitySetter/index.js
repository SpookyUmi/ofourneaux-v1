// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import '../styles.scss';

// == Composant
const QuantitySetter = ({ quantity, setQuantity }) => {
  return (
    <div className="quantity__setter__block">
      <img
        src=""
        alt="bouton réduire"
        onClick={() => {
          setQuantity(quantity - 1);
        }}
      />
        <p>{quantity}</p>
      <img
        src=""
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
