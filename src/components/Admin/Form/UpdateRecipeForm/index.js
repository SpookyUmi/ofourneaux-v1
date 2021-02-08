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
import '../AddRecipeForm/recipeForm.scss';

import ModalConfirmDelete from './modal/ModalConfirmDelete';
import ModalConfirmUpdate from './modal/ModalConfirmUpdate';

// This component uses data passed via props from the redux store, and a local state.
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
  // and the store as the user fills in the form (no submit yet).
  const [localTitle, setLocalTitle] = useState(recipeTitle);
  const [localPicture, setLocalPicture] = useState(recipePictureUrl);
  const [localType, setLocalType] = useState(recipeType);
  const [localDescription, setLocalDescription] = useState(recipeDescription);
  const [localSeasons, setLocalSeasons] = useState(recipeSeasons);
  const [localTags, setLocalTags] = useState(recipeTags);
  const [localDifficulty, setLocalDifficulty] = useState(recipeDifficulty);
  const [localNutriScore, setLocalNutriScore] = useState(recipeNutriScore);
  const [localPreparationTime, setLocalPreparationTime] = useState(recipePreparationTime);
  const [localBakingTime, setLocalBakingTime] = useState(recipeBakingTime);
  const [localIngredients, setLocalIngredients] = useState(recipeIngredients);
  const [localNewIngredient, setLocalNewIngredient] = useState('');
  const [localNewIngredientId, setLocalNewIngredientId] = useState(null);
  const [localNewUnit, setLocalNewUnit] = useState('');
  const [localNewQuantity, setLocalNewQuantity] = useState('');
  const [localSteps, setLocalSteps] = useState(recipeSteps);
  const [localNewStep, setLocalNewStep] = useState('');
  const [updateModal, setUpdateModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  // Displays a message if the user selects an ingredient already present in the list.
  const [message, setMessage] = useState(false);

  // This function is used to handle the upload of image with the firebase middleware
  const changeRecipeImage = async (event) => {
    const url = await uploadImage(event.target.files[0]);
    setLocalPicture(url);
  };

  const showUpdateModal = () => {
    setUpdateModal(true);
  };

  const showDeleteModal = () => {
    setDeleteModal(true);
  };

  const hideModal = () => {
    setUpdateModal(false);
    setDeleteModal(false);
  };

  const showMessage = () => {
    setMessage(true);
    setTimeout(() => {
      setMessage(false);
    }, 5000);
  };

  const resetValue = () => {
    setLocalNewQuantity('');
    setLocalNewUnit('');
    document.getElementById('unité').selectedIndex = 0;
    document.getElementById('ingredient').selectedIndex = 0;
    console.log('quantity =>', localNewQuantity);
  };

  const deleteRecipe = () => {
    axios({
      method: 'delete',
      url: `${URL}/recipes/${recipeId}`,
      headers: { authorization: userToken, 'Content-Type': 'multipart/form-data' },
    })
      .then((response) => {
        hideModal();
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
        console.log('Réponse suppression recette :', response.data);
      })
      .catch((error) => {
        console.log('Erreur connexion :', error.response);
      });
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
                <label className="choice__text" >{type.name}
                </label>
                {/* if the type does not correspond to the recipeType the input appears unchecked */}
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
            defaultValue={"defaultDifficulty"}
            value={localDifficulty}
            onChange={(event) => {
              setLocalDifficulty(event.target.value);
            }}
          >
            <option value="defaultDifficulty">---</option>
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
            defaultValue={"defaultScore"}
            value={localNutriScore}
            onChange={(event) => {
              setLocalNutriScore(
                event.target.value,
              );
            }}
          >
            <option value="defaultScore">---</option>
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
        {message &&
          <p>Ingrédient déjà dans la liste</p>
        }
        <label htmlFor="ingredients" className="recipe__form__title label">Ingredients
        <select
          className="input"
          name="ingredients"
          defaultValue="defaultIngredient"
          id="ingredient"
          onChange={(event) => {
            setLocalNewIngredientId(
              Number(event.target[event.target.selectedIndex].id),
            );
            setLocalNewIngredient(
              event.target.value,
            );
          }}
        >
          <option value="defaultIngredient" selected>---</option>
          {/* I map on the ingredients array of objects containing all ingredients
      stocked in the store and obtained through the GET request at init
      on route https://ofourneaux.herokuapp.com/datas */}
          {ingredients?.map((ingredient) => (
            <option value={ingredient.name} id={ingredient.id} key={ingredient.id}>
              {ingredient.name}
            </option>
          ))}
        </select>
        </label>
        <label htmlFor="unité" className="recipe__form__title label">Unité
        <select
          defaultValue={"defaultUnit"}
          id="unité"
          onChange={(event) => {
            setLocalNewUnit(
              event.target.value,
            );
          }}
        >
          <option value="defaultUnit" disabled>---</option>
          <option value="cl">cl</option>
          <option value="gr">gr</option>
          <option value="ml">ml</option>
          <option value="càc">càc</option>
          <option value="càs">càs</option>
          <option value="pincée">pincée</option>
          <option value="sachet">sachet</option>
        </select>
        </label>
        <input
          className="input"
          type="number"
          value={localNewQuantity}
          placeholder="Quantité"
          onChange={(event) => {
            setLocalNewQuantity(
              Number(event.target.value)
            );
          }}
        />
        <button
          type="button"
          className="ingredient__button"
          onClick={(event) => {
            event.preventDefault();
            const findIngredient = localIngredients.some(ingredient => ingredient.id === localNewIngredientId);
            if (!findIngredient) {
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
              resetValue();
            } else {
              showMessage(true);
              resetValue();
            }
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
              url: `${URL}/recipes/${recipeId}`,
              data: updateRecipeForm,
              headers: { authorization: userToken, 'Content-Type': 'multipart/form-data' },
            })
              .then((response) => {
                showUpdateModal();
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
            showDeleteModal();
          }}
        />
      </div>

      {updateModal && <ModalConfirmUpdate hideModal={hideModal} />}
      {deleteModal && <ModalConfirmDelete hideModal={hideModal} deleteRecipe={deleteRecipe} />}

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
  recipeType: PropTypes.number.isRequired,
  recipeDifficulty: PropTypes.number.isRequired,
  recipePreparationTime: PropTypes.number.isRequired,
  recipeBakingTime: PropTypes.number.isRequired,
  recipeNutriScore: PropTypes.string.isRequired,
  recipeSeasons: PropTypes.arrayOf(PropTypes.number).isRequired,
  recipeTags: PropTypes.arrayOf(PropTypes.number).isRequired,
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
  recipeType: state.recipe.type_id,
  recipeDifficulty: state.recipe.difficulty_id,
  recipePreparationTime: state.recipe.preparation_time,
  recipeBakingTime: state.recipe.baking_time,
  recipeNutriScore: state.recipe.nutri_score,
  recipeTags: state.recipe.tags,
  recipeSteps: state.recipe.steps,
  recipeIngredients: state.recipe.ingredients,
  recipeSeasons: state.recipe.seasons,
});

export default connect(mapStateToProps, null)(UpdateRecipeForm);
