import React from 'react';
import { Provider } from 'react-redux';

import Root from '../Root';

const App = ({ store }) => (
  <Provider store={store}>
    <Root />
  </Provider>
);

export default App;
