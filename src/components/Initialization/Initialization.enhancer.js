import React from 'react';
import { compose, withProps } from 'recompose';

import Navigator from '../Navigator';
import withAuth from '../../user/enhancers/withAuth';
import Guest from '../../user/views/Guest';
import Splash from '../../views/Splash';

export default compose(
  withAuth,
  withProps(({ isAuthLoaded, isAuthEmpty }) => {
    let children = <Splash />;

    if (isAuthLoaded && isAuthEmpty) {
      children = <Guest />;
    } else if (isAuthLoaded && !isAuthEmpty) {
      children = <Navigator />;
    }

    return { children };
  }),
);
