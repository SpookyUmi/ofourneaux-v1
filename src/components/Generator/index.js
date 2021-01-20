// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import './styles.scss';

// == Composant
const Generator = () => {

  return (
    <div className="generator">
      <h2 className="generator__title">Le Générateur</h2>
      <section className="generator__section">
        <div className="generator__section__elem"></div>
        <button>Try me !</button>
      </section>

    </div>
  );
};

// == Export
export default Generator;
