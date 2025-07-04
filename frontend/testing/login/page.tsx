"use client";
// import './index.css'
import React, { useEffect, useState } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
// import { useLoginMutation, useValidateTokenMutation } from '@/api/authApi';
import { useLoginMutation, useValidateTokenMutation } from "../../api/authApi";
import { useRouter } from "next/navigation";
import { setLocalStorage } from "./../../utils/localstorage";
// import { useLocalStorage } from 'react-use';
import { addToken, removeToken, setLoggedIn } from "./../../features/auth";
import { RootState } from "../../store";
import { FaGoogle, FaApple, FaFacebook } from "react-icons/fa";
import { FormikProps } from "formik";

interface LoginFormValues {
  email: string;
  password: string;
}
const Login = () => {
  const [loading, setLoading] = useState(false);
  const login = useLoginMutation();
  const dispatch = useDispatch();
  const router = useRouter();
  useEffect(() => {
    if (login[1].isSuccess) {
      console.info('Succesfully logged in')
      dispatch(setLoggedIn(true));
      router.push("/admin");
    }
  }, [login[1].isSuccess]);

  const formik = useFormik<LoginFormValues>({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log("email", values);
      login[0]({ email: values.email, password: values.password });
    },
    // validationSchema: Yup.object({
    //   email: Yup.string().trim().required("Please enter valid Email"),
    //   password: Yup.string().trim().required("Required"),
    // }),
  });
  if (loading) return <h1 className="text-green-400">Loading</h1>;
  return (
    <>
      <div className="h-screen py-10 bg-[#f5f2ea]">
        <div>{/* <section>LinkHanger</section> */}</div>

        <Component formik={formik} />
      </div>
    </>
  );
};

export default Login;

import { Button, Checkbox, Label, TextInput } from "flowbite-react";

function Component({ formik }: { formik: FormikProps<LoginFormValues> }) {
  const theme = {
    base: "flex",
    addon:
      "inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-200 px-3 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-600 dark:text-gray-400",
    field: {
      base: "relative w-full",
      icon: {
        base: "pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3",
        svg: "h-5 w-5 text-gray-500 dark:text-gray-400",
      },
      rightIcon: {
        base: "pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3",
        svg: "h-5 w-5 text-gray-500 dark:text-gray-400",
      },
      input: {
        base: "block w-full border focus:outline-none focus:ring-1 disabled:cursor-not-allowed disabled:opacity-50",
        sizes: {
          sm: "p-2 sm:text-xs",
          md: "p-2.5 text-sm",
          lg: "p-4 sm:text-base",
        },
        colors: {
          gray: "border-gray-300 bg-gray-50 text-gray-900 placeholder-gray-500 focus:border-amber-500 focus:ring-amber-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500",
          info: "border-cyan-500 bg-cyan-50 text-cyan-900 placeholder-cyan-700 focus:border-cyan-500 focus:ring-cyan-500 dark:border-cyan-400 dark:bg-cyan-100 dark:focus:border-cyan-500 dark:focus:ring-cyan-500",
          failure:
            "border-red-500 bg-red-50 text-red-900 placeholder-red-700 focus:border-red-500 focus:ring-red-500 dark:border-red-400 dark:bg-red-100 dark:focus:border-red-500 dark:focus:ring-red-500",
          warning:
            "border-yellow-500 bg-yellow-50 text-yellow-900 placeholder-yellow-700 focus:border-yellow-500 focus:ring-yellow-500 dark:border-yellow-400 dark:bg-yellow-100 dark:focus:border-yellow-500 dark:focus:ring-yellow-500",
          success:
            "border-green-500 bg-green-50 text-green-900 placeholder-green-700 focus:border-green-500 focus:ring-green-500 dark:border-green-400 dark:bg-green-100 dark:focus:border-green-500 dark:focus:ring-green-500",
        },
        withRightIcon: {
          on: "pr-10",
          off: "",
        },
        withIcon: {
          on: "pl-10",
          off: "",
        },
        withAddon: {
          on: "rounded-r-lg",
          off: "rounded-lg",
        },
        withShadow: {
          on: "shadow-sm dark:shadow-sm-light",
          off: "",
        },
      },
    },
  };
  return (
    <form
      className="flex max-w-md flex-col gap-4 sm:w-[80%] w-[90%] m-auto bg-white p-10 shadow-xs rounded-sm "
      onSubmit={formik.handleSubmit}
    >
      <h2 className="font-bold text-center text-2xl">Linkhanger Login</h2>
      <p>Hey enter your details to login into your account</p>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="email1">Your email</Label>
        </div>
        {formik.errors.email ? <div>{formik.errors.email} </div> : null}
        <TextInput
          theme={theme}
          id="email"
          type="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          placeholder="name@email.com"
          required
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="password1">Your password</Label>
        </div>
        {formik.errors.password ? <div>{formik.errors.password} </div> : null}
        <TextInput
          theme={theme}
          id="password"
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          placeholder="Password"
          required
        />
      </div>
      {/* <div className="flex items-center gap-2">
        <Checkbox id="remember" />
        <Label htmlFor="remember">Remember me</Label>
      </div> */}
      <Button type="submit" className="bg-amber-500 text-black font-semibold">
        Submit
      </Button>
      <p className="text-center">-- Or Sign in with --</p>
      <div className="flex flex-wrap justify-around sm:flex-row flex-col">
        <Button
          type="button"
          className="bg-white focus:bg-white hover:bg-white  text-black shadow-sm mb-2"
        >
          <FaGoogle className={"mr-2 h-5 w-5 "} color="black" />
          Google
        </Button>
        <Button
          type="button"
          className="bg-white focus:bg-white hover:bg-white text-black shadow-sm mb-2"
        >
          <FaApple className={"mr-2 h-5 w-5"} />
          Apple
        </Button>
        <Button
          type="button"
          className="bg-white focus:bg-white hover:bg-white  text-black shadow-sm mb-2"
        >
          <FaFacebook className={"mr-2 h-5 w-5"} />
          Facebook
        </Button>
      </div>

      <p className="inline-flex justify-center">
        <span className="mr-1"> {"Don't have an account?"}</span>{" "}
        <a href="#" className="font-bold">
          Sign Up
        </a>
      </p>
    </form>
  );
}
