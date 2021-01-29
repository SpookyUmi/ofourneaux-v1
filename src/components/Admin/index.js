import React from 'react';
import PropTypes from 'prop-types';

import nameAccordingToCurrentRoute from 'src/utils/nameAccordingToCurrentRoute';
// https://stackoverflow.com/questions/52392765/how-to-change-state-based-on-route-change-in-react-router

import Form from './Form';

// import './admin.scss';

// TODO get currentRoute value from React-router to know which route we're on.
const Admin = ({ currentRoute }) => (
  <div className="admin">
    {/* TODO media queries =>
    Header, Footer, desktop__subheader, desktop__tabs only appear in desktop,
    Navbar, mobile__subheader only appear in mobile */}
    <div className="admin__desktop__subheader">
      <h2 className="admin__desktop__subheader__title">Espace administrateur</h2>
      <a className="admin__desktop__subheader__button" href="/profil/:slug">Retour à mon profil</a>
    </div>
    <div className="admin__desktop__tabs">
      <a className="admin__desktop__tabs__recipes__add" href="/admin/ajout-recettes">Ajouter une recette</a>
      <a className="admin__desktop__tabs__recipes__update" href="/admin/modification-recettes">Modifier/Supprimer une recette</a>
      <a className="admin__desktop__tabs__labels" href="/admin/gesttion-labels">Gérer les labels</a>
      <a className="admin__desktop__tabs__users" href="/admin/gestion-utilisateurs">Gérer les utilisateurs</a>
    </div>
    <div className="admin__mobile__subheader">
      <h2 className="admin__mobile__subheader__title">O'Fourneaux</h2>
      <h3 className="admin__mobile__subheader__tab">{nameAccordingToCurrentRoute(currentRoute)}</h3>
    </div>
    <Form />
  </div>
);

Admin.propTypes = {
  currentRoute: PropTypes.string.isRequired,
};

export default Admin;
