import React, { useState } from "react";
import "./index.css";
export const PasswordInput = ({ value, onChange }) => {
  const [inputFocus, setInputFocus] = useState(false);
  return (
    <div
      className="passwordInputContainer"
      style={inputFocus ? { border: "2px solid black" } : {}}
    >
      <div style={{ display: "flex", paddingLeft: 20 }}>
        <input
          name="password"
          type={"password"}
          onChange={onChange}
          onFocus={() => {
            setInputFocus(true);
          }}
          onBlur={() => {
            setInputFocus(false);
          }}
        ></input>
      </div>
      <div
        className="passwordLabel"
        style={
          inputFocus || value
            ? { top: 10, left: 10, transform: "scale(" + 0.8 + ")" }
            : {}
        }
      >
        Password
      </div>
    </div>
  );
};
