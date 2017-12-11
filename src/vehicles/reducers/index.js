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
    case T.CREATE_FORM_UPDATE:
      return {
        ...state,
        createForm: {
          ...state.createForm,
          [action.payload.prop]: action.payload.value,
        },
      };

    case T.DELETE:
      return {
        ...state,
        selected: null,
      };

    case T.DESELECT:
      return {
        ...state,
        selected: null,
      };

    case T.EDIT: {
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

    case T.EDIT_FORM_UPDATE:
      return {
        ...state,
        editForm: {
          ...state.editForm,
          [action.payload.prop]: action.payload.value,
        },
      };

    case T.FETCH:
      return {
        ...state,
        list: action.payload,
      };

    case T.SELECT:
      return {
        ...state,
        selected: state.list[action.payload] ? state.list[action.payload] : null,
      };

    case T.STORE:
      return {
        ...state,
        createForm: {
          category: '',
          notes: '',
          title: '',
        },
      };

    case T.UPDATE:
      return {
        ...state,
        editForm: {
          category: '',
          notes: '',
          title: '',
        },
        editing: '',
      };

    default:
      return state;
  }
};
