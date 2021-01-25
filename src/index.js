import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { FormspreeProvider } from '@formspree/react';
//import { Provider } from 'react-redux';
import { render } from 'react-dom';

//import store from 'src/store';

import App from 'src/components/App';

const rootReactElement = (
  <BrowserRouter>
    <FormspreeProvider project={process.env.FORMSPREE_PROJECT_ID}>
      <App />
    </FormspreeProvider>
  </BrowserRouter>
);

const target = document.getElementById('root');
render(rootReactElement, target);
