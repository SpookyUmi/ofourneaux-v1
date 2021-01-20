import React from 'react';

import './styles.scss';

let step = 0;

const Instructions = ({instructions}) => {
  return (
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
          )
        })}
      </div>
    </div>
  )
};

export default Instructions;
