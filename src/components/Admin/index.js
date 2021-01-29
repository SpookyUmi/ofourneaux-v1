import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { NavLink, withRouter } from 'react-router-dom';

import nameAccordingToCurrentRoute from 'src/utils/nameAccordingToCurrentRoute';

import Form from './Form';

// import './admin.scss';

const Admin = ({ currentRoute, changeCurrentRoute }) => {

  console.log(currentRoute);

  return <div className="admin">
    {/* TODO media queries =>
    Header, Footer, desktop__subheader, desktop__tabs only appear in desktop,
    Navbar, mobile__subheader only appear in mobile */}
    <div className="admin__desktop__subheader">
      <h2 className="admin__desktop__subheader__title">Espace administrateur</h2>
      <NavLink className="admin__desktop__subheader__button" exact to="/profil/:slug">Retour à mon profil</NavLink>
    </div>
    <div className="admin__desktop__tabs">
      <NavLink exact to="/admin/ajout-recettes" className="admin__desktop__tabs__recipes__add" onClick={changeCurrentRoute}>Ajouter une recette</NavLink>
      <NavLink className="admin__desktop__tabs__recipes__update" exact to="/admin/modification-recettes" onClick={changeCurrentRoute}>Modifier/Supprimer une recette</NavLink>
      <NavLink className="admin__desktop__tabs__labels" exact to="/admin/gestion-labels" onClick={changeCurrentRoute}>Gérer les labels</NavLink>
      <NavLink className="admin__desktop__tabs__users" exact to="/admin/gestion-utilisateurs" onClick={changeCurrentRoute}>Gérer les utilisateurs</NavLink>
    </div>
    <div className="admin__mobile__subheader">
      <h2 className="admin__mobile__subheader__title">O'Fourneaux</h2>
      <h3 className="admin__mobile__subheader__tab">{nameAccordingToCurrentRoute(currentRoute)}</h3>
    </div>
      <Form />
  </div>
};

Admin.propTypes = {
  currentRoute: PropTypes.string.isRequired,
  changeCurrentRoute: PropTypes.func.isRequired,
};

const mapStateToProps = (state, ownProps) => ({
  currentRoute: state.admin.currentRoute,
});

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    changeCurrentRoute: () => {
      // console.log(location);
      // console.log(ownProps.history.location.pathname);
      dispatch({
        type: 'CHANGE_CURRENT_ROUTE',
        currentRoute: location
      });
    },
  }
};

let container = connect(mapStateToProps, mapDispatchToProps)(Admin);

container = withRouter(container);

export default container;
