/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';

// import pencil from 'src/assets/icons/modifier.svg';
import bin from 'src/assets/icons/delete.svg';
import 'src/components/Admin/admin.scss';

// TODO add props (controlled field, handlesubmit and props)
const UpdateRecipeForm = ({ tags, ingredients, recipe }) => (
  <form className="update__recipe__form">
    {/* I am creating divs 1-2-3-4 to help style the form for desktop mode */}
    <div className="update__recipe__form__div__1">
      <label className="update__recipe__form__title__label">
        Titre
        <input className="update__recipe__form__title__input" type="text" placeholder="Titre" value={recipe.title} />
      </label>

      <label className="update__recipe__form__image__label">
        Image
        <input className="update__recipe__form__image__input" type="file" placeholder="Choisir votre fichier" value={recipe.picture} />
      </label>
    </div>

    <div className="update__recipe__form__div__2">
      <p className="update__recipe__form__div__2__p">Saison</p>
      <div className="update__recipe__form__div__2__checkbox">
        {recipe.season === 'Printemps' && <input type="checkbox" name="Printemps" checked />}
        {recipe.season !== 'Printemps' && <input type="checkbox" name="Printemps" />}
        <label htmlFor="Printemps">Printemps</label>
      </div>
      <div className="update__recipe__form__div__2__checkbox">
        {recipe.season === 'Été' && <input type="checkbox" name="Été" checked />}
        {recipe.season !== 'Été' && <input type="checkbox" name="Été" />}
        <label htmlFor="Été">Été</label>
      </div>
      <div className="update__recipe__form__div__2__checkbox">
        {recipe.season === 'Automne' && <input type="checkbox" name="Automne" checked />}
        {recipe.season !== 'Automne' && <input type="checkbox" name="Automne" />}
        <label htmlFor="Automne">Automne</label>
      </div>
      <div className="update__recipe__form__div__2__checkbox">
        {recipe.season === 'Hiver' && <input type="checkbox" name="Hiver" checked />}
        {recipe.season !== 'Hiver' && <input type="checkbox" name="Hiver" />}
        <label htmlFor="Hiver">Hiver</label>
      </div>

      <p className="update__recipe__form__div__2__p">Labels</p>
      {tags.map((tag) => (
        <div className="update__recipe__form__div__2__checkbox" key={tag}>
          {recipe.tags.filter((word) => word === tag) && <input type="checkbox" name={tag} checked />}
          {recipe.tags.filter((word) => word !== tag) && <input type="checkbox" name={tag} />}
          <label htmlFor={tag}>{tag}</label>
        </div>
      ))}
    </div>

    <div className="update__recipe__form__div__3">
      <p className="update__recipe__form__div__3__p">Difficulté</p>
      <select name="difficulties">
        {recipe.difficulty === 'Facile' && <option value="Facile" selected>Facile</option>}
        {recipe.difficulty !== 'Facile' && <option value="Facile">Facile</option>}
        {recipe.difficulty === 'Moyenne' && <option value="Moyenne" selected>Moyenne</option>}
        {recipe.difficulty !== 'Moyenne' && <option value="Moyenne">Moyenne</option>}
        {recipe.difficulty === 'Difficile' && <option value="Difficile" selected>Difficile</option>}
        {recipe.difficulty !== 'Difficile' && <option value="Difficile">Difficile</option>}
      </select>

      <p className="update__recipe__form__div__3__p">Nutri Score</p>
      <select name="scores">
        {recipe.nutri_score === 'A' && <option value="A" selected>A</option>}
        {recipe.nutri_score !== 'A' && <option value="A">A</option>}
        {recipe.nutri_score === 'B' && <option value="B" selected>B</option>}
        {recipe.nutri_score !== 'B' && <option value="B">B</option>}
        {recipe.nutri_score === 'C' && <option value="C" selected>C</option>}
        {recipe.nutri_score !== 'C' && <option value="C">C</option>}
        {recipe.nutri_score === 'D' && <option value="D" selected>D</option>}
        {recipe.nutri_score !== 'D' && <option value="D">D</option>}
        {recipe.nutri_score === 'E' && <option value="E" selected>E</option>}
        {recipe.nutri_score !== 'E' && <option value="E">E</option>}
      </select>

      <p className="update__recipe__form__div__3__p">Temps de préparation</p>
      <input
        value={recipe.preparation_time}
        type="number"
        name="time"
        min="0"
        max="240"
      />
      <span className="update__recipe__form__div__3__span">Minutes</span>

      <p className="update__recipe__form__div__3__p">Temps de cuisson</p>
      <input
        value={recipe.baking_time}
        type="number"
        name="time"
        min="0"
        max="240"
      />
      <span className="update__recipe__form__div__3__span">Minutes</span>

    </div>

    <div className="update__recipe__form__div__4">
      <p className="update__recipe__form__div__4__p">Ingrédients</p>
      {recipe.ingredients.map((ingredient) => (
        <div key={ingredient.id}>
          <span className="update__recipe__form__div__4__quantity">{ingredient.quantity}</span>
          <span className="update__recipe__form__div__4__unit">{ingredient.unit}</span>
          <span className="update__recipe__form__div__4__name">{ingredient.name}</span>
          {/* TODO handle onclick event to delete */}
          {/* <button className="update__recipe__form__div__4__edit__button" type="button">
            <img className="update__recipe__form__div__4__edit__icon" href={pencil} alt="pencil" />
          </button> */}
          <button className="update__recipe__form__div__4__delete__button" type="button">
            <img className="update__recipe__form__div__4__delete__icon" href={bin} alt="bin" />
          </button>
        </div>
      ))}
      <select name="ingredients">
        <option value="">Ingrédient</option>
        <input type="text" placeholder="Unité" />
        <input type="text" placeholder="Quantité" />
        {ingredients.map((ingredient) => (
          <option value={ingredient.name}>{ingredient.name}</option>
        ))}
      </select>
      {/* TODO handle click of this button, it must add the ingredient/unit/qty to
      an array in state, then reset so that the user may add another */}
      <button type="button">Ajouter un ingrédient</button>

      <p className="update__recipe__form__div__4__p">Étapes de préparation</p>
      <ol>
        {recipe.instructions.map((instruction) => (
          <li>{instruction}{/* TODO handle onclick event to delete */}
            <button className="update__recipe__form__div__4__delete__button" type="button">
              <img className="update__recipe__form__div__4__delete__icon" href={bin} alt="bin" />
            </button>
          </li>
        ))}
      </ol>
      <input className="update__recipe__form__div__4__input" type="text" placeholder="Veuillez saisir une étape" />
      {/* TODO handle click of this button, it must add the step to
      an array in state, then reset so that the user may add another */}
      <button type="button">Ajouter une étape</button>

    </div>

    <input className="update__recipe__form__submit update" type="submit" value="Modifier cette recette" />
    <input className="update__recipe__form__submit delete" type="submit" value="Supprimer cette recette" />
  </form>
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
    season: PropTypes.string,
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

export default UpdateRecipeForm;
