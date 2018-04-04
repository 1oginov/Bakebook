/**
 * Configuration object.
 * @type {Object}
 */
const config = {
  colors: {
    background: '#fafafa',
    dividers: 'rgba(0, 0, 0, 0.12)',
    hintText: 'rgba(0, 0, 0, 0.38)',
    primaryText: 'rgba(0, 0, 0, 0.87)',
    secondaryText: 'rgba(0, 0, 0, 0.54)',
  },
  firebase: {
    apiKey: 'AIzaSyAS2IZMyU2IkRsKoVFuUOrcVZ4EE-9VNeE',
    authDomain: 'loginov-rocks-carbook.firebaseapp.com',
    databaseURL: 'https://loginov-rocks-carbook.firebaseio.com',
    messagingSenderId: '740978136427',
    projectId: 'loginov-rocks-carbook',
    storageBucket: 'loginov-rocks-carbook.appspot.com',
  },
  isDebugging: __DEV__ && !!window.navigator.userAgent, // eslint-disable-line no-undef
};

export default config;
