import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const List = ({ albums }) => (
  <div>
    {albums.map(album => (
      <li key={album.id} className="Album">
        <Link to={`/album/${album.id}`}>
          <img src={album.images[0].url} alt="Cover" />
          <div className="AlbumName">{album.name} <span>- {album.artists[0].name}</span></div>
        </Link>
      </li>
    ))}
  </div>
);

List.propTypes = {
  albums: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
  })).isRequired,
};

export default List;
