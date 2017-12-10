import * as T from '../actions/types';

const initialState = {
  selectedVehicle: null, // Object|null
  recipes: {},
  isUpdating: false,
  uid: '',
  title: '',
  category: '',
  notes: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case T.VEHICLE_DESELECT:
      return {
        ...state,
        selectedVehicle: null,
      };

    case T.VEHICLE_SELECT:
      return {
        ...state,
        selectedVehicle: state.recipes[action.payload] ? state.recipes[action.payload] : null,
      };

    case T.VEHICLES_FETCH:
      return {
        ...state,
        recipes: action.payload,
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
        isUpdating: false,
        uid: '',
        title: '',
        category: '',
        notes: '',
      };

    case T.VEHICLE_DELETE:
      return {
        ...state,
        selectedVehicle: null,
      };

    default:
      return state;
  }
};
