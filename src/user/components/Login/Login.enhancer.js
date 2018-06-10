import { withFirebase } from 'react-redux-firebase';
import { compose, withHandlers, withState } from 'recompose';

export default compose(
  withFirebase,
  withState('error', 'updateError', ''),
  withState('isLoading', 'updateIsLoading', false),
  withHandlers({
    handleSubmit: ({ firebase, updateError, updateIsLoading }) => ({ email, password }) => {
      updateError('');
      updateIsLoading(true);

      try {
        firebase.login({ email, password })
          .catch(({ code, message }) => {
            // Try to sign up if user not found.
            if (code === 'auth/user-not-found') {
              return firebase.createUser({ email, password });
            }

            return updateError(message);
          })
          .catch(({ message }) => updateError(message))
          .finally(() => updateIsLoading(false));
      } catch ({ message }) {
        updateError(message || 'Unknown error occurred');
        updateIsLoading(false);
      }
    },
  }),
);
