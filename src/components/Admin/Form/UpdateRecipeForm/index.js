/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import FormData from 'form-data';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import axios from 'axios';

import 'src/components/Admin/admin.scss';
import bin from 'src/assets/icons/delete.svg';
import './updateRecipeForm.scss';

const RecipeForm = ({
  tags, ingredients, userToken, recipe,
}) => {
  // I'm going to create a local state here to avoid having too many dispatches between my component
  // and the store.
  const [title, setTitle] = useState(recipe.title);
  const [picture, setPicture] = useState(recipe.picture);
  const [type, setType] = useState(recipe.type);
  const [description, setDescription] = useState(recipe.description);
  const [seasons, setSeasons] = useState([]);
  const [spring, setSpring] = useState('');
  const [summer, setSummer] = useState('');
  const [autumn, setAutumn] = useState('');
  const [winter, setWinter] = useState('');
  const [recipeTags, setRecipeTags] = useState([]);
  const [difficulty, setDifficulty] = useState('');
  const [nutriScore, setNutriScore] = useState('');
  const [preparationTime, setPreparationTime] = useState(recipe.preparation_time);
  const [bakingTime, setBakingTime] = useState(recipe.baking_time);
  const [recipeIngredients, setRecipeIngredients] = useState(recipe.ingredients);
  const [newIngredient, setNewIngredient] = useState('');
  const [newUnit, setNewUnit] = useState('');
  const [newQuantity, setNewQuantity] = useState('');
  const [steps, setSteps] = useState(recipe.instructions);
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
        <label className="label">
          <input
            className="choice__text margin"
            type="checkbox"
            name="Printemps"
            onChange={(event) => {
              if (event.target.checked) {
                setSpring(1);
              }
              else {
                setSpring('');
              }
              setSeasons([{
                spring,
                summer,
                autumn,
                winter,
              }]);
            }}
          />Printemps
        </label>
        <label className="label">
          <input
            className="choice__text margin"
            type="checkbox"
            name="Été"
            onChange={(event) => {
              if (event.target.checked) {
                setSummer(2);
              }
              else {
                setSummer('');
              }
              setSeasons([{
                spring,
                summer,
                autumn,
                winter,
              }]);
            }}
          />Été
        </label>
        <label className="label">
          <input
            className="choice__text margin"
            type="checkbox"
            name="Automne"
            onChange={(event) => {
              if (event.target.checked) {
                setAutumn(3);
              }
              else {
                setAutumn('');
              }
              setSeasons([{
                spring,
                summer,
                autumn,
                winter,
              }]);
            }}
          />Automne
        </label>
        <label className="label">
          <input
            className="choice__text margin"
            type="checkbox"
            name="Hiver"
            onChange={(event) => {
              if (event.target.checked) {
                setWinter(4);
              }
              else {
                setWinter('');
              }
              setSeasons([{
                spring,
                summer,
                autumn,
                winter,
              }]);
            }}
          />Hiver
        </label>

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
                  setRecipeTags([
                    ...recipeTags,
                    tag,
                  ]);
                }
                else if (recipeTags.indexOf(tag)) {
                  const index = recipeTags.indexOf(tag);
                  recipeTags.splice(index, 1);
                }
                else setRecipeTags([...recipeTags]);
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
          value="Modifier la recette"
          onClick={(event) => {
            event.preventDefault();
            const addRecipeForm = new FormData();
            axios({
              method: 'patch',
              url: 'https://ofourneaux.herokuapp.com/recipes/:recipeId',
              data: {
                title: addRecipeForm.append('title', title),
                picture: addRecipeForm.append('picture', picture),
                type: addRecipeForm.append('type', type),
                description: addRecipeForm.append('description', description),
                seasons: addRecipeForm.append('seasons', seasons),
                tags: addRecipeForm.append('tags', recipeTags),
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

RecipeForm.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  ingredients: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    category: PropTypes.string,
  })).isRequired,
  userToken: PropTypes.string.isRequired,
  recipe: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    picture: PropTypes.string,
    description: PropTypes.string,
    type: PropTypes.string,
    difficulty: PropTypes.string,
    preparation_time: PropTypes.number,
    baking_time: PropTypes.number,
    nutri_score: PropTypes.string,
    date_creation: PropTypes.string,
    date_update: PropTypes.string,
    seasons: PropTypes.arrayOf(PropTypes.string),
    tags: PropTypes.arrayOf(PropTypes.string),
    ingredients: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number,
      quantity: PropTypes.number,
      unit: PropTypes.string,
      name: PropTypes.string,
      category: PropTypes.string,
      icon: PropTypes.string,
    })),
    instructions: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};

const mapStateToProps = (state) => ({
  tags: state.admin.tags,
  ingredients: state.admin.ingredients,
  userToken: state.user.token,
  recipe: state.recipe,
});

export default connect(mapStateToProps, null)(RecipeForm);
