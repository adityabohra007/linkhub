"use client";
import withAuth from "./../../../utils/withAuth";
const Page = () => {
  return <Admin />;
};
export default withAuth(Page);

import React from "react";
import "./index.css";
// import { useDispatch } from "react-redux";
import { Button } from "flowbite-react";
import { FiArrowLeft } from "react-icons/fi";
import { FaRegEye } from "react-icons/fa6";
import Admin from "../admin";
import { useRouter } from "next/navigation";
const Component = () => {
  const router = useRouter();
  return (
    <div className="flex ">
      <Button
        color={"transparent"}
        className="m-2"
        onClick={() => {
          router.push("/admin?view=initial");
        }}
      >
        <FiArrowLeft size="27" color="black" />
      </Button>

      <h1 className="m-2 p-2 font-extrabold text-xl flex-1 text-center ">
        Edit
      </h1>
      <Button
        color={"white"}
        className="m-2 mr-4 bg-white"
        onClick={() => router.push("/admin?view=preview")}
      >
        <FaRegEye size="17" className="mr-1" color="black" />
        View
      </Button>
    </div>
  );
};
