// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import { FormspreeProvider } from '@formspree/react';

// == Import
import Home from 'src/components/Home';

import './styles.scss';

// == Composant
const App = () => {

  return (
    <div className="app">
      <FormspreeProvider project={process.env.FORMSPREE_PROJECT_ID}>
        <Home />
      </FormspreeProvider>
    </div>
  );
};

// == Export
export default App;
