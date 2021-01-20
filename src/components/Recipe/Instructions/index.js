import React from 'react';

import './styles.scss';

const Instructions = () => {
  return (
    <div className="recipe__instructions">
      <h2 className="recipe__instructions__title">
        Instructions
      </h2>
      <div className="recipe__instructions__steps">
        <div className="recipe__instructions__step">
          1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eleifend ex eget interdum dictum. Nullam scelerisque in ante a viverra. Aliquam suscipit vestibulum porttitor.
        </div>
        <div className="recipe__instructions__step">
          2. Aliquam vulputate egestas posuere. Proin ut ipsum in enim fringilla blandit porttitor quis ex. Suspendisse gravida rutrum massa, eget aliquam massa ornare quis. Integer ac risus euismod, tincidunt lorem at, convallis leo.
        </div>
        <div className="recipe__instructions__step">
          3. Pellentesque efficitur ante sed dapibus malesuada. Aenean id ullamcorper purus. Duis quis ligula sed mauris fermentum rhoncus. Duis tempus auctor imperdiet. 
        </div>
        <div className="recipe__instructions__step">
          4. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vestibulum enim nibh, nec posuere diam accumsan vitae. 
        </div>
        <div className="recipe__instructions__step">
          5. Praesent pretium porttitor nulla, sit amet dapibus justo aliquet quis. Etiam a sapien quis enim egestas dictum vitae non nunc. Nam fermentum at purus quis cursus. 
        </div>
        <div className="recipe__instructions__step">
          6. Mauris ullamcorper vitae libero sed suscipit. Donec ac luctus tellus. Donec mattis porttitor augue in aliquam. 
        </div>
        <div className="recipe__instructions__step">
          7. Pellentesque in lectus eleifend, tempor nibh nec, fermentum nisl. Etiam a metus vel quam dapibus volutpat. Maecenas nulla augue, tempus nec tincidunt et, porttitor vel urna.
        </div>
      </div>
    </div>
  )
};

export default Instructions;
