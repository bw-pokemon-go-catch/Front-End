import React from "react";
import { useState } from "react";
import Charizard from "../Images/charizard.jpg";
import Mewtwo from "../Images/mewtwo.jpg";
import Butterfree from "../Images/butterfree.jpg";
import Lugia from "../Images/lugia.jpg";

const SignupPage = props => {
  //hooks
  const [createUsername, setCreateUsername] = useState("");
  const [createPassword, setCreatePassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  //event handlers
  const handleCreateUsername = event => {
    setCreateUsername(event.target.value);
  };
  const handleCreatePassword = event => {
    setCreatePassword(event.target.value);
  };
  const handleConfirmPassword = event => {
    setConfirmPassword(event.target.value);
  };
  const handleCreateAccount = event => {
    event.preventDefault();
    setCreateUsername("");
    setCreatePassword("");
    props.history.push("/login");
  };

  return (
    <div>
      <div className="signUp">
        <h4>Sign Up</h4>
        <form onSubmit={event => handleCreateAccount(event)}>
          <br />
          <label>
            <input
              type="text"
              value={createUsername}
              placeholder={"create username"}
              onChange={event => handleCreateUsername(event)}
            />
          </label>
          <br />
          <label>
            <input
              type="text"
              value={createPassword}
              placeholder={"create password"}
              onChange={event => handleCreatePassword(event)}
            />
          </label>
          <br />
          <label>
            <input
              type="text"
              value={confirmPassword}
              placeholder={"confirm password"}
              onChange={event => handleConfirmPassword(event)}
            />
          </label>
          <br />
          <button className="actionButton">Create Account</button>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;
