import * as T from '../actions/types';

/**
 * Initial state.
 * @type {{
 *     createForm: {
 *         category: string,
 *         notes: string,
 *         title: string
 *     },
 *     editForm: {
 *         category: string,
 *         notes: string,
 *         title: string
 *     },
 *     editing: string,
 *     list: Object,
 *     selected: Object|null
 * }}
 */
const initialState = {
  createForm: {
    category: '',
    notes: '',
    title: '',
  },
  editForm: {
    category: '',
    notes: '',
    title: '',
  },
  editing: '',
  list: {},
  selected: null,
};

/**
 * Vehicles reducer.
 * @param {Object} state
 * @param {Object} action
 * @returns {Object}
 */
export default (state = initialState, action) => {
  switch (action.type) {
    case T.VEHICLE_CREATE_FORM_UPDATE:
      return {
        ...state,
        createForm: {
          ...state.createForm,
          [action.payload.prop]: action.payload.value,
        },
      };

    case T.VEHICLE_DELETE:
      return {
        ...state,
        selected: null,
      };

    case T.VEHICLE_DESELECT:
      return {
        ...state,
        selected: null,
      };

    case T.VEHICLE_EDIT: {
      const vehicle = state.list[action.payload];

      if (!vehicle) {
        return state;
      }

      return {
        ...state,
        editForm: {
          category: vehicle.category,
          notes: vehicle.notes,
          title: vehicle.title,
        },
        editing: vehicle.uid,
      };
    }

    case T.VEHICLE_EDIT_FORM_UPDATE:
      return {
        ...state,
        editForm: {
          ...state.editForm,
          [action.payload.prop]: action.payload.value,
        },
      };

    case T.VEHICLE_SELECT:
      return {
        ...state,
        selected: state.list[action.payload] ? state.list[action.payload] : null,
      };

    case T.VEHICLE_STORE:
      return {
        ...state,
        createForm: {
          category: '',
          notes: '',
          title: '',
        },
      };

    case T.VEHICLE_UPDATE:
      return {
        ...state,
        editForm: {
          category: '',
          notes: '',
          title: '',
        },
        editing: '',
      };

    case T.VEHICLES_FETCH:
      return {
        ...state,
        list: action.payload,
      };

    default:
      return state;
  }
};
