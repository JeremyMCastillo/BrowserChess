import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import ReduxLogger from 'redux-logger';
import reducers from './reducers';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

class Doc extends React.Component {
  componentDidMount() {
    document.title = 'Browser Chess';
  }

  render() {
    return <div />;
  }
}

ReactDOM.render(
  <React.StrictMode>
    <Provider
      store={createStore(
        reducers,
        {},
        applyMiddleware(ReduxThunk, ReduxLogger)
      )}
    >
      <Doc />
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
