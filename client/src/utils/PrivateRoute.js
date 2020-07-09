import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={() => {
        {
          /*LocalStorage is a place we can validate a game token*/
        }
        if (localStorage.getItem('gameCode')) {
          return <Component />;
        } else {
          return <Redirect to='/' />;
        }
      }}
    />
  );
};
