/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import FormData from 'form-data';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import axios from 'axios';

import 'src/components/Admin/admin.scss';
import bin from 'src/assets/icons/delete.svg';

// TODO add props (controlled field, handlesubmit and props)
const AddRecipeForm = ({ tags, ingredients, userToken }) => {

  // I'm going to create a local state here to avoid having too many dispatches between my component
  // and the store. The dispatch will only happen at the submit of the form.
    const [title, setTitle] = useState('');
    const [picture, setPicture] = useState('');
    const [type, setType] = useState('');
    const [description, setDescription] = useState('');
    const [seasons, setSeasons] = useState([]);
    const [spring, setSpring] = useState('');
    const [summer, setSummer] = useState('');
    const [autumn, setAutumn] = useState('');
    const [winter, setWinter] = useState('');
    const [recipeTags, setRecipeTags] = useState([]);
    const [difficulty, setDifficulty] = useState('');
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
      <form className="add__recipe__form">
        {/* I am creating divs 1-2-3-4 to help style the form for desktop mode */}
        <div className="add__recipe__form__div__1">
          <label className="add__recipe__form__title__label">
            Titre
            <input
              className="add__recipe__form__title__input"
              type="text"
              placeholder="Titre"
              value={title}
              onChange={(event) => {
                setTitle(event.target.value);
              }}
            />
          </label>

          <label className="add__recipe__form__image__label">
            Image
            <input
              className="add__recipe__form__image__input"
              type="file"
              placeholder="Choisir votre fichier"
              value={picture}
              onChange={(event) => {
                setPicture(event.target.value);
              }}
            />
          </label>

          <label className="add__recipe__form__type__label">
            Catégorie
            <input
              className="add__recipe__form__type__input"
              type="text"
              placeholder="Entrée, Plat ou Dessert"
              value={type}
              onChange={(event) => {
                setType(event.target.value);
              }}
            />
          </label>

          <label className="add__recipe__form__description__label">
            Description
            <input
              className="add__recipe__form__description__input"
              type="text"
              placeholder="Veuillez décrire brièvement la recette."
              value={description}
              onChange={(event) => {
                setDescription(event.target.value);
              }}
            />
          </label>
        </div>
        <div className="add__recipe__form__div__2">
        {/* ---- SEASONS ---- */}
          <p className="add__recipe__form__div__2__p">Saison</p>
            <label>
              <input
                type="checkbox" name="Printemps"
                onChange={(event) => {
                  if (event.target.checked) {
                    setSpring(1);
                  } else {
                    setSpring('');
                  }
                }}/>Printemps</label>
            <label>
              <input
                type="checkbox" name="Été"
                onChange={(event) => {
                  if (event.target.checked) {
                    setSummer(2);
                  } else {
                    setSummer('');
                  }
                }}/>Été</label>
            <label>
              <input
                type="checkbox" name="Automne"
                onChange={(event) => {
                  if (event.target.checked) {
                    setAutumn(3);
                  } else {
                    setAutumn('');
                  }
                }}/>Automne</label>
            <label>
              <input
                type="checkbox" name="Hiver"
                onChange={(event) => {
                  if (event.target.checked) {
                    setWinter(4);
                  } else {
                    setWinter('');
                  }
                }}/>Hiver</label>
            <input type="submit" className="button__style" value="Enregistrer"
              onClick={() => {
                setSeasons([{
                  spring,
                  summer,
                  autumn,
                  winter
                }]);
              }}
            />
          {/* ---- LABELS ---- */}
          <p className="add__recipe__form__div__2__p">Labels</p>
            {tags?.map((tag) => (
              <label htmlFor={tag} key={tag}>
                <input
                  type="checkbox"
                  name={tag}
                  onChange={(event) => {
                    if (event.target.checked) {
                      setRecipeTags([
                        ...recipeTags,
                        tag
                      ])
                    } else if (recipeTags.indexOf(tag)) {
                      let index = recipeTags.indexOf(tag);
                      recipeTags.splice(index, 1);
                    } else setRecipeTags([...recipeTags]);
                  }}/>
                {tag}
              </label>
            ))}
            <input type="submit" className="button__style" value="Enregistrer"
              onClick={() => {
                setRecipeTags([{
                  recipeTags
                }]);
              }}
            />
        </div>

        <div className="add__recipe__form__div__3">
        {/* ---- DIFFICULTY --- */}
          <p className="add__recipe__form__div__3__p">Difficulté</p>
          <select name="difficulties" onChange={(event) => {
            setDifficulty(
              event.target.value
            )}}>
            <option value="Facile">Facile</option>
            <option value="Moyenne">Moyenne</option>
            <option value="Difficile">Difficile</option>
          </select>
        {/* ---- NUTRISCORE ---- */}
          <p className="add__recipe__form__div__3__p">Nutri Score</p>
          <select name="scores" onChange={(event) => {
            setNutriScore(
              event.target.value
          )}}>
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
            <option value="D">D</option>
            <option value="E">E</option>
          </select>
        {/* ---- BAKING TIME ---- */}
          <p className="add__recipe__form__div__3__p">Temps de préparation</p>
          <input
            value={preparationTime}
            onChange={(event) => {
              setPreparationTime(event.target.value);
            }}
            type="number"
            name="time"
            min="0"
            max="240"
          />
          <span className="add__recipe__form__div__3__span">Minutes</span>
        {/* ---- COOKING TIME ---- */}
          <p className="add__recipe__form__div__3__p">Temps de cuisson</p>
          <input
            value={bakingTime}
            onChange={(event) => {
              setBakingTime(event.target.value);
            }}
            type="number"
            name="time"
            min="0"
            max="240"
          />
          <span className="add__recipe__form__div__3__span">Minutes</span>
        </div>

        <div className="add__recipe__form__div__4">
        {/* ---- INGREDIENTS ---- */}
          <p className="add__recipe__form__div__4__p">Ingrédients</p>
          {recipeIngredients.length !== 0 && recipeIngredients.map((ingredient) => (
            <div key={ingredient.id}>
              <span className="update__recipe__form__div__4__quantity">{ingredient.quantity}</span>
              <span className="update__recipe__form__div__4__unit">{ingredient.unit}</span>
              <span className="update__recipe__form__div__4__name">{ingredient.name}</span>
              {/* <button className="update__recipe__form__div__4__edit__button" type="button">
            <img className="update__recipe__form__div__4__edit__icon" href={pencil} alt="pencil" />
          </button> */}
              <button
                className="update__recipe__form__div__4__delete__button"
                type="button"
                onClick={() => {
                  const index = recipeIngredients.indexOf(ingredient);
                  recipeIngredients.splice(index, 1);
                }}
              >
                <img className="update__recipe__form__div__4__delete__icon" src={bin} alt="bin" />
              </button>
            </div>
          ))}
          <select name="ingredients" onChange={(event) => {
            setNewIngredient(
              event.target.value
            )
          }}>
            {ingredients?.map((ingredient) => (
              <option value={ingredient.name}>
                {ingredient.name}
              </option>
            ))}
          </select>
          <input
            type="text"
            placeholder="Unité"
            onChange={(event) => {
              setNewUnit(
                event.target.value
              );
            }}
          />
          <input
            type="text"
            placeholder="Quantité"
            onChange={(event) => {
              setNewQuantity(
                event.target.value
              );
            }}
          />
          <button
            type="button"
            onClick={() => {
              setRecipeIngredients([{
                newIngredient,
                newQuantity,
                newUnit
              }])
            }}
          >Ajouter un ingrédient
          </button>
        {/* ---- STEPS ---- */}
          <p className="update__recipe__form__div__4__p">Étapes de préparation</p>
          <ol>
            {steps.map((step) => (
              <li key={step.string}>{step.string}
                <button
                  className="update__recipe__form__div__4__delete__button"
                  type="button"
                  onClick={() => {
                    const index = steps.indexOf(step);
                    steps.splice(index, 1);
                  }}
                >
                  <img className="update__recipe__form__div__4__delete__icon" src={bin} alt="bin" />
                </button>
              </li>
            ))}
          </ol>
          <input
            className="update__recipe__form__div__4__input"
            type="text"
            placeholder="Veuillez saisir une étape"
            onChange={(event) => {
              setNewStep(event.target.value);
            }}
          />
          <button
            type="button"
            onClick={() => {
              setSteps([
                  ...steps,
                {
                  string: newStep,
                }
              ])
            }}
          >Ajouter une étape
          </button>
        </div>

        <input
          className="add__recipe__form__submit"
          type="submit"
          value="Ajouter cette recette"
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
      </form>
    );
};

AddRecipeForm.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  ingredients: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    category: PropTypes.string,
  })).isRequired,
};

const mapStateToProps = (state) => ({
  recipe: state.admin.recipe,
  tags: state.admin.tags,
  ingredients: state.admin.ingredients,
  userToken: state.user.token
});

export default connect(mapStateToProps, null)(AddRecipeForm);
