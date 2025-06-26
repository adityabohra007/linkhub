import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./index.css";
import { Header } from "../../components/Header";
import { useLoginUserMutation } from "../../redux/api/authApi";
import { login } from "../../redux/features/auth/authSlice";

import { useForm } from "react-hook-form";

import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Container,
  Img,
  Grid,
  Box,
  Input,
  InputGroup,
  InputLeftElement,
  InputAddon,
  Text,
  Button,
  Link,
  Center,
  InputRightElement,
} from "@chakra-ui/react";
import LoadingButton from "@mui/lab/LoadingButton";
import { styled } from "@mui/material/styles";
import { purple } from "@mui/material/colors";
import logo from "./../../public/images/bitmap.png";
// const ColorButton = styled(Button)(({ theme }) => ({
//   color: theme.palette.getContrastText(purple[500]),
//   backgroundColor: purple[500],
//   "&:hover": {
//     backgroundColor: purple[700],
//   },
// }));

// const CustomLoadingButton = styled()
// const RedditTextField = styled((props) => (
//   <TextField
//     InputProps={{
//       disableUnderline: true,
//     }}
//     {...props}
//   />
// ))(({ theme }) => ({
//   "& .MuiFilledInput-root": {
//     border: "1px solid #e2e2e1",
//     overflow: "hidden",
//     borderRadius: 4,
//     // backgroundColor: theme.palette.mode === "light" ? "#fcfcfb" : "#2b2b2b",
//     backgroundColor: "#eeeeee",
//     transition: theme.transitions.create([
//       "border-color",
//       "background-color",
//       "box-shadow",
//     ]),
//     "&:hover": {
//       backgroundColor: "transparent",
//     },
//     "&.Mui-focused": {
//       backgroundColor: "transparent",
//       boxShadow: "black", //`${alpha(theme.palette.primary.main, 0.25)} 0 0 0 2px`,
//       border: "2px solid black", //theme.palette.primary.main,
//     },
//   },
// }));

const useLogin = () => {
  const [trigger, { isError, isLoading, isSuccess, data, error }] = useLoginUserMutation()
  if (error.status === 403) {

  }
  if (error.status === 401) {
    
   }
  return { trigger, isError, isLoading, isSuccess, data, error }
}


export const Login = () => {
  const [userAuth, setUserAuth] = useState({
    username: "",
    password: "",
    submitted: false,
  });
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  console.log(process.env);
  const selector = useSelector((state) => state.authentication);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loginUser, { isError, isLoading, isSuccess, error, data }] =
    useLoginUserMutation();

  if (isSuccess) {
    console.log(data);
    dispatch(login(data));
    localStorage.setItem("user", JSON.stringify(data));
    // navigate("/home");
  }

  useEffect(() => {
    if (selector.loggedIn) {
      navigate("/home");
    }
  }, [selector.loggedIn]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserAuth({
      ...userAuth,
      [name]: value,
    });
  };

  // const handleSubmit = () => {
  //   setUserAuth({
  //     ...userAuth,
  //     submitted: true,
  //   });
  //   const { username, password } = userAuth;
  //   if (username && password) {
  //     loginUser({
  //       username: username,
  //       password: password,
  //     });
  //   }
  // };
  if (selector.isLoading) {
    return <h2> Loading </h2>;
  }
  return (
    <Grid>
      <Box p={2}>
        <Img src={logo} height={39}></Img>
      </Box>
      <Container>
        <h2
          style={{
            fontSize: "35px",
            fontWeight: "600",
            margin: "40px auto",
            textAlign: "center",
          }}
        >
          Log in to your LinkHanger{" "}
        </h2>
      </Container>

      <Container>
        <form>
          <FormControl>
            {/* <InputGroup>
              <InputAddon children="linkhanger.com/" />
              <Input
                defaultValue={""}
                {...register("Username")}
                focusBorderColor={"green"}
              />
            </InputGroup> */}
          </FormControl>
          <FormControl mt={4}>
            <FormLabel>Password</FormLabel>

            <Input
              defaultValue={""}
              {...register("Password")}
              focusBorderColor={"green"}
            />

            <InputRightElement width={"4.5rem"}></InputRightElement>
          </FormControl>
          <Box mt={5}>
            <Link textAlign={"center"}>Login with Phonenumber</Link>
          </Box>

          <Button
            colorScheme={"teal"}
            size={"lg"}
            w={"100%"}
            borderRadius={20}
            mt={6}
          >
            Log in
          </Button>
          <Center mt={10}>
            <Link textAlign={"center"}>Forgot Password?</Link>
          </Center>
          <Center>
            <Text fontWeight={200} color={"gray"} fontSize={"16px"}>
              Don't have an account?
            </Text>

            <Link ml={1}>Sign Up</Link>
          </Center>
        </form>
      </Container>
    </Grid>
  );
  // return (
  //   <Grid container>
  //     <Grid item xs={12}>
  //       <Header> </Header>{" "}
  //     </Grid>{" "}
  //     <Grid item xs={12} spacing={2}>
  //       <Grid item xs={12} mt={2}>
  //         <Grid
  //           item
  //           mx={"auto"}
  //           xs={12}
  //           md={6}
  //           justifyContent={"center"}
  //           px={5}
  //           py={5}
  //           borderRadius={2}
  //           alignContent={"center"}
  //           sx={{
  //             background: "white",
  //             border: "1px solid silver",
  //           }}
  //         >
  //           <Typography variant="h5" textAlign={"center"} component="h2">
  //             Log in to your LinkHanger account{" "}
  //           </Typography>{" "}
  //           <Box
  //             component="form"
  //             noValidate
  //             sx={{
  //               width: 400,
  //               margin: "auto",
  //               display: "grid",
  //             }}
  //           >
  //             <FormControl>
  //               <RedditTextField
  //                 label="linkhanger.com/username"
  //                 // defaultValue=""
  //                 id="reddit-input"
  //                 variant="filled"
  //                 style={{
  //                   marginTop: 20,
  //                 }}
  //                 onChange={(event) => {
  //                   setUserAuth({
  //                     ...userAuth,
  //                     username: event.target.value,
  //                   });
  //                 }}
  //                 value={userAuth.username}
  //               />
  //               <TextField
  //                 id="filled-password-input"
  //                 label="Password"
  //                 type="password"
  //                 value={userAuth.password}
  //                 onChange={(event) => {
  //                   setUserAuth({
  //                     ...userAuth,
  //                     password: event.target.value,
  //                   });
  //                 }}
  //                 autoComplete="current-password"
  //                 variant="filled"
  //                 style={{
  //                   marginTop: 10,
  //                 }}
  //               />
  //               <Box
  //                 sx={{
  //                   justifyContent: "center",
  //                 }}
  //               >
  //                 <Stack
  //                   direction={"row"}
  //                   alignContent={"center"}
  //                   justifyContent={"center"}
  //                 >
  //                   <LoadingButton
  //                     onClick={() => handleSubmit()}
  //                     sx={{
  //                       background: "#1c658c",
  //                       mt: 10,
  //                     }}
  //                     variant="contained"
  //                   >
  //                     Login{" "}
  //                   </LoadingButton>{" "}
  //                 </Stack>{" "}
  //               </Box>{" "}
  //             </FormControl>{" "}
  //           </Box>{" "}
  //           {userAuth.submitted && !userAuth.password && (
  //             <Typography
  //               variant="p"
  //               textAlign={"center"}
  //               mt={2}
  //               fontFamily={"Red Hat Display"}
  //               component="h5"
  //             >
  //               Username and Password did not match{" "}
  //             </Typography>
  //           )}{" "}
  //           {/* <div className={type}>{message}</div> */}{" "}
  //           <Typography
  //             variant="p"
  //             textAlign={"center"}
  //             mt={2}
  //             fontFamily={"Red Hat Display"}
  //             component="h5"
  //           >
  //             Forgot Password{" "}
  //           </Typography>{" "}
  //           <Typography
  //             variant="p"
  //             textAlign={"center"}
  //             mt={2}
  //             fontWeight={200}
  //             fontFamily={"Red Hat Display"}
  //             component="h5"
  //           >
  //             Don 't have account? Create one{" "}
  //           </Typography>{" "}
  //         </Grid>{" "}
  //       </Grid>{" "}
  //     </Grid>{" "}
  //   </Grid>
  // );
  // return (
  //   <div className="col-md-6 col-md-offset-3">
  //     {/* <Test></Test> */}
  //     <h2>Login</h2>
  //     <form name="form" onSubmit={handleSubmit}>
  //       <div
  //         className={
  //           "form-group" +
  //           (userAuth.submitted && !userAuth.username ? " has-error" : "")
  //         }
  //       >
  //         <label htmlFor="username">Username</label>
  //         <input
  //           type="text"
  //           className="form-control"
  //           name="username"
  //           value={userAuth.username}
  //           onChange={handleChange}
  //         />
  //         {userAuth.submitted && !userAuth.username && (
  //           <div className="help-block">Username is required</div>
  //         )}
  //       </div>
  //       <div
  //         className={
  //           "form-group" +
  //           (userAuth.submitted && !userAuth.password ? " has-error" : "")
  //         }
  //       >
  //         <label htmlFor="password">Password</label>
  //         <input
  //           type="password"
  //           className="form-control"
  //           name="password"
  //           value={userAuth.password}
  //           onChange={handleChange}
  //         />
  //         {userAuth.submitted && !userAuth.password && (
  //           <div className="help-block">Password is required</div>
  //         )}
  //       </div>
  //       <div className="form-group">
  //         <button className="btn btn-primary">Login</button>
  //         {loggingIn && (
  //           <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
  //         )}
  //         <Link to="/register" className="btn btn-link">
  //           Register
  //         </Link>
  //       </div>
  //     </form>
  //   </div>
  // );
};
