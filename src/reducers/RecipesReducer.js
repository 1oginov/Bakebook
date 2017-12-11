import * as T from '../actions/types';

const initialState = {
  editingVehicle: '', // string
  selectedVehicle: null, // Object|null
  vehicleCreateForm: {
    category: '', // string
    notes: '', // string
    title: '', // string
  },
  vehicleEditForm: {
    category: '', // string
    notes: '', // string
    title: '', // string
  },
  recipes: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case T.VEHICLE_CREATE_FORM_UPDATE:
      return {
        ...state,
        vehicleCreateForm: {
          ...state.vehicleCreateForm,
          [action.payload.prop]: action.payload.value,
        },
      };

    case T.VEHICLE_DELETE:
      return {
        ...state,
        selectedVehicle: null,
      };

    case T.VEHICLE_DESELECT:
      return {
        ...state,
        selectedVehicle: null,
      };

    case T.VEHICLE_EDIT: {
      const vehicle = state.recipes[action.payload];

      if (!vehicle) {
        return state;
      }

      return {
        ...state,
        editingVehicle: vehicle.uid,
        vehicleEditForm: {
          category: vehicle.category,
          notes: vehicle.notes,
          title: vehicle.title,
        },
      };
    }

    case T.VEHICLE_EDIT_FORM_UPDATE:
      return {
        ...state,
        vehicleEditForm: {
          ...state.vehicleEditForm,
          [action.payload.prop]: action.payload.value,
        },
      };

    case T.VEHICLE_SELECT:
      return {
        ...state,
        selectedVehicle: state.recipes[action.payload] ? state.recipes[action.payload] : null,
      };

    case T.VEHICLE_STORE:
      return {
        ...state,
        vehicleCreateForm: {
          category: '',
          notes: '',
          title: '',
        },
      };

    case T.VEHICLE_UPDATE:
      return {
        ...state,
        editingVehicle: '',
        vehicleEditForm: {
          category: '',
          notes: '',
          title: '',
        },
      };

    case T.VEHICLES_FETCH:
      return {
        ...state,
        recipes: action.payload,
      };

    default:
      return state;
  }
};
