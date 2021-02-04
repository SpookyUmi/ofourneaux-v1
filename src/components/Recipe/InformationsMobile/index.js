// YARN
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// icons
import timeIco from 'src/assets/icons/time.svg';
import difficultyIco from 'src/assets/icons/difficulty.svg';
import nutriScoreIco from 'src/assets/icons/nutriscore.svg';

// import utils
import difficultyNameById from 'src/utils/difficultyNameById';

// SCSS
import './styles.scss';

// component
const Informations = ({
  id,
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
    <div className="mobile__recipe__infos">
      <div className="mobile__recipe__line" />
      <div className="mobile__recipe__infos__data">
        <div className="mobile__recipe__infos__data__line">
          <div className="mobile__recipe__infos__data__block mobile__recipe__infos__data__block--total">
            <div className="mobile__recipe__infos__data__title">
              Temps total
            </div>
            <div className="mobile__recipe__infos__data__details">
              <img className="mobile__recipe__infos__data__icon" src={timeIco} alt="Icône d'horloge" />
              <p className="mobile__recipe__infos__data__text">
                {preparationTime + bakingTime} min
              </p>
            </div>
          </div>
          <div className="mobile__recipe__infos__data__block mobile__recipe__infos__data__block--difficulty">
            <div className="mobile__recipe__infos__data__title">
              Difficulté
            </div>
            <div className="mobile__recipe__infos__data__details">
              <img className="mobile__recipe__infos__data__icon" src={difficultyIco} alt="Icône d'une flamme" />
              <p className="mobile__recipe__infos__data__text">
                {difficultyNameById(difficulty)}
              </p>
            </div>
          </div>
          <div className="mobile__recipe__infos__data__block mobile__recipe__infos__data__block--nutri-score">
            <div className="mobile__recipe__infos__data__title">
              Nutri-score
            </div>
            <div className="mobile__recipe__infos__data__details">
              <img className="mobile__recipe__infos__data__icon" src={nutriScoreIco} alt="Icône d'un baromètre" />
              <p className="mobile__recipe__infos__data__text">
                {nutriScore}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mobile__recipe__select">
        <div className="mobile__recipe__line" />
        {
          isLogged
          && (
            <button
              id={id}
              className="mobile__recipe__select__button"
              type="button"
              onClick={sendRecipeInShoppingList}
            >
              {messageButton}
            </button>
          )
        }
        <div className="mobile__recipe__line" />
      </div>
    </div>
  );
};

// PropTypes
Informations.propTypes = {
  // eslint-disable-next-line react/require-default-props
  id: PropTypes.number,
  preparationTime: PropTypes.number.isRequired,
  bakingTime: PropTypes.number.isRequired,
  difficulty: PropTypes.number.isRequired,
  nutriScore: PropTypes.string.isRequired,
  isLogged: PropTypes.bool.isRequired,
  sendRecipeInShoppingList: PropTypes.func.isRequired,
  shoppingList: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  id: state.recipe.id,
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
