import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { FormspreeProvider } from '@formspree/react';
//import { Provider } from 'react-redux';
import { render } from 'react-dom';

//import store from 'src/store';

import App from 'src/components/App';

const rootReactElement = (
  <BrowserRouter>
    <FormspreeProvider project="1596756043252104978">
      <App />
    </FormspreeProvider>
  </BrowserRouter>
);

const target = document.getElementById('root');
render(rootReactElement, target);
