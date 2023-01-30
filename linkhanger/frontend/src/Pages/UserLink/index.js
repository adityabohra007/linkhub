import React from "react";
import { useParams } from "react-router-dom";
import { useFetchUserQuery } from "../../redux/api/linkHanger";
import styled from "styled-components";
// import "./index.css";

const LinkBtn = styled.a`
  /* width: 100%; */

  width: 100%;
  display: flex;
  border: 2px solid white;
  background-color: transparent;
  text-decoration: none;
  color: white;
  padding: 15px;
  justify-content: center;
  font-weight: 600;
  font-family: sans-serif;
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
  return (
    <div
      className="wrapper"
      style={{
        backgroundImage: ` url(${ddata && data.theme.image})`,
        height: "100vh",

        backgroundRepeat: "repeat",
        backgroundSize: "cover",
        padding: "20px",
      }}
    >
      <div
        style={{
          backgroundColor: "#1b577d",
          width: 50,
          height: 50,
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
      <div style={{ padding: "10px 40px" }}>
        {data && data.link.length ? (
          data.links.map((item) => (
            <LinkBtn href={item.url} target="_blank">
              <div>{item.title}</div>
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
