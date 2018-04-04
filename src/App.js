import React from 'react';
import { Provider } from 'react-redux';

import Root from './common/containers/Root';
import { configureStore } from './common/lib/store';

const store = configureStore();

const App = () => (
  <Provider store={store}>
    <Root />
  </Provider>
);

export default App;
