import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes, Navigate } from "react-router-dom";
import UserLink from "../Pages/UserLink";
import AuthMiddleware from "../redux/helpers/AuthMiddleware";
import { Admin } from "./Admin";
import { Login } from "./Login";
import { login } from "./../redux/features/auth/authSlice";

export const RouteContainer = () => {
  const selector = useSelector((state) => state.authentication);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 200);
  }, []);
  if (isLoading) return <div>Loading</div>;
  return (
    <AuthMiddleware>
      <Routes>
        <Route path="/" element={<p>Home</p>}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/logout" element={<h1>Logout</h1>}></Route>
        <Route
          exact
          path="/home"
          element={
            selector.loggedIn ? (
              <Admin></Admin>
            ) : (
              <Navigate to={"/login"}></Navigate>
            )
          }
        ></Route>
        <Route path="/:username" element={<UserLink />}></Route>
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
        {/* <PrivateRoute exact path="/teacher" component={TeacherHomeworkAdd} /> */}
      </Routes>
    </AuthMiddleware>
  );
};
