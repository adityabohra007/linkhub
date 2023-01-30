import React from "react";
import logo from "./../../public/images/preview-xl-crop.jpg";

export const Header = () => {
  return (
    <header style={{ backgroundColor: "white" }}>
      <div>
        <div
          style={{
            display: "flex",
            fontFamily: "Red Hat Display",
            fontWeight: 400,
            alignItems: "center",
            fontSize: 22,
          }}
        >
          <img
            src={logo}
            height="50"
            width={"50"}
            style={{ borderRadius: 20, padding: 5 }}
          ></img>
          <div>linkhanger</div>
        </div>
      </div>
    </header>
  );
};
