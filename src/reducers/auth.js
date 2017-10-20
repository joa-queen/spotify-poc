import {
  LOAD, LOAD_SUCCESS, LOAD_FAIL,
  LOAD_TRACKS, LOAD_TRACKS_SUCCESS, LOAD_TRACKS_FAIL,
} from '../actions/auth';

const initialState = {
  loaded: false,
  loading: false,
  error: null,
  data: null,
  token: null,
  loadedTracks: false,
  loadingTracks: false,
  topTracks: null,
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case LOAD:
      return {
        ...state,
        loaded: false,
        loading: true,
      };
    case LOAD_SUCCESS:
      return {
        ...state,
        loaded: true,
        loading: false,
        data: action.data,
        token: action.token,
      };
    case LOAD_FAIL:
      return {
        ...state,
        loaded: false,
        loading: false,
        error: action.error,
        data: null,
        token: null,
      };
    case LOAD_TRACKS:
      return {
        ...state,
        loadingTracks: true,
        loadedTracks: false,
      };
    case LOAD_TRACKS_SUCCESS:
      return {
        ...state,
        loadingTracks: false,
        loadedTracks: true,
        topTracks: action.data,
      };
    case LOAD_TRACKS_FAIL:
      return {
        ...state,
        loadingTracks: false,
        loadedTracks: false,
        topTracks: null,
      };
    default:
      return state;
  }
};

export default auth;
