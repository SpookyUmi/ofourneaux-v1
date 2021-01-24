import React from 'react';

import trash from 'src/assets/icons/delete.svg';
import modifier from 'src/assets/icons/modifier.svg';
import heartLine from 'src/assets/icons/heart-line.svg';

import './styles.scss';

const Image = ({image}) => (
  <div className="image">
  {/* TODO: put the icons in white */}
    <div className="image__icons">
      <div className="image__icons__admin">
      {/* TODO: link to the recipe deletion page */}
        <a href="">
          <img className="image__icon" src={trash} alt="" />
        </a>
        {/* TODO: link to the recipe edition page */}
        <a href="">
          <img className="image__icon" src={modifier} alt="" />
        </a>
      </div>
      {/* TODO: at the click, the icon change to fill up */}
      <img className="image__icon" src={heartLine} alt="" />
    </div>
    <img className="image__recipe" src={image} alt="" />
  </div>
);

export default Image;
