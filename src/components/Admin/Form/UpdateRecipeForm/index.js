/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import FormData from 'form-data';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import axios from 'axios';

import 'src/components/Admin/admin.scss';
import bin from 'src/assets/icons/delete.svg';
import seasonsArray from 'src/data/seasons';
import './updateRecipeForm.scss';

const UpdateRecipeForm = ({
  tags, ingredients, userToken,
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
  const [title, setTitle] = useState(recipeTitle);
  const [picture, setPicture] = useState(recipePictureUrl);
  const [type, setType] = useState(recipeType);
  const [description, setDescription] = useState(recipeDescription);
  const [seasons, setSeasons] = useState([]);
  const [localRecipeTags, setLocalRecipeTags] = useState([]);
  const [difficulty, setDifficulty] = useState('');
  const [nutriScore, setNutriScore] = useState('');
  const [preparationTime, setPreparationTime] = useState(recipePreparationTime);
  const [bakingTime, setBakingTime] = useState(recipeBakingTime);
  const [localRecipeIngredients, setLocalRecipeIngredients] = useState(recipeIngredients);
  const [newIngredient, setNewIngredient] = useState('');
  const [newUnit, setNewUnit] = useState('');
  const [newQuantity, setNewQuantity] = useState('');
  const [steps, setSteps] = useState(recipeSteps);
  const [newStep, setNewStep] = useState('');

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
            value={title}
            onChange={(event) => {
              setTitle(event.target.value);
            }}
          />
        </label>

        <label className="recipe__form__image__label label">
          Image
          <input
            className="recipe__form__image__input margin"
            type="file"
            placeholder="Choisir votre fichier"
            value={picture}
            onChange={(event) => {
              setPicture(event.target.value);
            }}
          />
        </label>

        <label className="recipe__form__type__label label">
          Catégorie
          <input
            className="recipe__form__type__input margin"
            type="text"
            placeholder="Entrée, Plat ou Dessert"
            value={type}
            onChange={(event) => {
              setType(event.target.value);
            }}
          />
        </label>

        <label className="recipe__form__description__label label">
          Description
          <input
            className="recipe__form__description__input margin"
            type="text"
            placeholder="Veuillez décrire brièvement la recette."
            value={description}
            onChange={(event) => {
              setDescription(event.target.value);
            }}
          />
        </label>
      </div>
      <div className="recipe__form__div__2">
        {/* ---- SEASONS ---- */}
        {/* If we have time in the future we could add checked property to the checkbox if
        the season is in recipe.seasons (if else?) */}
        <p className="recipe__form__div__2__p label">Saison</p>
        {seasonsArray.map((season) => (
          <label className="label" key={season.name}>
            <input
              className="choice__text margin"
              type="checkbox"
              name={season.name}
              onChange={
            (event) => {
              if (event.target.checked) {
                setSeasons([
                  ...seasons,
                  season.id,
                ]);
              }
              else if (seasons.indexOf(season.id)) {
                const index = seasons.indexOf(season.id);
                seasons.splice(index, 1);
              }
              else setSeasons([...seasons]);
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
          <label className="label" htmlFor={tag} key={tag}>
            <input
              className="margin"
              type="checkbox"
              name={tag}
              onChange={(event) => {
                if (event.target.checked) {
                  setLocalRecipeTags([
                    ...localRecipeTags,
                    tag,
                  ]);
                }
                else if (localRecipeTags.indexOf(tag)) {
                  const index = localRecipeTags.indexOf(tag);
                  localRecipeTags.splice(index, 1);
                }
                else setLocalRecipeTags([...localRecipeTags]);
              }}
            />
            {tag}
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
              setDifficulty(
                event.target.value,
              );
            }}
          >
            <option value="Facile">Facile</option>
            <option value="Moyenne">Moyenne</option>
            <option value="Difficile">Difficile</option>
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
              setNutriScore(
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
            value={preparationTime}
            onChange={(event) => {
              setPreparationTime(event.target.value);
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
            value={bakingTime}
            onChange={(event) => {
              setBakingTime(event.target.value);
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
        {localRecipeIngredients.length !== 0 && localRecipeIngredients.map((ingredient) => (
          <div key={ingredient.id}>
            <span className="recipe__form__div__4__quantity">{ingredient.quantity}</span>
            <span className="recipe__form__div__4__unit">{ingredient.unit}</span>
            <span className="recipe__form__div__4__name">{ingredient.name}</span>
            <img
              className="recipe__form__div__4__delete__icon"
              src={bin}
              alt="bin"
              onClick={() => {
                const index = localRecipeIngredients.indexOf(ingredient);
                localRecipeIngredients.splice(index, 1);
              }}
            />
          </div>
        ))}
        <select
          className="margin"
          name="ingredients"
          onChange={(event) => {
            setNewIngredient(
              event.target.value,
            );
          }}
        >
          {ingredients?.map((ingredient) => (
            <option value={ingredient.name} key={ingredient.id}>
              {ingredient.name}
            </option>
          ))}
        </select>
        <input
          className="margin"
          type="text"
          placeholder="Unité"
          onChange={(event) => {
            setNewUnit(
              event.target.value,
            );
          }}
        />
        <input
          className="margin"
          type="text"
          placeholder="Quantité"
          onChange={(event) => {
            setNewQuantity(
              event.target.value,
            );
          }}
        />
        <button
          type="button"
          onClick={(event) => {
            event.preventDefault();
            setLocalRecipeIngredients([{
              newIngredient,
              newQuantity,
              newUnit,
            }]);
          }}
        >Ajouter un ingrédient
        </button>
        {/* ---- STEPS ---- */}
        <p className="recipe__form__div__4__p label">Étapes de préparation</p>
        <ol>
          {recipeSteps?.map((step) => (
            <li key={step.string}>{step.string}
              <img
                className="recipe__form__div__4__delete__icon"
                src={bin}
                alt="bin"
                onClick={() => {
                  const index = steps.indexOf(step);
                  steps.splice(index, 1);
                }}
              />
            </li>
          ))}
        </ol>
        <input
          className="recipe__form__div__4__input margin"
          type="text"
          placeholder="Veuillez saisir une étape"
          onChange={(event) => {
            setNewStep(event.target.value);
          }}
        />
        <button
          type="button"
          onClick={(event) => {
            event.preventDefault();
            setSteps([
              ...steps,
              {
                string: newStep,
              },
            ]);
          }}
        >Ajouter une étape
        </button>
      </div>

      <div className="submit__button">

        <input
          className="recipe__form__submit button__style"
          type="submit"
          value="Modifier la recette"
          onClick={(event) => {
            event.preventDefault();
            const addUpdateRecipeForm = new FormData();
            axios({
              method: 'patch',
              url: 'https://ofourneaux.herokuapp.com/recipes/:recipeId',
              data: {
                title: addUpdateRecipeForm.append('title', title),
                picture: addUpdateRecipeForm.append('picture', picture),
                type: addUpdateRecipeForm.append('type', type),
                description: addUpdateRecipeForm.append('description', description),
                seasons: addUpdateRecipeForm.append('seasons', seasons),
                tags: addUpdateRecipeForm.append('tags', localRecipeTags),
                difficulty: addUpdateRecipeForm.append('difficulty', difficulty),
                nutri_score: addUpdateRecipeForm.append('nutri_score', nutriScore),
                preparation_time: addUpdateRecipeForm.append('preparation_time', preparationTime),
                baking_time: addUpdateRecipeForm.append('baking_time', bakingTime),
                ingredients: addUpdateRecipeForm.append('ingredients', localRecipeIngredients),
                steps: addUpdateRecipeForm.append('steps', steps),
              },
              headers: { authorization: userToken, 'Content-Type': 'multipart/form-data' },
            })
              .then((response) => {
                console.log('Réponse création recette :', response.data);
              })
              .catch((error) => {
                console.log('Erreur connexion :', error);
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
              url: 'https://ofourneaux.herokuapp.com/recipes/:recipeId',
              headers: { authorization: userToken, 'Content-Type': 'multipart/form-data' },
            })
              .then((response) => {
                console.log('Réponse création recette :', response.data);
              })
              .catch((error) => {
                console.log('Erreur connexion :', error);
              });
          }}
        />
      </div>

    </form>
  );
};

UpdateRecipeForm.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  ingredients: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    category: PropTypes.string,
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
  tags: state.app.tags,
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
