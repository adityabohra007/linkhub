import { useFetchUserQuery } from "@/api/linkHanger";
import styled from "styled-components";

const LinkBtn = styled.a`
  /* width: 100%; */

  width: 100%;
  display: flex;
  border: 2px solid #dfe1e2;
  background-color: #dfe1e2;
  text-decoration: none;
  color: black;
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
const UserLink = ({ username }: { username: string }) => {
  const { isLoading, isError, isFetching, isSuccess, data, error } =
    useFetchUserQuery(username);
  if (isLoading) return <div>Loading</div>;
  return (
    <div
      className="wrapper"
      style={{
        backgroundImage: ` url(${data && data?.theme?.image})`,
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
        {username[0].toUpperCase()}
      </div>
      <div
        style={{
          textAlign: "center",
          marginTop: 10,
          marginBottom: 10,
          fontFamily: "sans-serif",
          color: "black",
          fontWeight: 600,
        }}
      >
        @{username}
      </div>
      <div style={{ padding: "10px 40px" }}>
        {data && data.length ? (
          data.map((item: { id: number; url: string; title: string }) => (
            <LinkBtn key={item.id} href={item.url} target="_blank">
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
