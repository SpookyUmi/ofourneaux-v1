// YARN
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// SCSS
import './styles.scss';

// component
const Instructions = ({ steps }) => (
  <div className="recipe__instructions">
    <h2 className="recipe__instructions__title">
      Instructions
    </h2>
    <div className="recipe__instructions__steps">
      {steps.map((step, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <div key={index} className="recipe__instructions__step">
          <div className="recipe__instructions__step__nb">
            {index + 1}.
          </div>
          <div className="recipe__instructions__step__text">
            {step}
          </div>
        </div>
      ))}
    </div>
  </div>
);

// PropTypes
Instructions.propTypes = {
  steps: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default connect(null, null)(Instructions);
