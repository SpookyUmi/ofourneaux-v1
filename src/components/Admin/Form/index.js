import React from 'react';
import PropTypes from 'prop-types';

import AddRecipeForm from './AddRecipeForm';
import UpdateRecipeForm from './UpdateRecipeForm';
import TagForm from './TagForm';
import UserForm from './UserForm';

// import './admin.scss';

// TODO get currentRoute value from React-router to know which route we're on.
const Form = ({ currentRoute }) => (
  <div className="form">
    {currentRoute === '/admin/ajout-recettes' && <AddRecipeForm />}
    {currentRoute === '/admin/modification-recettes' && <UpdateRecipeForm />}
    {currentRoute === '/admin/gestion-label' && <TagForm />}
    {currentRoute === '/admin/gestion-utilisateurs' && <UserForm />}
  </div>
);

Form.propTypes = {
  currentRoute: PropTypes.string.isRequired,
};

export default Form;
