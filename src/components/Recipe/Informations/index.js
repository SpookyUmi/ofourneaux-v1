import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import timeIco from 'src/assets/icons/time.svg';
import bakingIco from 'src/assets/icons/baking.svg';
import ovenIco from 'src/assets/icons/oven.svg';
import difficultyIco from 'src/assets/icons/difficulty.svg';
import nutriScoreIco from 'src/assets/icons/nutriscore.svg';

import './styles.scss';

const Informations = ({
  title,
  description,
  tags,
  preparationTime,
  bakingTime,
  difficulty,
  nutriScore,
}) => {
  return (
    <div className="recipe__infos">
      <div className="recipe__infos__header">
        <h1 className="recipe__infos__header__title">
          {title}
        </h1>
        <div className="recipe__infos__header__intro">
          <p className="recipe__infos__header__intro__text">
            {description}
          </p>
          <div className="recipe__infos__header__intro__tags">
            {
              tags.map((tag) => (
                <div className="recipe__infos__header__intro__tag">
                  {tag}
                </div>
              ))
            }
          </div>
        </div>
      </div>

      <div className="recipe__line"></div>
      <div className="recipe__infos__data">
        <div className="recipe__infos__data__line">
          <div className="recipe__infos__data__block recipe__infos__data__block--total">
            <div className="recipe__infos__data__title">
              Temps total
            </div>
            <div className="recipe__infos__data__details">
              <img className="recipe__infos__data__icon" src={timeIco} alt="Icône d'horloge" />
              <p className="recipe__infos__data__text">
                {preparationTime + bakingTime} min
              </p>
            </div>
          </div>
          <div className="recipe__infos__data__block recipe__infos__data__block--preparation">
            <div className="recipe__infos__data__title">
              Temps préparation
            </div>
            <div className="recipe__infos__data__details">
              <img className="recipe__infos__data__icon" src={bakingIco} alt="Icône d'un fouet et d'un rouleau à patisserie" />
              <p className="recipe__infos__data__text">
                {preparationTime} min
              </p>
            </div>
          </div>
          <div className="recipe__infos__data__block recipe__infos__data__block--cooking">
            <div className="recipe__infos__data__title">
              Temps cuisson
            </div>
            <div className="recipe__infos__data__details">
              <img className="recipe__infos__data__icon" src={ovenIco} alt="Icône d'un four" />
              <p className="recipe__infos__data__text">
                {bakingTime} min
              </p>
            </div>
          </div>
        </div>

        <div className="recipe__infos__data__line">
          <div className="recipe__infos__data__block recipe__infos__data__block--difficulty">
            <div className="recipe__infos__data__title">
              Difficulté
            </div>
            <div className="recipe__infos__data__details">
              <img className="recipe__infos__data__icon" src={difficultyIco} alt="Icône d'une flamme" />
              <p className="recipe__infos__data__text">
                {difficulty}
              </p>
            </div>
          </div>
          <div className="recipe__infos__data__block recipe__infos__data__block--nutri-score">
            <div className="recipe__infos__data__title">
              Nutri-score
            </div>
            <div className="recipe__infos__data__details">
              <img className="recipe__infos__data__icon" src={nutriScoreIco} alt="Icône d'un baromètre" />
              <p className="recipe__infos__data__text">
                {nutriScore}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="recipe__select">
        <div className="recipe__line"></div>
        {/* TODO: function to add the recipe to the user's recipe list,
        and update the shopping list accordingly */}
        <button
          className="recipe__select__button"
          type="button"
        >
          Sélectionner
        </button>
        <div className="recipe__line"></div>
      </div>
    </div>
  )
};

Informations.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  tags: PropTypes.array.isRequired,
  preparationTime: PropTypes.number.isRequired,
  bakingTime: PropTypes.number.isRequired,
  difficulty: PropTypes.string.isRequired,
  nutriScore: PropTypes.string.isRequired,
};

export default connect(null, null)(Informations);
