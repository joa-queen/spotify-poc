import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './AlbumList.css';
import Loading from '../Loading/Loading';

const AlbumList = ({ searching, data }) => (
  <div>
    { searching
      ? <Loading />
      : (data
        ? (
          <ul>
            {data.albums.items.map(album => (
              <li key={album.id} className="Album">
                <Link to={`/album/${album.id}`}>
                  <img src={album.images[0].url} alt="Cover" />
                  <div className="AlbumName">{album.name} <span>- {album.artists[0].name}</span></div>
                </Link>
              </li>
            ))}
          </ul>
        )
        : null
      )
    }
  </div>
);

AlbumList.propTypes = {
  searching: PropTypes.bool.isRequired,
  data: PropTypes.shape({
    albums: PropTypes.shape({
      items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
      })).isRequired,
    }).isRequired,
  }),
};

AlbumList.defaultProps = {
  data: [],
};

export default AlbumList;
