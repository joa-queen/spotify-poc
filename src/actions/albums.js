import Api from '../utils/Spotify';

export const LOAD = 'ipsy/albums/LOAD';
export const LOAD_SUCCESS = 'ipsy/albums/LOAD_SUCCESS';
export const LOAD_FAIL = 'ipsy/albums/LOAD_FAIL';

export const LOAD_TRACKS = 'ipsy/albums/LOAD_TRACKS';
export const LOAD_TRACKS_SUCCESS = 'ipsy/albums/LOAD_TRACKS_SUCCESS';
export const LOAD_TRACKS_FAIL = 'ipsy/albums/LOAD_TRACKS_FAIL';

export const loadTracks = (albumId, ids) => (dispatch, getState) => {
  dispatch({ type: LOAD_TRACKS });
  const Spotify = new Api(getState().auth.token);
  Spotify.analize(ids)
    .then((res) => {
      const temp = res.audio_features.reduce((oldValue, newValue) => ({
        acousticness: oldValue.acousticness + newValue.acousticness,
        danceability: oldValue.danceability + newValue.danceability,
        energy: oldValue.energy + newValue.energy,
        instrumentalness: oldValue.instrumentalness + newValue.instrumentalness,
        liveness: oldValue.liveness + newValue.liveness,
        speechiness: oldValue.speechiness + newValue.speechiness,
      }));

      const result = {
        acousticness: temp.acousticness / res.audio_features.length,
        danceability: temp.danceability / res.audio_features.length,
        energy: temp.energy / res.audio_features.length,
        instrumentalness: temp.instrumentalness / res.audio_features.length,
        liveness: temp.liveness / res.audio_features.length,
        speechiness: temp.speechiness / res.audio_features.length,
      };
      result.prom = (result.acousticness + result.danceability +
        result.energy + result.instrumentalness + result.liveness + result.speechiness) / 6;

      const { topTracks } = getState().auth;
      const diff = {
        acousticness: Math.abs(result.acousticness - topTracks.acousticness),
        danceability: Math.abs(result.danceability - topTracks.danceability),
        energy: Math.abs(result.energy - topTracks.energy),
        instrumentalness: Math.abs(result.instrumentalness - topTracks.instrumentalness),
        liveness: Math.abs(result.liveness - topTracks.liveness),
        speechiness: Math.abs(result.acousticness - topTracks.acousticness),
      };
      diff.prom = (diff.acousticness + diff.danceability +
        diff.energy + diff.instrumentalness + diff.liveness + diff.speechiness) / 6;

      return {
        result,
        diff,
      };
    })
    .then((res) => {
      dispatch({ type: LOAD_TRACKS_SUCCESS, id: albumId, data: res });
    })
    .catch((error) => {
      dispatch({ type: LOAD_TRACKS_FAIL, id: albumId, error });
    });
};

export const load = id => (dispatch, getState) => {
  dispatch({ type: LOAD, id });
  const Spotify = new Api(getState().auth.token);
  Spotify.getAlbum(id)
    .then((res) => {
      dispatch({ type: LOAD_SUCCESS, id, data: res });
      const ids = res.tracks.items.map(item => item.id);
      dispatch(loadTracks(id, ids));
    })
    .catch((error) => {
      dispatch({ type: LOAD_FAIL, id, error });
    });
};
