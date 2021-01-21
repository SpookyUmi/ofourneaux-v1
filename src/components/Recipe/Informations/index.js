import React from 'react';

import time from 'src/assets/icons/temps.svg';
import baking from 'src/assets/icons/baking.svg';
import oven from 'src/assets/icons/four.svg';
import difficulty from 'src/assets/icons/difficulte.svg';
import nutriScore from 'src/assets/icons/nutriscore.svg';

import './styles.scss';

const Informations = ({recipe}) => {
  return (
    <div className="recipe__infos">
      {/* HEADER */}
      <div className="recipe__infos__header">
        <h1 className="recipe__infos__header__title">
          {recipe.title}
        </h1>
        <div className="recipe__infos__header__intro">
          <p className="recipe__infos__header__intro__text">
            {recipe.description}
          </p>
          <div className="recipe__infos__header__intro__tags">
            <div className="recipe__infos__header__intro__tag">
              {recipe.type}
            </div>
            <div className="recipe__infos__header__intro__tag">
              {recipe.season}
            </div>
          </div>
        </div>
      </div>

      {/* DATA */}
      <div className="recipe__line"></div>
      <div className="recipe__infos__data">
        {/* INFOS : TIME */}
        <div className="recipe__infos__data__line">
        {/* total time */}
          <div className="recipe__infos__data__block recipe__infos__data__block--total">
            <div className="recipe__infos__data__title">
              Temps total
            </div>
            <div className="recipe__infos__data__details">
              {/* clock icon */}

              <img className="recipe__infos__data__icon" src={time} />
              <p className="recipe__infos__data__text">
                {recipe.preparation_time + recipe.baking_time} min
              </p>
            </div>
          </div>
          {/* preparation time */}
          <div className="recipe__infos__data__block recipe__infos__data__block--preparation">
            <div className="recipe__infos__data__title">
              Temps préparation
            </div>
            <div className="recipe__infos__data__details">
              <img className="recipe__infos__data__icon" src={baking} />
              <p className="recipe__infos__data__text">
              {recipe.preparation_time} min
              </p>
            </div>
          </div>
          {/* cooking time */}
          <div className="recipe__infos__data__block recipe__infos__data__block--cooking">
            <div className="recipe__infos__data__title">
              Temps cuisson
            </div>
            <div className="recipe__infos__data__details">
              <img className="recipe__infos__data__icon" src={oven} />
              <p className="recipe__infos__data__text">
                {recipe.baking_time} min
              </p>
            </div>
          </div>
        </div>

        {/* INFOS : DIFFICULTY & NUTRI-SCORE */}
        <div className="recipe__infos__data__line">
          <div className="recipe__infos__data__block recipe__infos__data__block--difficulty">
            <div className="recipe__infos__data__title">
              Difficulté
            </div>
            <div className="recipe__infos__data__details">
              <img className="recipe__infos__data__icon" src={difficulty} />
              <p className="recipe__infos__data__text">
                {recipe.difficulty}
              </p>
            </div>
          </div>
          <div className="recipe__infos__data__block recipe__infos__data__block--nutri-score">
            <div className="recipe__infos__data__title">
              Nutri-score
            </div>
            <div className="recipe__infos__data__details">
              <img className="recipe__infos__data__icon" src={nutriScore} />
              <p className="recipe__infos__data__text">
                {recipe.nutri_score}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="recipe__select">
        <div className="recipe__line"></div>
        <button className="recipe__select__button" type="button">Sélectionner</button>
        <div className="recipe__line"></div>
      </div>
    </div>
  )
};

export default Informations;
