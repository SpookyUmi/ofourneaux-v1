/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// import pencil from 'src/assets/icons/modifier.svg';
import bin from 'src/assets/icons/delete.svg';
import 'src/components/Admin/admin.scss';

const UpdateRecipeForm = ({
  tags, ingredients, recipe, updateRecipe, deleteRecipe,
}) => (
  // I'm going to create a local state here to avoid having too many dispatches between my component
  // and the store. The dispatch will only happen at the submit of the form.
  function localState() {
    const [title, setTitle] = useState(recipe.title);
    const [picture, setPicture] = useState(recipe.picture);
    const [type, setType] = useState(recipe.type);
    const [description, setDescription] = useState(recipe.description);
    const [seasons, setSeasons] = useState(recipe.seasons);
    const [recipeTags, setRecipeTags] = useState(recipe.tags);
    const [difficulty, setDifficulty] = useState(recipe.difficulty);
    const [nutriScore, setNutriScore] = useState(recipe.nutri_score);
    const [preparationTime, setPreparationTime] = useState(recipe.preparation_time);
    const [bakingTime, setBakingTime] = useState(recipe.baking_time);
    const [recipeIngredients, setRecipeIngredients] = useState(recipe.ingredients);
    const [newIngredient, setNewIngredient] = useState({});
    const [instructions, setInstructions] = useState(recipe.instructions);
    const [newInstruction, setNewInstruction] = useState('');

    return (
      <form className="update__recipe__form">
        {/* I am creating divs 1-2-3-4 to help style the form for desktop mode */}
        <div className="update__recipe__form__div__1">
          <label className="update__recipe__form__title__label">
            Titre
            <input
              className="update__recipe__form__title__input"
              type="text"
              placeholder="Titre"
              value={title}
              onChange={(event) => {
                setTitle(event.target.value);
              }}
            />
          </label>

          <label className="update__recipe__form__image__label">
            Image
            <input
              className="update__recipe__form__image__input"
              type="file"
              placeholder="Choisir votre fichier"
              value={picture}
              onChange={(event) => {
                setPicture(event.target.value);
              }}
            />
          </label>

          <label className="update__recipe__form__type__label">
            Catégorie
            <input
              className="update__recipe__form__type__input"
              type="text"
              placeholder="Entrée, Plat ou Dessert"
              value={type}
              onChange={(event) => {
                setType(event.target.value);
              }}
            />
          </label>

          <label className="update__recipe__form__description__label">
            Description
            <input
              className="update__recipe__form__description__input"
              type="text"
              placeholder="Veuillez décrire brièvement la recette."
              value={description}
              onChange={(event) => {
                setDescription(event.target.value);
              }}
            />
          </label>
        </div>

        <div className="update__recipe__form__div__2">
          <p className="update__recipe__form__div__2__p">Saison</p>
          <div className="update__recipe__form__div__2__checkbox">
            {/* Here if the array seasons contains the number 1 a checked input is displayed */}
            {seasons.indexOf(1) > -1
            && (
            <input
              type="checkbox"
              name="Printemps"
              checked
              // When the user unchecks the input a new array is rendered without the number 1
              onChange={setSeasons((seasons.filter((item) => item !== 1)))}
            />
            )}
            {/* Here if the array seasons does not contain the number 1
            an unchecked input is displayed */}
            {seasons.indexOf(1) === -1
            && (
            <input
              type="checkbox"
              name="Printemps"
            // When the user checks the input a new array is rendered with the number 1 added
              onChange={setSeasons(seasons.push(1))}
            />
            )}
            <label htmlFor="Printemps">Printemps</label>
          </div>
          <div className="update__recipe__form__div__2__checkbox">
            {/* Here if the array seasons contains the number 2 a checked input is displayed */}
            {seasons.indexOf(2) > -1
            && (
            <input
              type="checkbox"
              name="Été"
              checked
              // When the user unchecks the input a new array is rendered without the number 2
              onChange={setSeasons((seasons.filter((item) => item !== 2)))}
            />
            )}
            {/* Here if the array seasons does not contain the number 2
            an unchecked input is displayed */}
            {seasons.indexOf(2) === -1
            && (
            <input
              type="checkbox"
              name="Été"
            // When the user checks the input a new array is rendered with the number 2 added
              onChange={setSeasons(seasons.push(2))}
            />
            )}
            <label htmlFor="Été">Été</label>
          </div>
          <div className="update__recipe__form__div__2__checkbox">
            {/* Here if the array seasons contains the number 3 a checked input is displayed */}
            {seasons.indexOf(3) > -1
            && (
            <input
              type="checkbox"
              name="Automne"
              checked
              // When the user unchecks the input a new array is rendered without the number 3
              onChange={setSeasons((seasons.filter((item) => item !== 3)))}
            />
            )}
            {/* Here if the array seasons does not contain the number 3
            an unchecked input is displayed */}
            {seasons.indexOf(3) === -1
            && (
            <input
              type="checkbox"
              name="Automne"
            // When the user checks the input a new array is rendered with the number 3 added
              onChange={setSeasons(seasons.push(3))}
            />
            )}
            <label htmlFor="Automne">Automne</label>
          </div>
          <div className="update__recipe__form__div__2__checkbox">
            {/* Here if the array seasons contains the number 4 a checked input is displayed */}
            {seasons.indexOf(4) > -1
            && (
            <input
              type="checkbox"
              name="Hiver"
              checked
              // When the user unchecks the input a new array is rendered without the number 4
              onChange={setSeasons((seasons.filter((item) => item !== 4)))}
            />
            )}
            {/* Here if the array seasons does not contain the number 4
            an unchecked input is displayed */}
            {seasons.indexOf(4) === -1
            && (
            <input
              type="checkbox"
              name="Hiver"
            // When the user checks the input a new array is rendered with the number 4 added
              onChange={setSeasons(seasons.push(4))}
            />
            )}
            <label htmlFor="Hiver">Hiver</label>
          </div>

          <p className="update__recipe__form__div__2__p">Labels</p>
          {/* Here I am mapping through the array of all existing tags
           and for each displaying a checkbox that will be checked or not according to
           the fact that this tag is present or not in the array of tags associated with
           the current recipe */}
          {tags.map((tag) => (
            <div className="update__recipe__form__div__2__checkbox" key={tag}>
              {recipeTags.filter((word) => word === tag)
              && (
              <input
                type="checkbox"
                name={tag}
              // When the user unchecks the input a new array is rendered
              // without the corresponding tag
                onChange={setRecipeTags((recipeTags.filter((item) => item !== tag)))}
                checked
              />
              )}
              {recipeTags.filter((word) => word !== tag)
              && (
              <input
                type="checkbox"
                name={tag}
              // When the user checks the input a new array is rendered
              // with the corresponding tag added
                onChange={setRecipeTags((recipeTags.push(tag)))}
              />
              )}
              <label htmlFor={tag}>{tag}</label>
            </div>
          ))}
        </div>

        <div className="update__recipe__form__div__3">
          <p className="update__recipe__form__div__3__p">Difficulté</p>
          <select name="difficulties">
            {difficulty === 'Facile'
            && (
            <option
              value="Facile"
              selected
              onChange={setDifficulty('')}
            >Facile
            </option>
            )}
            {difficulty !== 'Facile'
            && (
            <option
              value="Facile"
              onChange={setDifficulty('Facile')}
            >Facile
            </option>
            )}

            {difficulty === 'Moyenne'
            && (
            <option
              value="Moyenne"
              selected
              onChange={setDifficulty('')}
            >Moyenne
            </option>
            )}
            {difficulty !== 'Moyenne'
            && (
            <option
              value="Moyenne"
              onChange={setDifficulty('Moyenne')}
            >Moyenne
            </option>
            )}

            {difficulty === 'Difficile'
            && (
            <option
              value="Difficile"
              selected
              onChange={setDifficulty('')}
            >Difficile
            </option>
            )}
            {difficulty !== 'Difficile'
            && (
            <option
              value="Difficile"
              onChange={setDifficulty('Difficile')}
            >Difficile
            </option>
            )}
          </select>

          <p className="update__recipe__form__div__3__p">Nutri Score</p>
          <select name="scores">
            {nutriScore === 'A'
            && (
            <option
              value="A"
              selected
              onChange={setNutriScore('')}
            >A
            </option>
            )}
            {nutriScore !== 'A'
            && (
            <option
              value="A"
              onChange={setNutriScore('A')}
            >A
            </option>
            )}
            {nutriScore === 'B'
            && (
            <option
              value="B"
              selected
              onChange={setNutriScore('')}
            >B
            </option>
            )}
            {nutriScore !== 'B'
            && (
            <option
              value="B"
              onChange={setNutriScore('B')}
            >B
            </option>
            )}
            {nutriScore === 'C'
            && (
            <option
              value="C"
              selected
              onChange={setNutriScore('')}
            >C
            </option>
            )}
            {nutriScore !== 'C'
            && (
            <option
              value="C"
              onChange={setNutriScore('C')}
            >C
            </option>
            )}
            {nutriScore === 'D'
            && (
            <option
              value="D"
              selected
              onChange={setNutriScore('')}
            >D
            </option>
            )}
            {nutriScore !== 'D'
            && (
            <option
              value="D"
              onChange={setNutriScore('D')}
            >D
            </option>
            )}
            {nutriScore === 'E'
            && (
            <option
              value="E"
              selected
              onChange={setNutriScore('')}
            >E
            </option>
            )}
            {nutriScore !== 'E'
            && (
            <option
              value="E"
              onChange={setNutriScore('E')}
            >E
            </option>
            )}
          </select>

          <p className="update__recipe__form__div__3__p">Temps de préparation</p>
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
          <span className="update__recipe__form__div__3__span">Minutes</span>

          <p className="update__recipe__form__div__3__p">Temps de cuisson</p>
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
          <span className="update__recipe__form__div__3__span">Minutes</span>

        </div>

        <div className="update__recipe__form__div__4">
          <p className="update__recipe__form__div__4__p">Ingrédients</p>
          {recipeIngredients.map((ingredient) => (
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
                onClick={
                  setRecipeIngredients(
                    recipeIngredients.filter((element) => element.id !== ingredient.id),
                  )
                }
              >
                <img className="update__recipe__form__div__4__delete__icon" href={bin} alt="bin" />
              </button>
            </div>
          ))}

          <select name="ingredients">
            {ingredients.map((ingredient) => (
              <option
                value={ingredient.name}
                onChange={setNewIngredient(newIngredient.push(ingredient))}
              >{ingredient.name}
              </option>
            ))}
          </select>
          <input
            type="text"
            placeholder="Unité"
            onChange={(event) => {
              setNewIngredient(
                newIngredient.unit = event.target.value,
              );
            }}
          />
          <input
            type="text"
            placeholder="Quantité"
            onChange={(event) => {
              setNewIngredient(
                newIngredient.quantity = event.target.value,
              );
            }}
          />
          {/* I am pushing the ingredient, its unit and its quantity into newIngredient,
          then at button click I push the newIngredient object into RecipeIngredients array
          before reseting the newIgredient to an empty object */}
          <button
            type="button"
            onClick={setRecipeIngredients(
              recipeIngredients.push(newIngredient),
            ).then(() => {
              setNewIngredient({});
            })}
          >Ajouter un ingrédient
          </button>

          <p className="update__recipe__form__div__4__p">Étapes de préparation</p>
          <ol>
            {instructions.map((instruction) => (
              <li key={instruction}>{instruction}
                <button
                  className="update__recipe__form__div__4__delete__button"
                  type="button"
                  onClick={setInstructions(instructions.filter((item) => item !== instruction))}
                >
                  <img className="update__recipe__form__div__4__delete__icon" href={bin} alt="bin" />
                </button>
              </li>
            ))}
          </ol>
          <input
            className="update__recipe__form__div__4__input"
            type="text"
            placeholder="Veuillez saisir une étape"
            onChange={(event) => {
              setNewInstruction(event.target.value);
            }}
          />
          {/* I am pushing the instruction that the user typed into newInstruction,
          then at button click I push the newInstruction string into Instructions array
          before reseting the newInstruction to empty string */}
          <button
            type="button"
            onClick={setInstructions(
              instructions.push(newInstruction),
            ).then(() => {
              setNewInstruction('');
            })}
          >Ajouter une étape
          </button>

        </div>

        <input
          className="update__recipe__form__submit update"
          type="submit"
          value="Modifier cette recette"
          onClick={updateRecipe(
            title,
            picture,
            type,
            description,
            seasons,
            recipeTags,
            difficulty,
            nutriScore,
            preparationTime,
            bakingTime,
            recipeIngredients,
            instructions,
          )}
        />
        <input
          className="update__recipe__form__submit delete"
          type="submit"
          value="Supprimer cette recette"
          onClick={deleteRecipe}
        />

      </form>
    );
  }

);

UpdateRecipeForm.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  ingredients: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    category: PropTypes.string,
  })).isRequired,
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
    seasons: PropTypes.arrayOf(PropTypes.number),
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
  updateRecipe: PropTypes.func.isRequired,
  deleteRecipe: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  recipe: state.admin.recipe,
  tags: state.admin.tags,
  ingredients: state.admin.ingredients,
});

const mapDispatchToProps = (dispatch) => ({
  // Here I am passing down all the info stocked in the local state
  // to make the API update request
  updateRecipe: (
    title,
    picture,
    seasons,
    recipeTags,
    difficulty,
    nutriScore,
    preparationTime,
    bakingTime,
    recipeIngredients,
    instructions,
    event,
  ) => {
    event.preventDefault();
    dispatch({
      type: 'UPDATE_RECIPE',
      payload: {
        title,
        picture,
        seasons,
        recipeTags,
        difficulty,
        nutriScore,
        preparationTime,
        bakingTime,
        recipeIngredients,
        instructions,
      },
    });
  },

  searchByEmail: (event) => {
    event.preventDefault();
    dispatch({
      type: 'DELETE_RECIPE',
    });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(UpdateRecipeForm);
