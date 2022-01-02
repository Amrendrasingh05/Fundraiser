import React from 'react';
import { Route,Redirect} from 'react-router-dom';

const ProtectedRoute = ({ component: Component, ...rest }) => {
  return (
    <Route {...rest} render={
      props => localStorage.getItem('fr_token')? <Component {...rest} {...props} />:<Redirect  to="/" />
    } />
  )
}

export default ProtectedRoute;