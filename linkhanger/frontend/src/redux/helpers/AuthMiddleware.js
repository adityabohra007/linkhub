import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userApi } from "../api/userApi";
import { login, logout } from "../features/auth/authSlice";
// import FullScreenLoader from "../components/FullScreenLoader";

const AuthMiddleware = ({ children }) => {
  // const [cookies] = useCookies(["logged_in"]);

  const selector = useSelector((state) => state.authentication);
  const navigate = useNavigate();
  const { data, isLoading, isSuccess, isFetching, isError, error } =
    userApi.useGetMeQuery();
  const dispatch = useDispatch();
  const [isLocalLoading, setIsLocalLoading] = useState(true);
  useEffect(() => {
    if (isSuccess) {
      dispatch(login());
      setTimeout(() => {
        setIsLocalLoading(false);
      }, 1000);
    }
    if (isError) {
      console.log("in routes to  logout ");
      dispatch(logout());
      setTimeout(() => {
        setIsLocalLoading(false);
      }, 1000);
    }
  }, [isLoading, isFetching, isError]);

  console.log(selector, "checking login state", selector.loggedIn);

  if (isFetching && isLocalLoading) {
    return <h1>Loading</h1>;
  }

  return children;
};

export default AuthMiddleware;
