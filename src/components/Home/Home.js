import React from 'react';
import PropTypes from 'prop-types';
import Login from './Login';
import Profile from './Profile';

const Home = ({
  loaded, me, loadingTracks,
  loadedTracks, searching, search, searchResult,
}) => (
  <div>
    { loaded
      ? (
        <Profile
          me={me}
          loadingTracks={loadingTracks}
          loadedTracks={loadedTracks}
          search={search}
          searching={searching}
          searchResult={searchResult}
        />
      )
      : <Login />
    }
  </div>
);

Home.propTypes = {
  loaded: PropTypes.bool.isRequired,
  me: PropTypes.shape({
    id: PropTypes.string.isRequired,
  }),
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

Home.defaultProps = {
  me: null,
  searchResult: [],
};

export default Home;
