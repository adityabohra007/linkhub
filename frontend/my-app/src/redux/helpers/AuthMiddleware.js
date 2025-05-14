import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userApi } from "../api/userApi";
import { login, logout } from "../features/auth/authSlice";
// import FullScreenLoader from "../components/FullScreenLoader";

const AuthMiddleware = ({ children }) => {
  // const [cookies] = useCookies(["logged_in"]);
  const dispatch = useDispatch();

  const selector = useSelector((state) => state.authentication);
  const navigate = useNavigate();
  const { data, isLoading, isSuccess, isFetching, isError, error } =
    userApi.useGetMeQuery();

  useEffect(() => {
    if (localStorage.getItem("user")) {
      const data = JSON.parse(localStorage.getItem("user"));
      console.log(data, "data");
      if (data) dispatch(login(data));
    } else {
      localStorage.removeItem("user");
    }
  }, []);
  const [isLocalLoading, setIsLocalLoading] = useState(true);

  // if (isError) {
  //   localStorage.removeItem("user");
  // }
  // useEffect(() => {
  //   if (isSuccess) {
  //     dispatch(login());
  //     setTimeout(() => {
  //       setIsLocalLoading(false);
  //     }, 1000);
  //   }
  //   if (isError) {
  //     console.log("in routes to  logout ");
  //     dispatch(logout());
  //     setTimeout(() => {
  //       setIsLocalLoading(false);
  //     }, 1000);
  //   }
  // }, [isLoading, isFetching, isError]);
  if(isError) return <h3>Error:{error.status}</h3>
  if (isFetching && isLocalLoading) {
    return <h1>Loading Auth</h1>;
  }

  return children;
};

export default AuthMiddleware;
