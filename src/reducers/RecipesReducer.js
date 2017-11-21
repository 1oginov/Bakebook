const initialState = {
  recipes: [],
  isRecipeSelected: false,
  recipeSelected: null,
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

    case 'DELETE_RECIPE':
      return {
        ...state,
        isRecipeSelected: false,
        recipeSelected: null,
      };

    default:
      return {
        ...state,
      };
  }
};
