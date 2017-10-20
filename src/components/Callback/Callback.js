import React from 'react';
import PropTypes from 'prop-types';
import Loading from '../Loading/Loading';

const Callback = ({ error }) => (
  <div>
    { error
      ? (
        <div>
          <h3>Oops! There seems to be a problem</h3>
          <div>{error}</div>
        </div>
      )
      : <Loading />
    }
  </div>
);

Callback.propTypes = {
  error: PropTypes.string,
};

Callback.defaultProps = {
  error: null,
};

export default Callback;
