import React from 'react';
import { Route } from 'react-router-dom';

import AddRecipeForm from './AddRecipeForm';
import UpdateRecipeForm from './UpdateRecipeForm';
import TagForm from './TagForm';
import IngredientForm from './IngredientForm';
import UserForm from './UserForm';

// This component Form will show the form corresponding to the route
// (AddRecipe, UpdateRecipe, TagForm or UserForm, IngredientForm).
const Form = () => (
  <div className="form">
    <Route exact path="/admin/ajout-recette">
      <AddRecipeForm />
    </Route>
    <Route path="/admin/modification-recette">
      <UpdateRecipeForm />
    </Route>
    <Route exact path="/admin/gestion-labels">
      <TagForm />
    </Route>
    <Route exact path="/admin/ajout-ingredient">
      <IngredientForm />
    </Route>
    <Route exact path="/admin/gestion-utilisateurs">
      <UserForm />
    </Route>
  </div>

);

export default Form;
