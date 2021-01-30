import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';

import nameAccordingToCurrentRoute from 'src/utils/nameAccordingToCurrentRoute';

import Form from './Form';

import './admin.scss';

const Admin = () => (
  <div className="admin">
    {/* TODO media queries =>
    Header, Footer, desktop__subheader, desktop__tabs only appear in desktop,
    Navbar, mobile__subheader only appear in mobile */}
    <div className="admin__desktop__subheader">
      <h2 className="admin__desktop__subheader__title">Espace administrateur</h2>
    </div>
    <div className="admin__desktop__tabs">
      <NavLink exact to="/admin/ajout-recettes" className="admin__desktop__tab">Ajouter une recette</NavLink>
      <NavLink className="admin__desktop__tab" exact to="/admin/modification-recettes">Modifier/Supprimer une recette</NavLink>
      <NavLink className="admin__desktop__tab" exact to="/admin/gestion-labels">Gérer les labels</NavLink>
      <NavLink className="admin__desktop__tab" exact to="/admin/gestion-utilisateurs">Gérer les utilisateurs</NavLink>
      <NavLink className="admin__desktop__tab back__to__profile" exact to="/profil/:slug">Retour à mon profil</NavLink>
    </div>
    <h3 className="admin__subheader">{nameAccordingToCurrentRoute(window.location.pathname)}</h3>
    <Form />
  </div>
);

const container = withRouter(Admin);

export default container;
