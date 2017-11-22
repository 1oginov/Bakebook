const initialState = {
  recipes: [],
  isRecipeSelected: false,
  isUpdating: false,
  recipeSelected: null,
  uid: '',
  title: '',
  category: '',
  notes: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'INITIAL_FETCH':
      return {
        ...state,
        recipes: action.payload,
      };

    case 'RECIPE_SELECTED':
      return {
        ...state,
        isRecipeSelected: true,
        recipeSelected: action.payload,
      };

    case 'NONE_SELECTED':
      return {
        ...state,
        isRecipeSelected: false,
        personSelected: null,
      };

    case 'FORM_UPDATE':
      return {
        ...state,
        [action.payload.prop]: action.payload.value,
      };

    case 'NEW_RECIPE':
      return {
        ...state,
        title: '',
        category: '',
        notes: '',
      };

    case 'ADD_RECIPE':
      return {
        ...state,
        ...action.newRecipe,
      };

    case 'UPDATE_RECIPE':
      return {
        ...state,
        isUpdating: true,
        uid: action.payload.uid,
        title: action.payload.title,
        category: action.payload.category,
        notes: action.payload.notes,
      };

    case 'SAVE_RECIPE':
      return {
        ...state,
        isRecipeSelected: false,
        isUpdating: false,
        uid: '',
        title: '',
        category: '',
        notes: '',
      };

    case 'DELETE_RECIPE':
      return {
        ...state,
        isRecipeSelected: false,
        recipeSelected: null,
      };

    default:
      return state;
  }
};
