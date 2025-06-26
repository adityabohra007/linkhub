import { SlPeople } from "react-icons/sl";

import { IoReorderThree } from "react-icons/io5";
import React, { useState } from "react";
import { Header } from "../../components/Header";
import "./index.css";

// import { useDispatch } from "react-redux";
import { LinkSection } from "../../components/LinkSection";
import { ADDRCONFIG } from "dns";
import BottomNavigation from "@/components/BottomNavigation";
import DeviceFrame from "@/components/DeviceFrame";
import { Button, Sidebar } from "flowbite-react";
import { CiSettings } from "react-icons/ci";
import { useRouter, useSearchParams } from "next/navigation";
import { MdOutlineDesignServices } from "react-icons/md";
import { FiArrowLeft } from "react-icons/fi";
import { LuShare } from "react-icons/lu";
import { FaRegEye } from "react-icons/fa6";
import { BottomDrawer } from "@/components/BottomDrawer";
import UserLink from "@/components/UserLink";
import { TbIcons } from "react-icons/tb";

const Admin = () => {
  const search = useSearchParams();
  const router = useRouter();
  const param = search.get("view");
  const [isOpen, setIsOpen] = useState(false);

  console.log(search);
  const view = () => {
    if (search.get("view")) {
      if (param == "edit") {
        return (
          <>
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
            <LinkSection />
          </>
        );
      }
      if (param == "preview") {
        return (
          <>
            <BottomDrawer
              handleClose={() => {
                setIsOpen(false);
              }}
              isOpen={isOpen}
            >
                {}
            </BottomDrawer>
            <div className="flex ">
              <Button
                color={"transparent"}
                className="m-2"
                onClick={() => {
                  router.push("/admin?view=edit");
                }}
              >
                <FiArrowLeft size="27" color="black" />
              </Button>

              <h1 className="m-2 p-2 font-extrabold text-xl flex-1 text-center ">
                linkhub.com/abohra
              </h1>
              <Button
                color={"transparent"}
                className="m-2"
                onClick={() => {
                  setIsOpen(true);
                }}
              >
                <LuShare size="20" color="black" />
              </Button>
            </div>
            <UserLink username={"abohra"} />
          </>
        );
      }
      if (param == "inital") {
      }
    }
    return (
      <>
        <div className="flex justify-between">
          <h1 className="m-2 p-2 font-extrabold text-xl">My Linkhub</h1>
          <Button color={"transparent"} className="m-2">
            <CiSettings size="27" color="black" />
          </Button>
        </div>
        <DeviceFrame />
      </>
    );
  };

  //   const dispatch = useDispatch();
  //   const navigate = useNavigate();

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
    <>
      <div className="md:hidden block  bg-[#f3f3f1] h-full">{view()}</div>
      {(param == "initial" || param == undefined) && (
        <>
          <BottomDrawer
            handleClose={() => {
              setIsOpen(false);
            }}
            isOpen={isOpen}
          ></BottomDrawer>
          <div className="fixed bottom-20 flex justify-between w-full gap-10 p-3 sm:hidden ">
            <Button
              title="Design"
              className="flex-1/3  flex flex-col h-20 bg-white text-black hover:bg-gray-300  "
            >
              <MdOutlineDesignServices className="mb-2" size={22} />
              Design
            </Button>
            <Button
              title="Edit"
              onClick={() => {
                router.push("/admin/?view=edit");
              }}
              className="flex-1/3 flex flex-col  h-20  bg-white text-black  hover:bg-gray-300"
            >
              <TbIcons className="mb-2" size={22} />
              Edit
            </Button>
            <Button
              title="Share"
              className="flex-1/3 flex flex-col  h-20  bg-white text-black  hover:bg-gray-300"
            >
              <LuShare
                className="mb-2"
                size={22}
                onClick={() => setIsOpen(true)}
              />
              Share
            </Button>
          </div>
        </>
      )}

      <BottomNavigation />
      <div className="Container md:grid hidden">
        <Sidebar />
        <div className="Main bg-[#e9e9e9]">
          <div className="Navigation col-span-2">
            <Header></Header>
            {/* <section className="mainTopMenu">
            <a href={"#"}>Links</a>
            <a href="#">Appearance</a>
            <p onClick={handleLogout}>Logout</p>
          </section> */}
          </div>
          {/* <div className="Link">
          <p>
            My Hanger <a href="#">http://site/abohra</a>
          </p>
        </div> */}
          <div className="LinkEdit mx-auto bg-gray-100">
            <LinkSection></LinkSection>
          </div>
          <div className="LinkPreview px-10 z-10 ">
            <DeviceFrame />
          </div>
        </div>
      </div>
    </>
  );
};

export default Admin;
