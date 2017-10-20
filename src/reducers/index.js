import { combineReducers } from 'redux';
import auth from './auth';
import search from './search';
import albums from './albums';

const codingChallenge = combineReducers({
  auth,
  search,
  albums,
});

export default codingChallenge;
