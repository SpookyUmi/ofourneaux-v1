/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';

import 'src/components/Admin/admin.scss';

// TODO add props (controlled field, handlesubmit and props)
const AddRecipeForm = ({ tags, ingredients }) => (
  <form className="add__recipe__form">
    {/* I am creating divs 1-2-3-4 to help style the form for desktop mode */}
    <div className="add__recipe__form__div__1">
      <label className="add__recipe__form__title__label">
        Titre
        <input className="add__recipe__form__title__input" type="text" placeholder="Titre" />
      </label>

      <label className="add__recipe__form__image__label">
        Image
        <input className="add__recipe__form__image__input" type="file" placeholder="Choisir votre fichier" />
      </label>

      <label className="add__recipe__form__type__label">
        Catégorie
        <input className="add__recipe__form__type__input" type="text" placeholder="Entrée, Plat ou Dessert" />
      </label>

      <label className="add__recipe__form__description__label">
        Description
        <input className="add__recipe__form__description__input" type="text" placeholder="Veuillez décrire brièvement la recette." />
      </label>
    </div>

    <div className="add__recipe__form__div__2">
      <p className="add__recipe__form__div__2__p">Saison</p>
      <div className="add__recipe__form__div__2__checkbox">
        <input type="checkbox" name="Printemps" />
        <label htmlFor="Printemps">Printemps</label>
      </div>
      <div className="add__recipe__form__div__2__checkbox">
        <input type="checkbox" name="Eté" />
        <label htmlFor="Eté">Eté</label>
      </div>
      <div className="add__recipe__form__div__2__checkbox">
        <input type="checkbox" name="Automne" />
        <label htmlFor="Automne">Automne</label>
      </div>
      <div className="add__recipe__form__div__2__checkbox">
        <input type="checkbox" name="Hiver" />
        <label htmlFor="Hiver">Hiver</label>
      </div>

      <p className="add__recipe__form__div__2__p">Labels</p>
      {tags.map((tag) => (
        <div className="add__recipe__form__div__2__checkbox" key={tag}>
          <input type="checkbox" name={tag} />
          <label htmlFor={tag}>{tag}</label>
        </div>
      ))}
    </div>

    <div className="add__recipe__form__div__3">
      <p className="add__recipe__form__div__3__p">Difficulté</p>
      <select name="difficulties">
        <option value="">----</option>
        <option value="Facile">Facile</option>
        <option value="Moyenne">Moyenne</option>
        <option value="Difficile">Difficile</option>
      </select>

      <p className="add__recipe__form__div__3__p">Nutri Score</p>
      <select name="scores">
        <option value="">----</option>
        <option value="A">A</option>
        <option value="B">B</option>
        <option value="C">C</option>
        <option value="D">D</option>
        <option value="E">E</option>
      </select>

      <p className="add__recipe__form__div__3__p">Temps de préparation</p>
      <input
        type="number"
        name="time"
        min="0"
        max="240"
      />
      <span className="add__recipe__form__div__3__span">Minutes</span>

      <p className="add__recipe__form__div__3__p">Temps de cuisson</p>
      <input
        type="number"
        name="time"
        min="0"
        max="240"
      />
      <span className="add__recipe__form__div__3__span">Minutes</span>

    </div>

    <div className="add__recipe__form__div__4">
      <p className="add__recipe__form__div__4__p">Ingrédients</p>
      <select name="ingredients">
        <option value="">Ingrédient</option>
        {ingredients.map((ingredient) => (
          <option value={ingredient.name}>{ingredient.name}</option>
        ))}
      </select>
      <input type="text" placeholder="Unité" />
      <input type="number" min="0" placeholder="Quantité" />
      {/* TODO handle click of this button, it must add the ingredient/unit/qty to
      an array in state, then reset so that the user may add another */}
      <button type="button">Ajouter un ingrédient</button>

      <label className="add__recipe__form__div__4__label">
        Etapes de préparation
        <input className="add__recipe__form__div__4__input" type="text" placeholder="Veuillez saisir une étape" />
      </label>
      {/* TODO handle click of this button, it must add the step to
      an array in state, then reset so that the user may add another */}
      <button type="button">Ajouter une étape</button>

    </div>

    <input className="add__recipe__form__submit" type="submit" value="Ajouter cette recette" />
  </form>
);

AddRecipeForm.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  ingredients: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    category: PropTypes.string,
  })).isRequired,
};

export default AddRecipeForm;
