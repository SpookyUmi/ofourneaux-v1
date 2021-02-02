import React from 'react';
import { connect } from 'react-redux';
import { NavLink, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import nameAccordingToCurrentRoute from 'src/utils/nameAccordingToCurrentRoute';

import Form from './Form';

import './admin.scss';

const Admin = ({ id }) => (
  <div className="admin">
    <div className="admin__desktop__subheader">
      <h2 className="admin__desktop__subheader__title">Espace administrateur</h2>
    </div>
    <div className="admin__desktop__tabs">
      <NavLink className="admin__desktop__tab button__style" exact to="/admin/ajout-recette">Ajouter une recette</NavLink>
      <NavLink className="admin__desktop__tab button__style" exact to="/admin/gestion-labels">Gérer les labels</NavLink>
      <NavLink className="admin__desktop__tab button__style" exact to="/admin/gestion-utilisateurs">Gérer les utilisateurs</NavLink>
      <NavLink className="admin__desktop__tab button__style" exact to="/profil/">Retour à mon profil</NavLink>
    </div>
    <h3 className="admin__subheader">{nameAccordingToCurrentRoute(window.location.pathname, id)}</h3>
    <Form />
  </div>
);

Admin.propTypes = {
  id: PropTypes.number,
};

Admin.defaultProps = {
  id: null,
};

const mapStateToProps = (state) => ({
  id: state.recipe.id,
});

const container = withRouter(Admin);

export default connect(mapStateToProps, null)(container);
