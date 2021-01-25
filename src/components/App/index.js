import React from 'react';
import PropTypes from 'prop-types';
import { FormspreeProvider } from '@formspree/react';

import Connection from 'src/components/Connection';

import './styles.scss';

const App = () => (
  <div className="app">
    <Connection />
  </div>
);

export default App;
