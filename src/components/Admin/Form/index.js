import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import AddRecipeForm from './AddRecipeForm';
import UpdateRecipeForm from './UpdateRecipeForm';
import TagForm from './TagForm';
import UserForm from './UserForm';

// import './admin.scss';

const Form = () => (
  <div className="form">
    <Route exact path="/admin/ajout-recettes">
      <AddRecipeForm />
    </Route>
    <Route exact path="/admin/modification-recettes">
      <UpdateRecipeForm />
    </Route>
    <Route exact path="/admin/gestion-labels">
      <TagForm />
    </Route>
    <Route exact path="/admin/gestion-utilisateurs">
      <UserForm />
    </Route>
  </div>

);

export default Form;
