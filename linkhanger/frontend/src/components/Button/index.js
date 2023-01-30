import React from "react";
import { CircularProgress } from "@mui/material";
import { textAlign } from "@mui/system";
import styled from "styled-components";
export const Button = ({
  loading,
  disabled,
  title,
  onClick,
  size = "large",
}) => {
  const sizeConst = {
    large: 460,
    small: 100,
    medium: 200,
    auto: "auto",
  };
  const StyledButton = styled.button`
    color: white;
    padding: 10px;
    background-color: #1c658c;
    border-radius: 8px;
    margin: auto;
    margin-top: 20px;
    text-align: center;
    font-family: Red Hat Display;
    font-size: 18px;
    border: 0px;
  `;
  return (
    <StyledButton
      // disabled
      onClick={onClick}
    >
      {loading ? <CircularProgress color={"inherit"} size={25} /> : title}
    </StyledButton>
  );
};
