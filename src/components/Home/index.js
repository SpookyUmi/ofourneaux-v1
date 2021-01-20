// == Import npm
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

// == Import
import Header from 'src/components/Header';
import Generator from 'src/components/Generator';
import HomePresentation from 'src/components/Home/HomePresentation';

import './styles.scss';

// == Composant
const App = () => {
  const [title, setTitle] = useState("O'Fourneaux");


  return (
    <div className="app">
      <Header title={title} />
      <HomePresentation title={title} />
      <Generator />

    </div>
  );
};

// == Export
export default App;
