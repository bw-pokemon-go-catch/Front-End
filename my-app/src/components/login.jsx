import React from 'react';
import { useState } from 'react';

const LoginPage = () => {

  //hooks
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  //event handlers
  const handleUsername = event => {
    setUsername(event.target.value);
  }
  const handlePassword = event => {
    setPassword(event.target.value);
  }
  const handleLogin = event => {
    event.preventDefault();
    setUsername('');
    setPassword('');
  }

  return (
    <div className='login'>
      <h4>Login</h4>
      <form onSubmit={event => handleLogin(event)}>
        <br />
        <label>
        <input
          type='text'
          value={username}
          placeholder={'username'}
          onChange={event => handleUsername(event)}
        />
        </label>
        <br />
        <label>
        <input
          type='text'
          value={password}
          placeholder={'password'}
          onChange={event => handlePassword(event)}
        />
        </label>
        <br />
        <button className='actionButton'>Login</button>
      </form>
    </div>
  )
}

export default LoginPage;
