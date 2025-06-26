import { IoMdAnalytics } from "react-icons/io";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { AiOutlineShop } from "react-icons/ai";
import { MdOutlineWidgets } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";

const BottomNavigation = () => {
  return (
    <div className="flex fixed bottom-0 justify-between w-full sm:hidden bg-white p-2">
      <div className="flex flex-col  items-center px-2 group ">
        <MdOutlineWidgets
          size="30"
          className="text-gray-300 group-hover:text-black"
        />
        <span className="text-[10px] py-1">My Linkhub</span>
      </div>
      <div className="flex flex-col  items-center px-2 group">
        <AiOutlineShop
          size="30"
          // color="gray"
          className="group-hover:text-black text-gray-300"
        />
        <span className="text-[10px] py-1 group-hover:text-black text-gray-300">
          My Shop
        </span>
      </div>
      <div className="flex flex-col  items-center px-2 group">
        <RiMoneyDollarCircleFill
          size="30"
          className="group-hover:text-black text-gray-300"
        />
        <span className="text-[10px] py-1 1 group-hover:text-black text-gray-300">
          Earn
        </span>
      </div>
      <div className="flex flex-col  items-center px-2 group">
        <IoMdAnalytics
          size="30"
          className="group-hover:text-black text-gray-300"
        />
        <span className="text-[10px] py-1 1 group-hover:text-black text-gray-300">
          Analytics
        </span>
      </div>
      <div className="flex flex-col  items-center px-2 group">
        <RxHamburgerMenu
          size="30"
          className="group-hover:text-black text-gray-300"
        />
        <span className="text-[10px] py-1  1 group-hover:text-black text-gray-300 ">
          More
        </span>
      </div>
    </div>
  );
};

export default BottomNavigation;
