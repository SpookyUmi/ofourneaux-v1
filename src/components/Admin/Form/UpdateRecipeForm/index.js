/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import FormData from 'form-data';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import axios from 'axios';
import uploadImage from 'src/middlewares/firebase';

import 'src/components/Admin/admin.scss';
import bin from 'src/assets/icons/delete.svg';
import '../AddRecipeForm/addRecipeForm.scss';

const UpdateRecipeForm = ({
  types, seasons, tags, difficulties, ingredients, userToken,
  recipeId,
  recipeTitle,
  recipePictureUrl,
  recipeDescription,
  recipeType,
  recipeDifficulty,
  recipePreparationTime,
  recipeBakingTime,
  recipeNutriScore,
  recipeTags,
  recipeSteps,
  recipeIngredients,
  recipeSeasons,
}) => {
  // I'm going to create a local state here to avoid having too many dispatches between my component
  // and the store.
  const [localTitle, setLocalTitle] = useState(recipeTitle);
  const [localPicture, setLocalPicture] = useState('');
  const [localType, setLocalType] = useState(recipeType);
  const [localDescription, setLocalDescription] = useState(recipeDescription);
  const [localSeasons, setLocalSeasons] = useState([]);
  const [localTags, setLocalTags] = useState([]);
  const [localDifficulty, setLocalDifficulty] = useState('');
  const [localNutriScore, setLocalNutriScore] = useState('');
  const [localPreparationTime, setLocalPreparationTime] = useState(recipePreparationTime);
  const [localBakingTime, setLocalBakingTime] = useState(recipeBakingTime);
  const [localIngredients, setLocalIngredients] = useState(recipeIngredients);
  const [localNewIngredient, setLocalNewIngredient] = useState('');
  const [localNewIngredientId, setLocalNewIngredientId] = useState(null);
  const [localNewUnit, setLocalNewUnit] = useState('');
  const [localNewQuantity, setLocalNewQuantity] = useState('');
  const [localSteps, setLocalSteps] = useState(recipeSteps);
  const [localNewStep, setLocalNewStep] = useState('');

  const changeRecipeImage = async (event) => {
    const url = await uploadImage(event.target.files[0]);
    setLocalPicture(url);
  };

  return (
    <form className="recipe__form">

      {/* I am creating divs 1-2-3-4 to help style the form for desktop mode */}
      <div className="recipe__form__div__1">

        {/* ---- TITRE ---- */}
        <label className="recipe__form__title label">
          Titre
          <input
            className="recipe__form__title input"
            type="text"
            placeholder="Titre"
            value={localTitle}
            onChange={(event) => {
              setLocalTitle(event.target.value);
            }}
          />
        </label>

        {/* ---- IMAGE ---- */}
        <label className="recipe__form__image label">
          Image
          <input
            className="recipe__form__image input"
            type="file"
            placeholder="Choisir votre fichier"
            onChange={changeRecipeImage}
          />
        </label>

        {/* ---- DESCRIPTION ---- */}
        <label className="recipe__form__description label">
          Description
          <input
            className="recipe__form__description input"
            type="text"
            placeholder="Veuillez décrire brièvement la recette."
            value={localDescription}
            onChange={(event) => {
              setLocalDescription(event.target.value);
            }}
          />
        </label>
      </div>

      {/* I am creating divs 1-2-3-4 to help style the form for desktop mode */}
      <div className="recipe__form__div__2">

        {/* ---- TYPES ---- */}
        <p className="recipe__form__categories label">Catégories</p>
        {types.map((type) => (
          <label className="label" key={type.id}>
            <input
              className="choice__text input"
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

        {/* ---- SEASONS ---- */}
        {/* If we have time in the future we could add checked property to the checkbox if
        the season is in recipe.seasons (if else?) */}
        <p className="recipe__form__seasons label">Saison</p>
        {seasons.map((season) => (
          <label className="label" key={season.name}>
            <input
              className="choice__text input"
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
        <p className="recipe__form__tags label">Labels</p>
        {tags?.map((tag) => (
          <label className="label" htmlFor={tag.name} key={tag.id}>
            <input
              className="input"
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

      {/* I am creating divs 1-2-3-4 to help style the form for desktop mode */}
      <div className="recipe__form__div__3">
        {/* ---- DIFFICULTY --- */}
        {/* If we have time in the future we could add checked property to the checkbox if
        the difficulty is in recipe.difficulty (if else?) */}
        <label className="recipe__form__difficulty label">Difficulté
          <select
            className="input"
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
        <label className="recipe__form__nutri__score label">Nutri Score
          <select
            className="nutri__score input"
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

        {/* ---- PREPARATION TIME ---- */}
        <label className="recipe__form__preparation__time label">Temps de préparation
          <input
            className="input"
            value={localPreparationTime}
            onChange={(event) => {
              setLocalPreparationTime(event.target.value);
            }}
            type="number"
            name="time"
            min="0"
            max="240"
          />
          <span className="choice__text">Minutes</span>
        </label>

        {/* ---- BAKING TIME ---- */}
        <label className="recipe__form__baking__time label">Temps de cuisson
          <input
            className="input"
            value={localBakingTime}
            onChange={(event) => {
              setLocalBakingTime(event.target.value);
            }}
            type="number"
            name="time"
            min="0"
            max="240"
          />
          <span className="choice_text">Minutes</span>
        </label>

      </div>

      {/* I am creating divs 1-2-3-4 to help style the form for desktop mode */}
      <div className="recipe__form__div__4">

        {/* ---- INGREDIENTS ---- */}
        <p className="recipe__form__ingredients label">Ingrédients</p>
        {localIngredients.length !== 0 && localIngredients.map((ingredient) => (
          <div key={ingredient.id}>
            <span className="recipe__form__ingredient__quantity ingredient__element">{ingredient.quantity}</span>
            <span className="recipe__form__ingredient__unit ingredient__element">{ingredient.unit}</span>
            <span className="recipe__form__ingredient__name ingredient__element">{ingredient.name}</span>
            <img
              className="recipe__form__delete__icon"
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
          className="input"
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
          className="input"
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
          className="input"
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
        <p className="recipe__form__steps__p label">Étapes de préparation</p>
        <ol>
          {localSteps?.map((step) => (
            <li key={step}>{step}
              <img
                className="recipe__form__delete__icon"
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
          className="recipe__form__steps__input input"
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

      {/* ---- SUBMIT ---- */}
      <div className="submit__button">

        <input
          className="recipe__form__submit button__style"
          type="submit"
          value="Modifier la recette"
          onClick={(event) => {
            event.preventDefault();
            const updateRecipeForm = new FormData();
            updateRecipeForm.append('title', localTitle);
            updateRecipeForm.append('picture_url', localPicture);
            updateRecipeForm.append('type_id', localType);
            updateRecipeForm.append('description', localDescription);
            updateRecipeForm.append('seasons', `[${localSeasons.join(', ')}]`);
            updateRecipeForm.append('tags', `[${localTags.join(', ')}]`);
            updateRecipeForm.append('difficulty_id', localDifficulty);
            updateRecipeForm.append('nutri_score', localNutriScore);
            updateRecipeForm.append('preparation_time', localPreparationTime);
            updateRecipeForm.append('baking_time', localBakingTime);
            updateRecipeForm.append('ingredients', JSON.stringify(localIngredients));
            updateRecipeForm.append('steps', JSON.stringify(localSteps));
            axios({
              method: 'patch',
              url: `https://ofourneaux.herokuapp.com/recipes/${recipeId}`,
              data: updateRecipeForm,
              headers: { authorization: userToken, 'Content-Type': 'multipart/form-data' },
            })
              .then((response) => {
                console.log('Réponse update recette :', response.data);
              })
              .catch((error) => {
                console.log('Erreur connexion :', error.response);
              });
          }}
        />

        <input
          className="recipe__form__submit button__style"
          type="submit"
          value="Supprimer la recette"
          onClick={(event) => {
            event.preventDefault();
            axios({
              method: 'delete',
              url: `https://ofourneaux.herokuapp.com/recipes/${recipeId}`,
              headers: { authorization: userToken, 'Content-Type': 'multipart/form-data' },
            })
              .then((response) => {
                console.log('Réponse suppression recette :', response.data);
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

UpdateRecipeForm.propTypes = {
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
  recipeId: PropTypes.number.isRequired,
  recipeTitle: PropTypes.string.isRequired,
  recipePictureUrl: PropTypes.string.isRequired,
  recipeDescription: PropTypes.string.isRequired,
  recipeType: PropTypes.string.isRequired,
  recipeDifficulty: PropTypes.string.isRequired,
  recipePreparationTime: PropTypes.number.isRequired,
  recipeBakingTime: PropTypes.number.isRequired,
  recipeNutriScore: PropTypes.string.isRequired,
  recipeSeasons: PropTypes.arrayOf(PropTypes.string).isRequired,
  recipeTags: PropTypes.arrayOf(PropTypes.string).isRequired,
  recipeIngredients: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    quantity: PropTypes.number,
    unit: PropTypes.string,
    name: PropTypes.string,
    category: PropTypes.string,
    icon: PropTypes.string,
  })).isRequired,
  recipeSteps: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const mapStateToProps = (state) => ({
  types: state.app.types,
  tags: state.app.tags,
  seasons: state.app.seasons,
  difficulties: state.app.difficulties,
  ingredients: state.app.ingredients,
  userToken: state.user.token,
  recipeId: state.recipe.id,
  recipeTitle: state.recipe.title,
  recipePictureUrl: state.recipe.picture_url,
  recipeDescription: state.recipe.description,
  recipeType: state.recipe.type,
  recipeDifficulty: state.recipe.difficulty,
  recipePreparationTime: state.recipe.preparation_time,
  recipeBakingTime: state.recipe.baking_time,
  recipeNutriScore: state.recipe.nutri_score,
  recipeTags: state.recipe.tags,
  recipeSteps: state.recipe.steps,
  recipeIngredients: state.recipe.ingredients,
  recipeSeasons: state.recipe.seasons,
});

export default connect(mapStateToProps, null)(UpdateRecipeForm);
