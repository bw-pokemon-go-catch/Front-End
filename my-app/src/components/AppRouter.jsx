import React from 'react';
import { Route } from 'react-router-dom';
import LoginPage from './login';
import SignupPage from './signup';

AppRouter = () => {
  return (
    <div>
      <Route exact path='/' component={App} />
      <Route path='/login' component={LoginPage} />
      <Route path='/signup' component={SignupPage} />
      <Route component={App} />
    </div>
  )
}

export default AppRouter;
