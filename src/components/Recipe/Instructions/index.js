import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import './styles.scss';

// TODO: use the length of the table or the index for the steps instead
let counter = 0;

const Instructions = ({ steps }) => (
  <div className="recipe__instructions">
    <h2 className="recipe__instructions__title">
      Instructions
    </h2>
    <div className="recipe__instructions__steps">
      {steps.map(step => {
        counter++;
        return (
          <div key={counter} className="recipe__instructions__step">
            <div className="recipe__instructions__step__nb">
              {counter}.
            </div>
            <div className="recipe__instructions__step__text">
              {step}
            </div>
          </div>
        );
      })}
    </div>
  </div>
);

Instructions.propTypes = {
  steps: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default connect(null, null)(Instructions);
