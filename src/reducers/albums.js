import {
  LOAD, LOAD_SUCCESS, LOAD_FAIL,
  LOAD_TRACKS, LOAD_TRACKS_SUCCESS, LOAD_TRACKS_FAIL,
} from '../actions/albums';

const initialState = {
};

const albums = (state = initialState, action) => {
  switch (action.type) {
    case LOAD:
      return {
        ...state,
        [action.id]: {
          ...state[action.id],
          loading: true,
          loadingTracks: false,
        }
      };
    case LOAD_SUCCESS:
      return {
        ...state,
        [action.id]: {
          ...state[action.id],
          loading: false,
          ...action.data,
        }
      };
    case LOAD_FAIL:
      return {
        ...state,
        [action.id]: {
          ...state[action.id],
          loading: false,
          error: action.error,
        }
      };
    case LOAD_TRACKS:
      return {
        ...state,
        [action.id]: {
          ...state[action.id],
          loadingTracks: true,
        }
      };
    case LOAD_TRACKS_SUCCESS:
      return {
        ...state,
        [action.id]: {
          ...state[action.id],
          loadingTracks: false,
          tracksData: action.data,
        }
      };
    case LOAD_TRACKS_FAIL:
      return {
        ...state,
        [action.id]: {
          ...state[action.id],
          loadingTracks: false,
          tracksError: action.error,
        }
      };
    default:
      return state;
  }
};

export default albums;
