// == Import npm
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

// == Import
import Header from 'src/components/Header';
import Generator from 'src/components/Generator';
import About from 'src/components/About';
import Contact from 'src/components/Contact';
import HomePresentation from 'src/components/Home/HomePresentation';

import './styles.scss';

// == Composant
const Home = () => {
  const [title, setTitle] = useState("O'Fourneaux");
  const [isClicked, setIsClicked] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="home">
      {/* TODO: switch between Header and NavBar according to responsive : set a property in our state ? */}
      <Header title={title} isLoggedIn={isLoggedIn} />
      {/* TODO: Change the components thanks to Links */}
      <HomePresentation title={title} />
      <Generator setIsClicked={setIsClicked} isClicked={isClicked} isLoggedIn={isLoggedIn} />
      {/* TODO: Link to /a-propos, to /contact */}
      <Route exact path="/a-propos">
        <About />
      </Route>

      <Route exact path="/contact">
        <Contact />
      </Route>

    </div>
  );
};

// == Export
export default Home;
