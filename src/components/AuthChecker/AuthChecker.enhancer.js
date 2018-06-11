import React from 'react';
import { compose, withProps } from 'recompose';

import Navigator from '../Navigator';
import withAuth from '../../user/enhancers/withAuth';
import Guest from '../../views/Guest';
import Splash from '../../views/Splash';

export default compose(
  withAuth,
  withProps(({ isAuthenticated, isAuthLoaded, isAuthEmpty }) => {
    let children = <Splash />;

    if (isAuthenticated) {
      children = <Navigator />;
    } else if (isAuthLoaded && isAuthEmpty) {
      children = <Guest />;
    }

    return { children };
  }),
);
