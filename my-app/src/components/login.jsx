import React from "react";
import { useState } from "react";
import Charizard from "../Images/charizard.jpg";
import Mewtwo from "../Images/mewtwo.jpg";
import Butterfree from "../Images/butterfree.jpg";
import Lugia from "../Images/lugia.jpg";

const LoginPage = ( props ) => {
  //hooks
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  //event handlers
  const handleUsername = event => {
    setUsername(event.target.value);
  };
  const handlePassword = event => {
    setPassword(event.target.value);
  };
  const handleLogin = event => {
    event.preventDefault();
    setUsername("");
    setPassword("");
    props.history.push('/');
  };

  return (
    <div>
      <div className="login">
        <h4>Login</h4>
        <form onSubmit={event => handleLogin(event)}>
          <br />
          <label>
            <input
              type="text"
              value={username}
              placeholder={"username"}
              onChange={event => handleUsername(event)}
            />
          </label>
          <br />
          <label>
            <input
              type="text"
              value={password}
              placeholder={"password"}
              onChange={event => handlePassword(event)}
            />
          </label>
          <br />
          <button className="actionButton">Login</button>
        </form>
      </div>
      <div className="leftImages">
        <img src={Mewtwo} alt='mewtwo' />
        <img src={Lugia} alt='lugia' />
      </div>
      <div className="rightImages">
        <img src={Charizard} alt='charizard' />
        <img src={Butterfree} alt='butterfree' />
      </div>
      <div />
    </div>
  );
};

export default LoginPage;
