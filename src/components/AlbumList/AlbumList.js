import React from 'react';
import PropTypes from 'prop-types';
import './AlbumList.css';
import Loading from '../Loading/Loading';
import List from './List';
import Empty from './Empty';

const AlbumList = ({ searching, data }) => (
  <div>
    { searching
      ? <Loading />
      : (data
        ? (
          <ul>
            { data.albums.items.length > 0
              ? <List albums={data.albums.items} />
              : <Empty />
            }
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
