export const selectRecipe = recipe => ({
  type: 'RECIPE_SELECTED',
  payload: recipe,
});

export const selectNone = () => ({
  type: 'NONE_SELECTED',
});
