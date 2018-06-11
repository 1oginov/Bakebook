import { StyleSheet } from 'react-native';
import { withProps } from 'recompose';

/**
 * Enhancer to provide `styles` prop containing StyleSheet object.
 * @param {Object} styles
 * @return {*}
 */
const withStyles = styles => withProps(() => ({ styles: StyleSheet.create(styles) }));

export default withStyles;
