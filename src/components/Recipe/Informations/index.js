import React from 'react';

import './styles.scss';

const Informations = ({recipe}) => {
  return (
    <div className="recipe__infos">
      <div className="recipe__infos__header">
        <h1 className="recipe__infos__header__title">
          {recipe.title}
        </h1>
        <p className="recipe__infos__header__tag">
          tag
        </p>
      </div>
      <div className="recipe__line"></div>
      <div className="recipe__infos__data">
        {/* INFOS : TIME */}
        <div className="recipe__infos__data__time">
        {/* total time */}
          <div className="recipe__infos__data__time__total">
            <div className="recipe__infos__data__title">
              Temps total
            </div>
            <div className="recipe__infos__data__details">
              {/* clock icon */}
              <img className="recipe__infos__data__icon" src="" />
              <p className="recipe__infos__data__text">
                {recipe.preparation_time + recipe.baking_time} min
              </p>
            </div>
          </div>
          {/* arrow icon */}
          <img src="" />
          {/* preparation time */}
          <div className="recipe__infos__data__time__preparation">
            <div className="recipe__infos__data__title">
              Temps préparation
            </div>
            <div className="recipe__infos__data__details">
              <img className="recipe__infos__data__icon" src="" />
              <p className="recipe__infos__data__text">
              {recipe.preparation_time} min
              </p>
            </div>
          </div>
          {/* separator = vertical line */}
          <span className="recipe__infos__data__separator"></span>
          {/* cooking time */}
          <div className="recipe__infos__data__time__total">
            <div className="recipe__infos__data__title">
              Temps cuisson
            </div>
            <div className="recipe__infos__data__details">
              <img className="recipe__infos__data__icon" src="" />
              <p className="recipe__infos__data__text">
                {recipe.baking_time} min
              </p>
            </div>
          </div>
        </div>

        {/* INFOS : DIFFICULTY & NUTRI-SCORE */}
        <div className="recipe__infos__data__difficulty">
          <div className="recipe__infos__data__title">
            Difficulté
          </div>
          <div className="recipe__infos__data__details">
            <img className="recipe__infos__data__icon" src="" />
            <p className="recipe__infos__data__text">
              {recipe.difficulty}
            </p>
          </div>
        </div>
        <div className="recipe__infos__data__nutri-score">
          <div className="recipe__infos__data__title">
            Nutri-score
          </div>
          <div className="recipe__infos__data__details">
            <img className="recipe__infos__data__icon" src="" />
            <p className="recipe__infos__data__text">
              {recipe.nutri_score}
            </p>
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
