import React from 'react';
import { useState } from 'react';

const SignupPage = () => {

  //hooks
  const [createUsername, setCreateUsername] = useState('');
  const [createPassword, setCreatePassword] = useState('');

  //event handlers
  const handleCreateUsername = event => {
    setCreateUsername(event.target.value);
  }
  const handleCreatePassword = event => {
    setCreatePassword(event.target.value);
  }
  const handleCreateAccount = event => {
    event.preventDefault();
    setCreateUsername('');
    setCreatePassword('');
  }

  return (
    <div>
      <form onSubmit={event => handleCreateAccount(event)}>
        <br />
        <label>
        <input
          type='text'
          value={createUsername}
          placeholder={'create username'}
          onChange={event => handleCreateUsername(event)}
        />
        </label>
        <br />
        <label>
        <input
          type='text'
          value={createPassword}
          placeholder={'create password'}
          onChange={event => handleCreatePassword(event)}
        />
        </label>
        <br />
        <button>Create Account</button>
      </form>
    </div>
  )
}

export default SignupPage;
