import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import './styles.scss';

// TODO: use the length of the table or the index for the steps instead
let step = 0;

const Instructions = ({instructions}) => (
  <div className="recipe__instructions">
    <h2 className="recipe__instructions__title">
      Instructions
    </h2>
    <div className="recipe__instructions__steps">
      {instructions.map(instruction => {
        step++;
        return (
          <div key={step} className="recipe__instructions__step">
            <div className="recipe__instructions__step__nb">
              {step}.
            </div>
            <div className="recipe__instructions__step__text">
              {instruction}
            </div>
          </div>
        );
      })}
    </div>
  </div>
);

Instructions.propTypes = {
  instructions: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const mapStateToProps = (state) => ({
  instructions: state.recipe.instructions,
});

export default connect(mapStateToProps, null)(Instructions);
