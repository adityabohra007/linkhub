import React from "react";
import { useParams } from "react-router-dom";
import { useFetchUserQuery } from "../../redux/api/linkHanger";
import styled from "styled-components";
// import "./index.css";

const LinkBtn = styled.a`
  /* width: 100%; */
  border: 2px solid gray;
  width: 80%;
  border-radius: 20px;
  display: flex;
  border: 2px solid white;
  background-color: transparent;
  text-decoration: none;
  color: white;
  padding: 15px;
  justify-content: center;
  font-weight: 600;
  font-family: sans-serif;
  margin-top: 10px;
  &:hover {
    /* border: 2px solid pink; */
    text-align: center;
    background-color: white;
    color: #154360;
  }
`;

const UserLink = ({ route }) => {
  const { username } = useParams();
  const { isLoading, isError, isFetching, isSuccess, data, error } =
    useFetchUserQuery(username);
  if (isLoading) return <div>Loading</div>;
  console.log(data, "data");
  return (
    <div
      className="wrapper"
      style={{
        // backgroundImage: ` url(${data && data.theme.image})`,
        height: "100vh",

        backgroundRepeat: "repeat",
        backgroundSize: "cover",
        background: "linear-gradient(#72a472,#b3a6a6,pink)",
        padding: "20px",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div
        style={{
          backgroundColor: "#1b577d",
          width: 30,
          height: 30,
          verticalAlign: "middle",
          textAlign: "center",
          padding: 20,
          borderRadius: "50%",
          display: "flex",
          alignContent: "center",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
          margin: "auto",
          fontWeight: 800,
          fontFamily: "sans-serif",
          fontSize: 26,
          marginTop: 10,
        }}
      >
        A
      </div>
      <div
        style={{
          textAlign: "center",
          marginTop: 10,
          marginBottom: 10,
          fontFamily: "sans-serif",
          color: "white",
          fontWeight: 600,
        }}
      >
        @adityabohra
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        {data && data.length ? (
          data.map((item) => (
            <LinkBtn href={item.url} target="_blank">
              <div style={{ color: "black" }}>{item.title}</div>
            </LinkBtn>
          ))
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default UserLink;
