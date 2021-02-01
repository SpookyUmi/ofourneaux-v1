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
  const [title, setTitle] = useState('');
  const [picture, setPicture] = useState('');
  const [recipeType, setRecipeType] = useState(null);
  const [description, setDescription] = useState('');
  const [recipeSeasons, setRecipeSeasons] = useState([]);
  const [localRecipeTags, setLocalRecipeTags] = useState([]);
  const [recipeDifficulty, setRecipeDifficulty] = useState(null);
  const [nutriScore, setNutriScore] = useState('');
  const [preparationTime, setPreparationTime] = useState(0);
  const [bakingTime, setBakingTime] = useState(0);
  const [recipeIngredients, setRecipeIngredients] = useState([]);
  const [newIngredient, setNewIngredient] = useState('');
  const [newUnit, setNewUnit] = useState('');
  const [newQuantity, setNewQuantity] = useState('');
  const [steps, setSteps] = useState([]);
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

        {/* ---- TYPES ---- */}
        <p className="recipe__form__div__1__p label">Catégories</p>
        {types.map((type) => (
          <label className="label" key={type.name}>
            <input
              className="choice__text margin"
              type="radio"
              name={type.name}
              onChange={
            (event) => {
              if (event.target.checked) {
                setRecipeType(type.id);
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
        {seasons.map((season) => (
          <label className="label" key={season.name}>
            <input
              className="choice__text margin"
              type="checkbox"
              name={season.name}
              onChange={
            (event) => {
              if (event.target.checked) {
                setRecipeSeasons([
                  ...recipeSeasons,
                  season.id,
                ]);
              }
              else if (recipeSeasons.indexOf(season.id)) {
                const index = recipeSeasons.indexOf(season.id);
                recipeSeasons.splice(index, 1);
              }
              else setRecipeSeasons([...recipeSeasons]);
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
              setRecipeDifficulty(event.target.value);
            }}
          >
            {difficulties.map((difficulty) => {
              <option value={difficulty.id}>{difficulty.level}</option>;
            })}
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
        {recipeIngredients.length !== 0 && recipeIngredients.map((ingredient) => (
          <div key={ingredient.id}>
            <span className="recipe__form__div__4__quantity">{ingredient.quantity}</span>
            <span className="recipe__form__div__4__unit">{ingredient.unit}</span>
            <span className="recipe__form__div__4__name">{ingredient.name}</span>
            <img
              className="recipe__form__div__4__delete__icon"
              src={bin}
              alt="bin"
              onClick={() => {
                const index = recipeIngredients.indexOf(ingredient);
                recipeIngredients.splice(index, 1);
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
            setRecipeIngredients([{
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
          {steps?.map((step) => (
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
          value="Ajouter une recette"
          onClick={(event) => {
            event.preventDefault();
            const addRecipeForm = new FormData();
            axios({
              method: 'post',
              url: 'https://ofourneaux.herokuapp.com/recipes',
              data: {
                title: addRecipeForm.append('title', title),
                picture: addRecipeForm.append('picture', picture),
                type: addRecipeForm.append('type', type),
                description: addRecipeForm.append('description', description),
                seasons: addRecipeForm.append('seasons', recipeSeasons),
                tags: addRecipeForm.append('tags', localRecipeTags),
                difficulty: addRecipeForm.append('difficulty', difficulty),
                nutri_score: addRecipeForm.append('nutri_score', nutriScore),
                preparation_time: addRecipeForm.append('preparation_time', preparationTime),
                baking_time: addRecipeForm.append('baking_time', bakingTime),
                ingredients: addRecipeForm.append('ingredients', recipeIngredients),
                steps: addRecipeForm.append('steps', steps),
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
    id: PropTypes.string,
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
