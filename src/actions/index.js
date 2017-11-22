import firebase from 'firebase';

export const selectRecipe = recipe => ({
  type: 'RECIPE_SELECTED',
  payload: recipe,
});

export const selectNone = () => ({
  type: 'NONE_SELECTED',
});

export const formUpdate = ({ prop, value }) => ({
  type: 'FORM_UPDATE',
  payload: { prop, value },
});

export const createNewRecipe = ({ title, category, notes }) => {
  const { currentUser } = firebase.auth();

  return dispatch => firebase.database().ref(`/users/${currentUser.uid}/recipes`)
    .push({ title, category, notes })
    .then(() => {
      dispatch({ type: 'NEW_RECIPE' });
    });
};

export const loadInitialRecipes = () => {
  const { currentUser } = firebase.auth();

  return dispatch => firebase.database().ref(`/users/${currentUser.uid}/recipes`)
    .on('value', (snapshot) => {
      dispatch({ type: 'INITIAL_FETCH', payload: snapshot.val() });
    });
};

export const deleteRecipe = (uid) => {
  const { currentUser } = firebase.auth();

  return dispatch => firebase.database().ref(`/users/${currentUser.uid}/recipes/${uid}`)
    .remove()
    .then(() => {
      dispatch({ type: 'DELETE_RECIPE' });
    });
};

export const updateRecipe = recipe => ({
  type: 'UPDATE_RECIPE',
  payload: recipe,
});

export const saveRecipe = ({
  uid, title, category, notes,
}) => {
  const { currentUser } = firebase.auth();

  return dispatch => firebase.database().ref(`/users/${currentUser.uid}/recipes/${uid}`)
    .set({
      uid, title, category, notes,
    })
    .then(() => {
      dispatch({ type: 'SAVE_RECIPE' });
    });
};
