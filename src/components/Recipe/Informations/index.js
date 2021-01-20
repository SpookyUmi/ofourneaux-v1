import React from 'react';

import './styles.scss';

const Informations = () => {
  return (
    <>
      <div className="recipe__block-left__header">
        <h1 className="recipe__block-left__header__title">
          Nom de la recette
        </h1>
        <p className="recipe__block-left__header__tag">
          tag
        </p>
      </div>
      <span className="recipe__block-left__line"></span>
      <div className="recipe__block-left__infos">
        {/* INFOS : TIME */}
        <div className="recipe__block-left__infos__time">
        {/* total time */}
          <div className="recipe__block-left__infos__time__total">
            <div className="recipe__block-left__infos__title">
              Temps total
            </div>
            <div className="recipe__block-left__infos__details">
              {/* clock icon */}
              <img className="recipe__block-left__infos__icon" src="" />
              <p className="recipe__block-left__infos__data">
                XX min
              </p>
            </div>
          </div>
          {/* arrow icon */}
          <img src="" />
          {/* preparation time */}
          <div className="recipe__block-left__infos__time__preparation">
            <div className="recipe__block-left__infos__title">
              Temps préparation
            </div>
            <div className="recipe__block-left__infos__details">
              <img className="recipe__block-left__infos__icon" src="" />
              <p className="recipe__block-left__infos__data">
                XX min
              </p>
            </div>
          </div>
          {/* separator = vertical line */}
          <span className="recipe__block-left__infos__separator"></span>
          {/* cooking time */}
          <div className="recipe__block-left__infos__time__total">
            <div className="recipe__block-left__infos__title">
              Temps cuisson
            </div>
            <div className="recipe__block-left__infos__details">
              <img className="recipe__block-left__infos__icon" src="" />
              <p className="recipe__block-left__infos__data">
                XX min
              </p>
            </div>
          </div>
        </div>

        {/* INFOS : DIFFICULTY & NUTRI-SCORE */}
        <div className="recipe__block-left__infos__difficulty">
          <div className="recipe__block-left__infos__title">
            Difficulté
          </div>
          <div className="recipe__block-left__infos__details">
            <img className="recipe__block-left__infos__icon" src="" />
            <p className="recipe__block-left__infos__data">
              Lorem
            </p>
          </div>
        </div>
        <div className="recipe__block-left__infos__nutri-score">
          <div className="recipe__block-left__infos__title">
            Nutri-score
          </div>
          <div className="recipe__block-left__infos__details">
            <img className="recipe__block-left__infos__icon" src="" />
            <p className="recipe__block-left__infos__data">
              X
            </p>
          </div>
        </div>
      </div>
      <div className="recipe__block-left__select">
        <span className="recipe__block-left__line"></span>
        <button type="button">Sélectionner</button>
        <span className="recipe__block-left__line"></span>
      </div>
    </>
  )
};

export default Informations;
