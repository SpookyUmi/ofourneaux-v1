import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { FormspreeProvider } from '@formspree/react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import store from 'src/store';
import App from 'src/components/App';

store.dispatch({
  type: 'INIT_DATAS',
});

const rootReactElement = (
  <Provider store={store}>
    <BrowserRouter>
      <FormspreeProvider project="1596756043252104978">
        <App />
      </FormspreeProvider>
    </BrowserRouter>
  </Provider>
);

const target = document.getElementById('root');
render(rootReactElement, target);
