import React from 'react';
import PropTypes from 'prop-types';
import TracksDataResult from './TracksDataResult';
import Loading from '../Loading/Loading';

const TracksData = ({ loading, data }) => (
  <div>
    { loading || !data
      ? <Loading />
      : <TracksDataResult data={data} />
    }
  </div>
);

TracksData.propTypes = {
  loading: PropTypes.bool.isRequired,
  data: PropTypes.object,
};

export default TracksData;
