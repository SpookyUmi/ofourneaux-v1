// YARN
import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

// Components
import Header from 'src/components/Header';
import Generator from 'src/components/Generator';
import About from 'src/components/About';
import Contact from 'src/components/Contact';
import ShoppingList from 'src/components/ShoppingList';
import HomePresentation from 'src/components/App/HomePresentation';
import Inscription from 'src/components/Inscription';
import Connection from 'src/components/Connection';
import Profile from 'src/components/Profile';
import Recipe from 'src/components/Recipe';
import Recipes from 'src/components/Recipes';
import NavBar from 'src/components/NavBar';
import Footer from 'src/components/Footer';
import Admin from 'src/components/Admin';

// SCSS
import './styles.scss';
import '../../styles/index.scss';

const App = ({ recipes }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="app">
      {/* TODO: switch between Header and NavBar according to responsive : set a property in our state ? */}
      <Header setIsOpen={setIsOpen} isOpen={isOpen} />
      <NavBar setIsOpen={setIsOpen} isOpen={isOpen} />
      <Route exact path="/">
        {/* TODO: Change the components thanks to Links */}
        <HomePresentation />
        <Generator />
      </Route>
      {/* TODO: Link to /a-propos, to /contact */}
      <Route exact path="/a-propos">
        <About />
      </Route>
      <Route exact path="/contact">
        <Contact />
      </Route>
      <Route exact path="/profil/liste-de-courses">
        <ShoppingList />
      </Route>
      <Route exact path="/profil/recettes-favorites">
        <Recipes />
      </Route>
      <Route exact path="/inscription">
        <Inscription />
      </Route>
      <Route exact path="/connexion">
        <Connection />
      </Route>
      <Route exact path="/profil">
        <Profile />
      </Route>
      <Route exact path="/recettes">
        <Recipes recipes={recipes} />
      </Route>
      <Route exact path="/recettes/:slug">
        {/* use a "hasData" boolean to display the page only if you retrive a lot of data */}
        <Recipe recipes={recipes} />
      </Route>
      <Route
        exact
        path={['/admin/ajout-recette', '/admin/modification-recette/:id', '/admin/gestion-labels', '/admin/gestion-utilisateurs']}>
        <Admin />
      </Route>
      <Footer className="footer" />
    </div>
  );
};

App.propTypes = {
  recipes: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  recipes: state.recipes.recipes,
});

export default connect(mapStateToProps, null)(App);
