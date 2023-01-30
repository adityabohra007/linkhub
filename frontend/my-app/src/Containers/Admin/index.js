import React from "react";
import { Header } from "../../components/Header";
import logo from "./../../public/images/preview-xl-crop.jpg";
import "./index.css";
import { useDispatch, useSelector } from "react-redux";
import { useMediaQuery } from "react-responsive";
import { LinkSection } from "./LinkSection";
import { logout } from "../../redux/features/auth/authSlice";
import { userApi } from "../../redux/api/userApi";
import { useNavigate } from "react-router-dom";
import { Fab, Grid } from "@mui/material";
import NavigationIcon from "@mui/icons-material/Navigation";
export const Admin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // const [trigger, lastPromiseInfo] = userApi.useLazyLogoutQuery();
  // const isDesktopOrLaptop = useMediaQuery({
  //   query: "(min-width:900px)",
  // });
  // const isTabletOrMobile = useMediaQuery({
  //   query: "(max-width:900px)",
  // });

  const handleLogout = async () => {
    // const { isError, isLoading, isSuccess, isUninitialized, data, error } =
    //   await trigger();
    // if (isSuccess) {
    //   dispatch(logout());
    //   navigate("/home");
    // }
  };
  return (
    <div className="Container">
      <div className="Navigation">
        <Header></Header>
        <section className="mainTopMenu">
          <a href={"#"}>Links</a>
          <a href="#">Appearance</a>
          {/* <p onClick={handleLogout}>Logout</p> */}
        </section>
      </div>
      <div className="Link">
        <p>
          My Hanger <a href="#">http://site/abohra</a>
        </p>
      </div>
      <div className="LinkEdit">
        <LinkSection></LinkSection>
      </div>
      <div className="LinkPreview">
        <iframe
          className="preview"
          onLoadStart={() => {
            console.info("loadingstart");
          }}
          onLoad={() => {
            console.info("load");
          }}
          src="/abohra"
          style={{
            border: "10px solid black",
            borderRadius: "40px",
            width: "250px",

            height: "500px",
            margin: "auto",
          }}
        ></iframe>
      </div>
    </div>
  );
};
