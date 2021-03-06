import React, { useState } from "react";

function Dark() {
  const [dark, setDark] = useState(false);

  const themeHandler = () => {
    setDark((prevState) => !dark);
  };

  return (
    <div
      className="App"
      style={{
        backgroundColor: dark ? "black" : "white",
        color: dark ? "white" : "black"
      }}
    >
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <button onClick={themeHandler}>Change Theme</button>
    </div>
  );
}

export default Dark;
