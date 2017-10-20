import React from 'react';
import PropTypes from 'prop-types';

const TracksDataResult = ({ data }) => (
  <div>
    { data.diff.prom < 0.25
      ? 'I think you may like this album!!'
      : 'Probably you shouldn\'t listen to this one'
    }
    <table>
      <thead>
        <tr>
          <th />
          <th>This album</th>
          <th>Diff with you</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>acousticness</td>
          <td>{Math.round(data.result.acousticness * 100) / 100}</td>
          <td>{Math.round(data.diff.acousticness * 100) / 100}</td>
        </tr>
        <tr>
          <td>danceability</td>
          <td>{Math.round(data.result.danceability * 100) / 100}</td>
          <td>{Math.round(data.diff.danceability * 100) / 100}</td>
        </tr>
        <tr>
          <td>energy</td>
          <td>{Math.round(data.result.energy * 100) / 100}</td>
          <td>{Math.round(data.diff.energy * 100) / 100}</td>
        </tr>
        <tr>
          <td>instrumentalness</td>
          <td>{Math.round(data.result.instrumentalness * 100) / 100}</td>
          <td>{Math.round(data.diff.instrumentalness * 100) / 100}</td>
        </tr>
        <tr>
          <td>liveness</td>
          <td>{Math.round(data.result.liveness * 100) / 100}</td>
          <td>{Math.round(data.diff.liveness * 100) / 100}</td>
        </tr>
        <tr>
          <td>speechiness</td>
          <td>{Math.round(data.result.speechiness * 100) / 100}</td>
          <td>{Math.round(data.diff.speechiness * 100) / 100}</td>
        </tr>
      </tbody>
    </table>
  </div>
);

TracksDataResult.propTypes = {
  data: PropTypes.shape({
    result: PropTypes.object,
    diff: PropTypes.object,
  }).isRequired,
};

export default TracksDataResult;
