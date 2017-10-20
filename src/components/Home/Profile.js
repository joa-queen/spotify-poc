import React from 'react';
import PropTypes from 'prop-types';
import defaultAvatar from './avatar.png';
import './Profile.css';
import SearchAlbum from '../SearchAlbum/SearchAlbum';
import AlbumList from '../AlbumList/AlbumList';
import Loading from '../Loading/Loading';

const Profile = ({
  me, loadingTracks, loadedTracks,
  searching, search, searchResult,
}) => (
  <div>
    <img
      className="avatar"
      src={me.images.length > 0 ? me.images[0].url : defaultAvatar}
      alt="Avatar"
    />
    <h2>{me.display_name ? me.display_name : me.id}</h2>

    <div>
      {loadingTracks ? <Loading /> : null}
      { !loadingTracks && loadedTracks
        ? (
          <div>
            <SearchAlbum
              searching={searching}
              search={search}
            />
            <AlbumList
              searching={searching}
              data={searchResult}
            />
          </div>
        )
        : null
      }
    </div>
  </div>
);

Profile.propTypes = {
  me: PropTypes.shape({
    id: PropTypes.string.isRequired,
  }).isRequired,
  loadingTracks: PropTypes.bool.isRequired,
  loadedTracks: PropTypes.bool.isRequired,
  searching: PropTypes.bool.isRequired,
  search: PropTypes.func.isRequired,
  searchResult: PropTypes.shape({
    albums: PropTypes.shape({
      items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
      })).isRequired,
    }).isRequired,
  }),
};

Profile.defaultProps = {
  searchResult: [],
};

export default Profile;
