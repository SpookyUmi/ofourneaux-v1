// == Import npm
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FormspreeProvider } from '@formspree/react';
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

import recipes from 'src/data/recipes';

const App = () => {
  const [title, setTitle] = useState("O'Fourneaux");
  const [isClicked, setIsClicked] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="app">
      <FormspreeProvider project={process.env.FORMSPREE_PROJECT_ID}>
        {/* TODO: switch between Header and NavBar according to responsive : set a property in our state ? */}
        <Header title={title} isLoggedIn={isLoggedIn} />
        {/* TODO: Change the components thanks to Links */}
        <HomePresentation title={title} />
        <Generator setIsClicked={setIsClicked} isClicked={isClicked} isLoggedIn={isLoggedIn} />
        {/* TODO: Link to /a-propos, to /contact */}
        {/* <About /> */}
        {/* <Contact /> */}
        <ShoppingList quantity={quantity} setQuantity={setQuantity} />
        <Inscription />
        <Connection />
        <Profile />
        <Recipe recipes={recipes} />
      </FormspreeProvider>
    </div>
  );
};

export default App;
