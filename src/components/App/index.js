// == Import npm
import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Redirect, Route } from 'react-router-dom';

// == Import
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

// SCSS
import './styles.scss';
import '../../styles/index.scss'

const App = ({ isLogged, recipes }) => {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="app">
        {/* TODO: switch between Header and NavBar according to responsive : set a property in our state ? */}
        <Header />
        <NavBar />
        <Route exact path='/'>
          {/* TODO: Change the components thanks to Links */}
          <HomePresentation />
          <Generator />
        </Route>
        {/* TODO: Link to /a-propos, to /contact */}
        <Route exact path='/a-propos'>
          <About />
        </Route>
        <Route exact path='/contact'>
          <Contact />
        </Route>
        <Route exact path='/profil/liste-de-courses'>
          <ShoppingList quantity={quantity} setQuantity={setQuantity} />
        </Route>
        <Route exact path='/inscription'>
          <Inscription />
        </Route>
        <Route exact path='/connexion'>
          <Connection />
        </Route>
        <Route exact path='/profil'>
          <Profile />
        </Route>
        <Route exact path='/recettes'>
          <Recipes recipes={recipes} />
        </Route>
        <Route exact path='/recettes/:slug'>
          <Recipe recipes={recipes} />
        </Route>
        <Footer className="footer"/>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isLogged: state.auth.isLogged,
  recipes: state.recipes.recipes
});

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
