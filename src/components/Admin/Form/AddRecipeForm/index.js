/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import FormData from 'form-data';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import axios from 'axios';

import 'src/components/Admin/admin.scss';
import bin from 'src/assets/icons/delete.svg';
import './addRecipeForm.scss';

const AddRecipeForm = ({
  types, seasons, tags, difficulties, ingredients, userToken,
}) => {
  // I'm going to create a local state here to avoid having too many dispatches between my component
  // and the store.
  const [localTitle, setLocalTitle] = useState('');
  const [localPicture, setLocalPicture] = useState('');
  const [localType, setLocalType] = useState(null);
  const [localDescription, setLocalDescription] = useState('');
  const [localSeasons, setLocalSeasons] = useState([]);
  const [localTags, setLocalTags] = useState([]);
  const [localDifficulty, setLocalDifficulty] = useState(1);
  const [localNutriScore, setLocalNutriScore] = useState('A');
  const [localPreparationTime, setLocalPreparationTime] = useState(0);
  const [localBakingTime, setLocalBakingTime] = useState(0);
  const [localIngredients, setLocalIngredients] = useState([]);
  const [localNewIngredientId, setLocalNewIngredientId] = useState(null);
  const [localNewIngredient, setLocalNewIngredient] = useState('');
  const [localNewUnit, setLocalNewUnit] = useState('');
  const [localNewQuantity, setLocalNewQuantity] = useState('');
  const [localSteps, setLocalSteps] = useState([]);
  const [localNewStep, setLocalNewStep] = useState('');

  return (
    <form className="recipe__form">
      {/* I am creating divs 1-2-3-4 to help style the form for desktop mode */}
      <div className="recipe__form__div__1">
        <label className="recipe__form__title__label label">
          Titre
          <input
            className="recipe__form__title__input margin"
            type="text"
            placeholder="Titre"
            value={localTitle}
            onChange={(event) => {
              setLocalTitle(event.target.value);
            }}
          />
        </label>

        <label className="recipe__form__image__label label">
          Image
          <input
            className="recipe__form__image__input margin"
            type="file"
            placeholder="Choisir votre fichier"
            value={localPicture}
            onChange={(event) => {
              setLocalPicture(event.target.value);
            }}
          />
        </label>

        {/* ---- TYPES ---- */}
        <p className="recipe__form__div__1__p label">Catégories</p>
        {types.map((type) => (
          <label className="label" key={type.id}>
            <input
              className="choice__text margin"
              type="radio"
              name={type.name}
              onChange={
            (event) => {
              if (event.target.checked) {
                setLocalType(type.id);
              }
            }
          }
            /> {type.name}
          </label>
        ))}

        <label className="recipe__form__description__label label">
          Description
          <input
            className="recipe__form__description__input margin"
            type="text"
            placeholder="Veuillez décrire brièvement la recette."
            value={localDescription}
            onChange={(event) => {
              setLocalDescription(event.target.value);
            }}
          />
        </label>
      </div>
      <div className="recipe__form__div__2">
        {/* ---- SEASONS ---- */}
        {/* If we have time in the future we could add checked property to the checkbox if
        the season is in recipe.seasons (if else?) */}
        <p className="recipe__form__div__2__p label">Saison</p>
        {seasons.map((season) => (
          <label className="label" key={season.name}>
            <input
              className="choice__text margin"
              type="checkbox"
              name={season.name}
              onChange={
            (event) => {
              if (event.target.checked) {
                setLocalSeasons([
                  ...localSeasons,
                  season.id,
                ]);
              }
              else if (localSeasons.indexOf(season.id)) {
                const index = localSeasons.indexOf(season.id);
                localSeasons.splice(index, 1);
              }
              else setLocalSeasons([...localSeasons]);
            }
          }
            /> {season.name}
          </label>
        ))}
        {/* ---- TAGS ---- */}
        {/* If we have time in the future we could add checked property to the checkbox if
        the tag is in recipe.tags (if else?) */}
        <p className="recipe__form__div__2__p label">Labels</p>
        {tags?.map((tag) => (
          <label className="label" htmlFor={tag.name} key={tag.id}>
            <input
              className="margin"
              type="checkbox"
              name={tag.name}
              onChange={(event) => {
                if (event.target.checked) {
                  setLocalTags([
                    ...localTags,
                    tag.id,
                  ]);
                }
                else if (localTags.indexOf(tag.id)) {
                  const index = localTags.indexOf(tag.id);
                  localTags.splice(index, 1);
                }
                else setLocalTags([...localTags]);
              }}
            />
            {tag.name}
          </label>
        ))}
      </div>

      <div className="recipe__form__div__3">
        {/* ---- DIFFICULTY --- */}
        {/* If we have time in the future we could add checked property to the checkbox if
        the difficulty is in recipe.difficulty (if else?) */}
        <label className="recipe__form__div__3__p label">Difficulté
          <select
            className="margin"
            name="difficulties"
            onChange={(event) => {
              setLocalDifficulty(event.target.value);
            }}
          >
            {difficulties.map((difficulty) => (
              <option value={difficulty.id} key={difficulty.id}>{difficulty.level}</option>
            ))}
          </select>
        </label>

        {/* ---- NUTRISCORE ---- */}
        {/* If we have time in the future we could add checked property to the checkbox if
        the nutriscore is in recipe.nutriscore (if else?) */}
        <label className="recipe__form__div__3__p label">Nutri Score
          <select
            className="margin"
            name="scores"
            onChange={(event) => {
              setLocalNutriScore(
                event.target.value,
              );
            }}
          >
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
            <option value="D">D</option>
            <option value="E">E</option>
          </select>
        </label>

        {/* ---- BAKING TIME ---- */}
        <label className="recipe__form__div__3__p label">Temps de préparation
          <input
            className="margin"
            value={localPreparationTime}
            onChange={(event) => {
              setLocalPreparationTime(event.target.value);
            }}
            type="number"
            name="time"
            min="0"
            max="240"
          />
          <span className="recipe__form__div__3__span choice__text">Minutes</span>
        </label>

        {/* ---- COOKING TIME ---- */}
        <label className="recipe__form__div__3__p label">Temps de cuisson
          <input
            className="margin"
            value={localBakingTime}
            onChange={(event) => {
              setLocalBakingTime(event.target.value);
            }}
            type="number"
            name="time"
            min="0"
            max="240"
          />
          <span className="recipe__form__div__3__span choice_text">Minutes</span>
        </label>

      </div>

      <div className="recipe__form__div__4">
        {/* ---- INGREDIENTS ---- */}
        <p className="recipe__form__div__4__p label">Ingrédients</p>
        {localIngredients.length !== 0 && localIngredients.map((ingredient) => (
          <div key={ingredient.id}>
            <span className="recipe__form__div__4__quantity ingredient__element">{ingredient.quantity}</span>
            <span className="recipe__form__div__4__unit ingredient__element">{ingredient.unit}</span>
            <span className="recipe__form__div__4__name ingredient__element">{ingredient.name}</span>
            <img
              className="recipe__form__div__4__delete__icon"
              src={bin}
              alt="bin"
              onClick={() => {
                const index = localIngredients.indexOf(ingredient.id);
                localIngredients.splice(index, 1);
              }}
            />
          </div>
        ))}
        <select
          className="margin"
          name="ingredients"
          onChange={(event) => {
            setLocalNewIngredientId(
              event.target[event.target.selectedIndex].id,
            );
            setLocalNewIngredient(
              event.target.value,
            );
          }}
        >
          {ingredients?.map((ingredient) => (
            <option value={ingredient.name} id={ingredient.id} key={ingredient.id}>
              {ingredient.name}
            </option>
          ))}
        </select>
        <input
          className="margin"
          type="text"
          value={localNewUnit}
          placeholder="Unité"
          onChange={(event) => {
            setLocalNewUnit(
              event.target.value,
            );
          }}
        />
        <input
          className="margin"
          type="number"
          value={localNewQuantity}
          placeholder="Quantité"
          onChange={(event) => {
            setLocalNewQuantity(
              event.target.value,
            );
          }}
        />
        <button
          type="button"
          onClick={(event) => {
            event.preventDefault();
            setLocalIngredients(
              [
                ...localIngredients,
                {
                  id: localNewIngredientId,
                  name: localNewIngredient,
                  quantity: localNewQuantity,
                  unit: localNewUnit,
                },
              ],
            );
            setLocalNewQuantity('');
            setLocalNewUnit('');
          }}
        >Ajouter un ingrédient
        </button>
        {/* ---- STEPS ---- */}
        <p className="recipe__form__div__4__p label">Étapes de préparation</p>
        <ol>
          {localSteps?.map((step) => (
            <li key={step}>{step}
              <img
                className="recipe__form__div__4__delete__icon"
                src={bin}
                alt="bin"
                onClick={() => {
                  const index = localSteps.indexOf(step);
                  localSteps.splice(index, 1);
                }}
              />
            </li>
          ))}
        </ol>
        <input
          className="recipe__form__div__4__input margin"
          type="text"
          placeholder="Veuillez saisir une étape"
          value={localNewStep}
          onChange={(event) => {
            setLocalNewStep(event.target.value);
          }}
        />
        <button
          type="button"
          onClick={(event) => {
            event.preventDefault();
            setLocalSteps(
              [
                ...localSteps,
                localNewStep,
              ],
            );
            setLocalNewStep('');
          }}
        >Ajouter une étape
        </button>
      </div>

      <div className="submit__button">
        <input
          className="recipe__form__submit button__style"
          type="submit"
          value="Ajouter une recette"
          onClick={(event) => {
            event.preventDefault();
            console.log('localIngredients:', JSON.stringify(localIngredients));
            const addRecipeForm = new FormData();
            addRecipeForm.append('title', localTitle);
            addRecipeForm.append('picture_url', localPicture);
            addRecipeForm.append('type_id', localType);
            addRecipeForm.append('description', localDescription);
            addRecipeForm.append('seasons', `[${localSeasons.join(', ')}]`);
            addRecipeForm.append('tags', `[${localTags.join(', ')}]`);
            addRecipeForm.append('difficulty_id', localDifficulty);
            addRecipeForm.append('nutri_score', localNutriScore);
            addRecipeForm.append('preparation_time', localPreparationTime);
            addRecipeForm.append('baking_time', localBakingTime);
            addRecipeForm.append('ingredients', JSON.stringify(localIngredients));
            addRecipeForm.append('steps', JSON.stringify(localSteps));

            axios({
              method: 'post',
              url: 'https://ofourneaux.herokuapp.com/recipes',
              data: addRecipeForm,
              headers: { authorization: userToken, 'Content-Type': 'multipart/form-data' },
            })
              .then((response) => {
                console.log('Réponse création recette :', response.data);
              })
              .catch((error) => {
                console.log('Erreur connexion :', error.response);
              });
          }}
        />
      </div>

    </form>
  );
};

AddRecipeForm.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
  })).isRequired,
  ingredients: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    category: PropTypes.string,
  })).isRequired,
  types: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
  })).isRequired,
  seasons: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
  })).isRequired,
  difficulties: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    level: PropTypes.string,
  })).isRequired,
  userToken: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  tags: state.app.tags,
  ingredients: state.app.ingredients,
  types: state.app.types,
  seasons: state.app.seasons,
  difficulties: state.app.difficulties,
  userToken: state.user.token,
});

export default connect(mapStateToProps, null)(AddRecipeForm);
