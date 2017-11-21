import recipes from '../data/recipes.json';

const initialState = {
  recipes,
  isRecipeSelected: false,
  recipeSelected: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
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

    default:
      return {
        ...state,
      };
  }
};
