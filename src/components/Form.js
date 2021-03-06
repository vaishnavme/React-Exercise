import React, { useState } from "react";

function Form() {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");

  const [message, setMessage] = useState("Please Enter following details");

  let successMsg = "Login Successful!!";

  const inputUsername = (event) => {
    let username = event.target.value;
    setUsername(username);
  };

  const inputAge = (event) => {
    let age = event.target.value;
    if (age !== "") {
      setAge(age);
    } else {
      setMessage("Please fill Age input!!");
    }
  };

  const inputPassword = (event) => {
    let password = event.target.value;
    if (password !== "") {
      setPassword(password);
    } else {
      setMessage("Please fill Password input!!");
    }
  };

  const inputConfPassword = (event) => {
    let confPassword = event.target.value;
    if (confPassword !== "") {
      setConfPassword(confPassword);
    } else {
      setMessage("Please fill Confirm Password input!!");
    }
  };

  function inputCheck() {
    if (age > 18) {
      if (password === confPassword) {
        setMessage(successMsg);
      } else {
        setMessage("Password did not match");
      }
    } else {
      setMessage("You should be at least 18 years old!!");
    }
  }
  return (
    <div className="form">
      <h1>Form</h1>
      <h4>{message}</h4>
      <input
        className="form__input"
        id="age"
        type="text"
        onChange={inputUsername}
        placeholder="Username"
      />

      <input
        className="form__input"
        id="age"
        type="number"
        onChange={inputAge}
        placeholder="Age"
      />

      <input
        className="form__input"
        id="age"
        type="password"
        onChange={inputPassword}
        placeholder="Password"
      />
      <input
        className="form__input"
        id="age"
        type="password"
        onChange={inputConfPassword}
        placeholder="Confirm Password"
      />
      <button onClick={inputCheck} className="form__button-submit">
        Submit
      </button>
    </div>
  );
}

export default Form;
