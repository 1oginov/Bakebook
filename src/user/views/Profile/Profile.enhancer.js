import { withFirebase } from 'react-redux-firebase';
import { compose, withHandlers } from 'recompose';

export default compose(
  withFirebase,
  withHandlers({
    handleLogout: ({ firebase }) => () => {
      firebase.logout();
    },
  }),
);
