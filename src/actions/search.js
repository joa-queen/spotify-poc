import Api from '../utils/Spotify';

export const SEARCH = 'ipsy/search/SEARCH';
export const SEARCH_SUCCESS = 'ipsy/search/SEARCH_SUCCESS';
export const SEARCH_FAIL = 'ipsy/search/SEARCH_FAIL';

export const search = query => (dispatch, getState) => {
  dispatch({ type: SEARCH });
  const Spotify = new Api(getState().auth.token);
  Spotify.search(query)
    .then((res) => {
      dispatch({ type: SEARCH_SUCCESS, data: res });
    })
    .catch((error) => {
      dispatch({ type: SEARCH_FAIL, error });
    });
};
