export const selectRecipe = id => ({
  type: 'RECIPE_SELECTED',
  payload: id,
});

export const selectNone = () => ({
  type: 'NONE_SELECTED',
});
