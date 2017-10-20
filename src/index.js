import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { compose, createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
} from 'react-router-dom';
import codingChallenge from './reducers';
import './index.css';
import Home from './containers/Home';
import About from './components/About/About';
import App from './components/App/App';
import Callback from './containers/Callback';
import Album from './containers/Album';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // eslint-disable-line
const store = createStore(
  codingChallenge,
  undefined,
  composeEnhancers(
    applyMiddleware(thunkMiddleware),
  ),
);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/callback" component={Callback} />
        <Route
          path="/album/:id"
          render={props => (
            store.getState().auth.loaded
              ? <Album {...props} />
              : (
                <Redirect to={{
                  pathname: '/',
                  state: { from: props.location },
                }}
                />
              )
          )}
        />
      </App>
    </Router>
  </Provider>,
  document.getElementById('root'),
);
