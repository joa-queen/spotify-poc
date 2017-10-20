import React from 'react';
import PropTypes from 'prop-types';
import './Album.css';
import Loading from '../Loading/Loading';
import TracksData from './TracksData';

const Album = ({ data }) => (
  <div className="FullAlbum">
    { !data || data.loading
      ? <Loading />
      : (
        <div>
          <img className="FullAlbumCover" src={data.images[0].url} alt="Album Cover" />
          <h2>{data.name}</h2>
          <h3>{data.artists[0].name}</h3>
          <TracksData
            loading={data.loadingTracks}
            data={data.tracksData}
          />
        </div>
      )
    }
  </div>
);

Album.propTypes = {
  data: PropTypes.shape({
    artists: PropTypes.array,
  }),
};

Album.defaultProps = {
  data: null,
};

export default Album;
