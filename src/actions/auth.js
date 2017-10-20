import Api from '../utils/Spotify';

export const LOAD = 'ipsy/auth/LOAD';
export const LOAD_SUCCESS = 'ipsy/auth/LOAD_SUCCESS';
export const LOAD_FAIL = 'ipsy/auth/LOAD_FAIL';

export const LOAD_TRACKS = 'ipsy/auth/LOAD_TRACKS';
export const LOAD_TRACKS_SUCCESS = 'ipsy/auth/LOAD_TRACKS_SUCCESS';
export const LOAD_TRACKS_FAIL = 'ipsy/auth/LOAD_TRACKS_FAIL';

export const loadTracks = () => (dispatch, getState) => {
  dispatch({ type: LOAD_TRACKS });
  const Spotify = new Api(getState().auth.token);
  Spotify.topTracks()
    .then((res) => {
      const ids = res.items.map(item => item.id);
      return Spotify.analize(ids.join(','));
    })
    .then((res) => {
      const result = res.audio_features.reduce((oldValue, newValue) => ({
        acousticness: oldValue.acousticness + newValue.acousticness,
        danceability: oldValue.danceability + newValue.danceability,
        energy: oldValue.energy + newValue.energy,
        instrumentalness: oldValue.instrumentalness + newValue.instrumentalness,
        liveness: oldValue.liveness + newValue.liveness,
        speechiness: oldValue.speechiness + newValue.speechiness,
      }));

      return {
        acousticness: result.acousticness / res.audio_features.length,
        danceability: result.danceability / res.audio_features.length,
        energy: result.energy / res.audio_features.length,
        instrumentalness: result.instrumentalness / res.audio_features.length,
        liveness: result.liveness / res.audio_features.length,
        speechiness: result.speechiness / res.audio_features.length,
      };
    })
    .then((res) => {
      dispatch({ type: LOAD_TRACKS_SUCCESS, data: res });
    })
    .catch((error) => {
      dispatch({ type: LOAD_TRACKS_FAIL, error });
    });
};

export const load = token => (dispatch) => {
  dispatch({ type: LOAD });
  const Spotify = new Api(token);
  Spotify.me()
    .then((res) => {
      dispatch({ type: LOAD_SUCCESS, data: res, token });
      dispatch(loadTracks());
    })
    .catch((error) => {
      dispatch({ type: LOAD_FAIL, error });
    });
};
