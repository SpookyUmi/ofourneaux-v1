import React from 'react';
import PropTypes from 'prop-types';
import { FormspreeProvider } from '@formspree/react';
import { Route } from 'react-router-dom';

import Home from 'src/components/Home';

import './styles.scss';

const App = () => {

  return (
    <div className="app">
      <Route exact path="/">
        <FormspreeProvider project={process.env.FORMSPREE_PROJECT_ID}>
          <Home />
        </FormspreeProvider>
      </Route>
    </div>
  );
};

export default App;
