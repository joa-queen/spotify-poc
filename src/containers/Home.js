import { connect } from 'react-redux';
import { search } from '../actions/search';
import Home from '../components/Home/Home';

const mapStateToProps = state => ({
  loaded: state.auth.loaded,
  me: state.auth.data,
  loadingTracks: state.auth.loadingTracks,
  loadedTracks: state.auth.loadedTracks,
  searching: state.search.loading,
  searchLoaded: state.search.loaded,
  searchError: state.search.error,
  searchResult: state.search.data,
});

const mapDispatchToProps = dispatch => ({
  search: query => dispatch(search(query)),
});

const HomeContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);

export default HomeContainer;
