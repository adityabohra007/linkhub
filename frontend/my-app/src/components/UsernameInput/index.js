import React, { useState, useRef } from "react";
import "./index.css";

export const UsernameInput = ({ value, onChange }) => {
  const [usernameFocused, setUsernameFocused] = useState(false);

  return (
    <div
      className={"usernameInputContainer"}
      style={usernameFocused ? { border: "2px solid black" } : {}}
    >
      <div className={"left"}>
        <div className="username">Username</div>
        <div className={"link"}>linkhanger.com/</div>
      </div>
      <div className={"inputWrapper"}>
        <input
          name="username"
          onChange={onChange}
          placeholder="Enter your username here"
          onFocus={() => {
            setUsernameFocused(true);
          }}
          onBlur={() => {
            setUsernameFocused(false);
          }}
        ></input>
      </div>
    </div>
  );
};
