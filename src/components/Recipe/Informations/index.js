// YARN
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// icons
import timeIco from 'src/assets/icons/time.svg';
import bakingIco from 'src/assets/icons/baking.svg';
import ovenIco from 'src/assets/icons/oven.svg';
import difficultyIco from 'src/assets/icons/difficulty.svg';
import nutriScoreIco from 'src/assets/icons/nutriscore.svg';

// SCSS
import './styles.scss';

// component
const Informations = ({
  id,
  title,
  description,
  tags,
  preparationTime,
  bakingTime,
  difficulty,
  nutriScore,
  isLogged,
  sendRecipeInShoppingList,
  shoppingList,
}) => {
  let messageButton = 'Sélectionner';

  const checkIfRecipeIsInShoppingList = () => {
    shoppingList.forEach((itemList) => {
      if (itemList === id) {
        messageButton = 'Désélectionner';
      }
    });
  };

  checkIfRecipeIsInShoppingList();

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
                <div key={tag} className="recipe__infos__header__intro__tag">
                  {tag}
                </div>
              ))
            }
          </div>
        </div>
      </div>

      <div className="recipe__line" />
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
        <div className="recipe__line" />
        {
          isLogged
          && (
            <button
              id={id}
              className="recipe__select__button"
              type="button"
              onClick={sendRecipeInShoppingList}
            >
              {messageButton}
            </button>
          )
        }
        <div className="recipe__line" />
      </div>
    </div>
  )
};

// PropTypes
Informations.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  tags: PropTypes.array.isRequired,
  preparationTime: PropTypes.number.isRequired,
  bakingTime: PropTypes.number.isRequired,
  difficulty: PropTypes.string.isRequired,
  nutriScore: PropTypes.string.isRequired,
  isLogged: PropTypes.bool.isRequired,
  sendRecipeInShoppingList: PropTypes.func.isRequired,
  shoppingList: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  isLogged: state.auth.isLogged,
  shoppingList: state.user.shoppingList,
});

const mapDispatchToProps = (dispatch) => ({
  // sends the request to the middleware "shoppingList.js"
  // to update the list of the user's shopping list
  sendRecipeInShoppingList: (event) => {
    dispatch({
      type: 'UPDATE_SHOPPING_LIST_REQUEST',
      payload: {
        id: event.target.id,
      },
    });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Informations);
