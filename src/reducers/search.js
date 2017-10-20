import {
  SEARCH, SEARCH_SUCCESS, SEARCH_FAIL,
} from '../actions/search';

const initialState = {
  loaded: false,
  loading: false,
  error: null,
  data: null,
};

const search = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH:
      return {
        ...state,
        loaded: false,
        loading: true,
      };
    case SEARCH_SUCCESS:
      return {
        ...state,
        loaded: true,
        loading: false,
        data: action.data,
      };
    case SEARCH_FAIL:
      return {
        ...state,
        loaded: false,
        loading: false,
        error: action.error,
        data: null,
      };
    default:
      return state;
  }
};

export default search;
