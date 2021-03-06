import React, { useState } from "react";

function DisableForm() {
  const [dPassword, setDPassword] = useState("");
  const [dConfPassword, setDConfPassword] = useState("");
  const [disable, setDisable] = useState(true);

  function inputPassword(event) {
    let dPassword = event.target.value;
    if (dPassword !== "") {
      setDPassword(dPassword);
      if (dPassword !== dConfPassword) {
        setDisable(true);
      } else {
        setDisable(false);
      }
    }
  }

  function inputConfPassword(event) {
    let dConfPassword = event.target.value;
    if (dConfPassword !== "") {
      setDConfPassword(dConfPassword);
      if (dPassword !== dConfPassword) {
        setDisable(true);
      } else {
        setDisable(false);
      }
    }
  }

  return (
    <div className="disable__form">
      <h1>Disable Form </h1>
      <input
        className="form__input"
        placeholder="Enter Password"
        type="password"
        onChange={inputPassword}
      />
      <input
        className="form__input"
        placeholder="Enter Confirm Password"
        type="password"
        onChange={inputConfPassword}
      />
      <button disabled={disable} className="form__button-submit">
        Submit
      </button>
    </div>
  );
}

export default DisableForm;
