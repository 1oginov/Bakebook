import PropTypes from 'prop-types';
import React from 'react';
import { Provider } from 'react-redux';

import AuthChecker from '../AuthChecker';

const App = ({ store }) => (
  <Provider store={store}>
    <AuthChecker />
  </Provider>
);

App.propTypes = {
  store: PropTypes.shape().isRequired,
};

export default App;
