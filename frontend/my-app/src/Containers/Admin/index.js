import React from "react";
import { Header } from "../../components/Header";
import "./index.css";
import { useDispatch } from "react-redux";
import { LinkSection } from "./LinkSection";
import { useNavigate } from "react-router-dom";
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
