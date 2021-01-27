// == Import npm
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

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

// Data
import recipes from 'src/data/recipes';

// SCSS
import './styles.scss';

const App = () => {
  const [title, setTitle] = useState("O'Fourneaux");
  const [isClicked, setIsClicked] = useState(false);
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="app">
        {/* TODO: switch between Header and NavBar according to responsive : set a property in our state ? */}
        <Header title={title} />
        <NavBar />
        <Route exact path='/'>
          {/* TODO: Change the components thanks to Links */}
          <HomePresentation title={title} />
          <Generator setIsClicked={setIsClicked} isClicked={isClicked} />
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
        {/* <Route exact path='/recettes/:slug'> */}
        <Route exact path="/recette">
          <Recipe recipes={recipes} />
        </Route>
        <Footer />
    </div>
  );
};

export default App;
