import * as T from '../actions/types';

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
    case T.VEHICLES_FETCH:
      return {
        ...state,
        recipes: action.payload,
      };

    case T.VEHICLE_SELECT:
      return {
        ...state,
        isRecipeSelected: true,
        recipeSelected: action.payload,
      };

    case T.VEHICLE_DESELECT:
      return {
        ...state,
        isRecipeSelected: false,
        personSelected: null,
      };

    case T.VEHICLE_FORM_UPDATE:
      return {
        ...state,
        [action.payload.prop]: action.payload.value,
      };

    case T.VEHICLE_STORE:
      return {
        ...state,
        title: '',
        category: '',
        notes: '',
      };

    case T.VEHICLE_EDIT:
      return {
        ...state,
        isUpdating: true,
        uid: action.payload.uid,
        title: action.payload.title,
        category: action.payload.category,
        notes: action.payload.notes,
      };

    case T.VEHICLE_UPDATE:
      return {
        ...state,
        isRecipeSelected: false,
        isUpdating: false,
        uid: '',
        title: '',
        category: '',
        notes: '',
      };

    case T.VEHICLE_DELETE:
      return {
        ...state,
        isRecipeSelected: false,
        recipeSelected: null,
      };

    default:
      return state;
  }
};
