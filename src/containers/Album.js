import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { load } from '../actions/albums';
import Album from '../components/Album/Album';

class AlbumLogic extends React.Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    if (!this.props.data[id]) {
      this.props.load(id);
    }
  }
  render() {
    const { id } = this.props.match.params;
    return (
      <Album
        data={this.props.data[id]}
      />
    );
  }
}

AlbumLogic.propTypes = {
  data: PropTypes.object,
  load: PropTypes.func.isRequired,
  match: PropTypes.shape({
    params: PropTypes.object.isRequired,
  }).isRequired,
};

const mapStateToProps = state => ({
  data: state.albums,
});

const mapDispatchToProps = dispatch => ({
  load: id => dispatch(load(id)),
});

const AlbumContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(AlbumLogic);

export default AlbumContainer;
