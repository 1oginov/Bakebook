import withStyles from '../../shared/enhancers/withStyles';
import theme from '../../theme';

export default withStyles({
  container: {
    alignItems: 'center',
    backgroundColor: theme.colors.background,
    flex: 1,
    justifyContent: 'center',
  },
  headline: {
    color: theme.colors.primaryText,
    fontSize: 32,
    marginBottom: 16,
    textAlign: 'center',
  },
});
