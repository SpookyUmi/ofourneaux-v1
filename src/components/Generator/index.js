// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import giftLogo from 'src/assets/images/surprise.svg';
import './styles.scss';

// == Composant
const Generator = () => {

  return (
    <div className="generator">
      <h2 className="generator__title">Le Générateur</h2>
      <section className="generator__section">
        <img src={giftLogo} className="generator__section__elem" />
        <button>Try me !</button>
      </section>

    </div>
  );
};

// == Export
export default Generator;
