import withStyles from '../../../shared/enhancers/withStyles';
import theme from '../../../theme';

export default withStyles({
  container: {
    backgroundColor: theme.colors.background,
    flex: 1,
  },
  headline: {
    color: theme.colors.primaryText,
    fontSize: 32,
    marginBottom: 16,
    textAlign: 'center',
  },
});
