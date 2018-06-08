import React from 'react';
import { Provider } from 'react-redux';

import Initialization from '../Initialization';

const App = ({ store }) => (
  <Provider store={store}>
    <Initialization />
  </Provider>
);

export default App;
