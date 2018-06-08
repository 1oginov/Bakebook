import PropTypes from 'prop-types';
import React from 'react';
import { Provider } from 'react-redux';

import Initialization from '../Initialization';

const App = ({ store }) => (
  <Provider store={store}>
    <Initialization />
  </Provider>
);

App.propTypes = {
  store: PropTypes.shape({}).isRequired,
};

export default App;
