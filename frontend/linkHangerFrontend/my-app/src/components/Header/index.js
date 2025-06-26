import React from "react";
import logo from "./../../../public/images/preview-xl-crop.jpg";
import { Button } from "flowbite-react";
import { LuShare } from "react-icons/lu";
import { HiOutlineColorSwatch } from "react-icons/hi";
import { CiSettings } from "react-icons/ci";
export const Header = () => {
  return (
    <header className="bg-[#d5dbe2] flex w-full justify-between">
      <div
        className="p-4"
        style={{
          display: "flex",
          fontFamily: 'var(--font-roboto)',
          fontWeight: 600,
          alignItems: "center",
          fontSize: 18,

        }}
      >
        {/* <img
            src={logo}
            height="50"
            width={"50"}
            style={{ borderRadius: 20, padding: 5 }}
          ></img> */}
        <div>My linkhub</div>
      </div>
      <div className="flex">
        <Button color={'alternative'} className="m-2"><HiOutlineColorSwatch className="mr-2" />Design</Button>
        <Button color={'alternative'} className="m-2"><LuShare className="mr-2" />Share</Button>
        <Button color={'alternative'} className="m-2"><CiSettings size="20" /></Button>

      </div>
    </header>
  );
};
