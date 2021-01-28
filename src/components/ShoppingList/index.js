// == Import npm
import React, { useState } from 'react';
import PropTypes from 'prop-types';

// == Import
import './styles.scss';
import recipes from 'src/data/recipes';

import CardRecipe from 'src/components/CardRecipe';
import GeneratedList from './GeneratedList';
import CustomList from './CustomList';

import categories from 'src/data/categories';

// == Composant
const ShoppingList = () => {

  const [userCategories, setUserCategories] = useState([ {id: 56, name: 'Condiments'} ]);
  const [userCategory, setUserCategory] = useState("");
  const [isClicked, setIsClicked] = useState(false);

  return (
    <div className="container">
      <h2>Recettes sélectionnées</h2>
      <section className="recipes">
        {recipes.map((recipe) => (
          <CardRecipe
            key={recipe.id}
            // We provide every keys of `recipe` object
            // to CardRecipe props
            {...recipe}
          />
        ))}
      </section>
      <h2>Liste de courses</h2>
      <section className="lists">
        {categories.map((category) => (
          <GeneratedList
            key={category.id}
            {...category}
          />
        ))}
        <h2>Liste personnalisée</h2>
        {userCategories.map((category) => (
          <CustomList
            key={category.name}
            {...category}
            userCategories={userCategories}
            setUserCategories={setUserCategories}
            isClicked={isClicked}
            setIsClicked={setIsClicked}
          />
        ))}
        <form onSubmit={(event) => {
          event.preventDefault();
          setUserCategories([...userCategories,
            {
              name: userCategory
            }
          ]);
          setUserCategory("");
        }}>
          <input type="text" id="category" name="category" value={userCategory}
            onChange={(event) => {
              event.preventDefault();
              setUserCategory(event.target.value);
            }}
          />
          <button type="button"
            onClick={() => {
              setUserCategories([...userCategories,
                {
                  name: userCategory
                }
              ]);
              setUserCategory("");
            }}
          >
            Ajouter une catégorie
          </button>
        </form>
      </section>
    </div>
  );
};

// == Export
export default ShoppingList;
