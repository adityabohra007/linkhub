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
  const [trigger, lastPromiseInfo] = userApi.useLazyLogoutQuery();
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width:900px)",
  });
  const isTabletOrMobile = useMediaQuery({
    query: "(max-width:900px)",
  });

  const handleLogout = async () => {
    const { isError, isLoading, isSuccess, isUninitialized, data, error } =
      await trigger();
    if (isSuccess) {
      dispatch(logout());
      navigate("/home");
    }
  };
  return (
    <div className="adminPageContainer">
      <div className="adminPageWrapper">
        <div className="mainSection">
          <Header></Header>
          <section className="mainTopMenu">
            <a href={"#"}>Links</a>
            <a href="#">Appearance</a>
            <p onClick={handleLogout}>Logout</p>
          </section>
          <Grid item xs={12}>
            <LinkSection></LinkSection>

            {/* <PreviewSection></PreviewSection> */}
          </Grid>
        </div>
        <Grid item xl={6} spacing={10}>
          <div>
            <h1>Preview</h1>
            <iframe
              src="/abohra"
              style={{
                border: "10px solid black",
                borderRadius: "20px",
                width: "80%",
                height: "500px",
              }}
            ></iframe>
          </div>
        </Grid>
      </div>
    </div>
  );
};
