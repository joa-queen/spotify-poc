import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { load } from '../actions/auth';
import Callback from '../components/Callback/Callback';

class CallbackLogic extends React.Component {
  componentDidMount() {
    const params = new URLSearchParams(this.props.location.hash.substr(1));
    this.props.load(params.get('access_token'));
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.loading && !nextProps.loading && !this.props.loaded && nextProps.loaded) {
      this.props.history.push('/');
    }
  }

  render() {
    return (
      <Callback error={this.props.error} />
    );
  }
}

CallbackLogic.propTypes = {
  load: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  location: PropTypes.shape({
    hash: PropTypes.string.isRequired,
  }).isRequired,
  loaded: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
};

CallbackLogic.defaultProps = {
  error: null,
};

const mapStateToProps = state => ({
  loaded: state.auth.loaded,
  loading: state.auth.loading,
  error: state.auth.error,
});

const mapDispatchToProps = dispatch => ({
  load: (token) => {
    dispatch(load(token));
  },
});

const CallbackContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(CallbackLogic);

export default CallbackContainer;
