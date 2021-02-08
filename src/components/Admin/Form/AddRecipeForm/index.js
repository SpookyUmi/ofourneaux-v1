/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import FormData from 'form-data';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import axios from 'axios';
import uploadImage from 'src/middlewares/firebase';
import URL from 'src/middlewares/urlEnv';

import 'src/components/Admin/admin.scss';
import bin from 'src/assets/icons/delete.svg';
import './recipeForm.scss';

import ModalConfirmCreation from './modal/ModalConfirmCreation';

// This component uses data passed via props from the redux store, and a local state.
const AddRecipeForm = ({
  types, seasons, tags, difficulties, ingredients, userToken,
}) => {
  // I'm going to create a local state here to avoid having too many dispatches between my component
  // and the store as the user fills in the form (no submit yet).
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
  const [modal, setModal] = useState(false);

  // This function is used to handle the upload of image with the firebase middleware
  const changeRecipeImage = async (event) => {
    const url = await uploadImage(event.target.files[0]);
    setLocalPicture(url);
  };

  const showModal = () => {
    setModal(true);
  };

  const hideModal = () => {
    setModal(false);
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
            placeholder="Description"
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
        <div className="recipe__form__categories">
          <p className="label">Catégories</p>
          {/* I map on the types array of objects containing all types stocked in the store and
      obtained through the GET request at init on route https://ofourneaux.herokuapp.com/datas */}
          <div className="categories__cloud">
            {types.map((type) => (
              <div key={type.id}>
                <label className="choice__text">{type.name}
                </label>
                {/* if the type does not correspond to the recipeType
                the input appears unchecked */}
                {localType !== type.id
          && (
          <input
            className="input"
            type="radio"
            name={type.name}
            onChange={
          (event) => {
            if (event.target.checked) {
              setLocalType(type.id);
            }
          }
        }
          />
          )}
                {/* if the type corresponds to the recipeType the input appears checked */}
                {localType === type.id
          && (
          <input
            className="input"
            type="radio"
            checked
            name={type.name}
            onChange={
          (event) => {
            if (event.target.checked) {
              setLocalType(type.id);
            }
          }
        }
          />
          )}
              </div>
            ))}
          </div>
        </div>

        {/* ---- SEASONS ---- */}
        <div className="recipe__form__seasons">
          <p className="label">Saison</p>
          {/* I map on the seasons array of objects containing all seasons stocked in the store and
      obtained through the GET request at init on route https://ofourneaux.herokuapp.com/datas */}
          <div className="seasons__cloud">
            {seasons.map((season) => (
              <div key={season.name}>
                <label className="choice__text">{season.name}
                </label>
                {/* if the season is not in the localSeasons the input is rendered unchecked */}
                {localSeasons.indexOf(season.id) === -1
          && (
          <input
            className="input"
            type="checkbox"
            name={season.name}
            onChange={
              () => {
                // if the user checks a new season its id is added to the localSeasons array
                setLocalSeasons([
                  ...localSeasons,
                  season.id,
                ]);
              }
            }
          />
          )}
                {/* if the season is in the localSeasons the input is rendered checked */}
                {localSeasons.indexOf(season.id) > -1 && (
                <input
                  className="input"
                  type="checkbox"
                  checked
                  name={season.name}
                  onChange={
                () => {
                // if the user unchecks a checked season its id is removed
                // from the localSeasons array

                  const index = localSeasons.indexOf(season.id);
                  localSeasons.splice(index, 1);
                  setLocalSeasons([...localSeasons]);
                }
                }
                />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* ---- TAGS ---- */}
        <div className="recipe__form__tags">
          <p className="label">Labels</p>
          {/* I map on the seasons array of objects containing all seasons stocked in the store and
      obtained through the GET request at init on route https://ofourneaux.herokuapp.com/datas */}
          <div className="tags__cloud">
            {tags?.map((tag) => (
              <span key={tag.id}>
                <label className="choice__text" htmlFor={tag.name}>{tag.name}
                </label>

                {/* if the tag is not in the localTags the input is rendered unchecked */}
                {localTags.indexOf(tag.id) === -1
                && (
                <input
                  className="input"
                  type="checkbox"
                  name={tag.name}
                  onChange={() => {
                  // if the user checks a new tag its id is added to the localTags array

                    setLocalTags([
                      ...localTags,
                      tag.id,
                    ]);
                  }}
                />
                )}
                {/* if the tags is in the localTags the input is rendered checked */}
                {localTags.indexOf(tag.id) > -1
                && (
                <input
                  className="input"
                  type="checkbox"
                  checked
                  name={tag.name}
                  onChange={() => {
                    // if the user unchecks a checked tag its id is removed from the localTags array

                    const index = localTags.indexOf(tag.id);
                    localTags.splice(index, 1);
                    setLocalTags([...localTags]);
                  }}
                />
                )}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* I am creating divs 1-2-3-4 to help style the form for desktop mode */}
      <div className="recipe__form__div__3">
        {/* ---- DIFFICULTY --- */}
        <label className="recipe__form__difficulty label">Difficulté
          <select
            className="difficulty__select input"
            name="difficulties"
            value={localDifficulty}
            onChange={(event) => {
              setLocalDifficulty(event.target.value);
            }}
          >
            {/* I map on the difficulties array of objects containing all difficulties
           stocked in the store and obtained through the GET request at init
            on route https://ofourneaux.herokuapp.com/datas */}
            {difficulties.map((difficulty) => (
              <option value={difficulty.id} key={difficulty.id}>{difficulty.level}</option>

            ))}
          </select>
        </label>

        {/* ---- NUTRISCORE ---- */}
        <label className="recipe__form__nutri__score label">Nutri Score
          <select
            className="nutri__score input"
            name="scores"
            value={localNutriScore}
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
        {/* I map on the localIngredients array if there are ingredients in it */}
        {localIngredients?.map((ingredient) => (
          <div key={ingredient.id}>
            <span className="recipe__form__ingredient__quantity ingredient__element">{ingredient.quantity}</span>
            <span className="recipe__form__ingredient__unit ingredient__element">{ingredient.unit}</span>
            <span className="recipe__form__ingredient__name ingredient__element">{ingredient.name}</span>
            <img
              className="recipe__form__delete__icon"
              src={bin}
              alt="bin"
              onClick={() => {
              // if the user clicks on the bin the associated ingredient is removed from the array
                const index = localIngredients.indexOf(ingredient);
                localIngredients.splice(index, 1);
                setLocalIngredients([...localIngredients]);
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
          {/* I map on the ingredients array of objects containing all ingredients
        stocked in the store and obtained through the GET request at init
        on route https://ofourneaux.herokuapp.com/datas */}
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
          className="ingredient__button"
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
        <p className="recipe__form__steps label">Étapes de préparation</p>
        <ol>
          {/* I map on the localSteps array if there are steps in it */}
          {localSteps?.map((step) => (
            <div key={localSteps.indexOf(step)}>
              <li className="step__element">{step}</li>

              <img
                className="recipe__form__delete__icon"
                src={bin}
                alt="bin"
                onClick={() => {
                // if the user clicks on the bin the associated step is removed from the array
                  const index = localSteps.indexOf(step);
                  localSteps.splice(index, 1);
                  setLocalSteps([...localSteps]);
                }}
              />
            </div>
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
          className="step__button"
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
          value="Ajouter une recette"
          onClick={(event) => {
            event.preventDefault();
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
              url: `${URL}/recipes`,
              data: addRecipeForm,
              headers: { authorization: userToken, 'Content-Type': 'multipart/form-data' },
            })
              .then((response) => {
                showModal();
                setLocalTitle('');
                setLocalPicture('');
                setLocalType(null);
                setLocalDescription('');
                setLocalSeasons([]);
                setLocalTags([]);
                setLocalDifficulty(1);
                setLocalNutriScore('A');
                setLocalPreparationTime(0);
                setLocalBakingTime(0);
                setLocalIngredients([]);
                setLocalSteps([]);
                console.log('Réponse création recette :', response.data);
              })
              .catch((error) => {
                console.log('Erreur connexion :', error.response);
              });
          }}
        />
      </div>

      {modal && <ModalConfirmCreation hideModal={hideModal} />}

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
