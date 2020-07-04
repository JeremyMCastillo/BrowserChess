import React from 'react';
import ReactDOM from 'react-dom';
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
    <Doc />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
