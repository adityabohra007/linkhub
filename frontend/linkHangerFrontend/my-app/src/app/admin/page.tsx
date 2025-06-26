"use client";

import React from "react";
import "./index.css";
// import { useDispatch } from "react-redux";

import withAuth from "./../../utils/withAuth";
import Admin from "./admin";

const Page = () => {
  return <Admin />;
};
export default withAuth(Page);
