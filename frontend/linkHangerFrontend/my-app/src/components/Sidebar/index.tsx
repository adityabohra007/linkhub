"use client";

import {
  Sidebar,
  SidebarItem,
  SidebarItemGroup,
  SidebarItems,
} from "flowbite-react";
import {
  HiArrowSmRight,
  HiChartPie,
  HiInbox,
  HiLink,
  HiShoppingBag,
  HiTable,
  HiUser,
  HiViewBoards,
} from "react-icons/hi";
import { SlPeople } from "react-icons/sl";
import { IoMdAnalytics } from "react-icons/io";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { AiOutlineShop } from "react-icons/ai";
import { MdOutlineWidgets } from "react-icons/md";
function Component() {
  const router = useRouter();
  return (
    <Sidebar
      aria-label="Default sidebar example"
      style={{ fontSize: "8px" }}
      className="bg-[#ecece9] w-[200px]"
    >
      <SidebarItems>
        <Drop />
        <SidebarItemGroup>
          <SidebarItem href="#" icon={MdOutlineWidgets} className="text-sm">
            My LinkHub
          </SidebarItem>
          <SidebarItem
            className="text-sm"
            href="#"
            icon={AiOutlineShop}
            label="Pro"
            labelColor="dark"
          >
            My Shop
          </SidebarItem>
          <SidebarItem
            className="text-sm"
            href="#"
            icon={RiMoneyDollarCircleFill}
            label="3"
          >
            Earn
          </SidebarItem>
          <SidebarItem className="text-sm" href="#" icon={SlPeople}>
            Audience
          </SidebarItem>
          <SidebarItem
            className="text-sm"
            href="/admin/analytics"
            icon={IoMdAnalytics}
            // onClick={() => {router.push("/admin/analytics")}}
          >
            Analytics
          </SidebarItem>
          <SidebarItem className="text-sm" href="#" icon={HiArrowSmRight}>
            Sign In
          </SidebarItem>
          <SidebarItem className="text-sm" href="#" icon={HiTable}>
            Sign Up
          </SidebarItem>
          <span className="p-4 font-extrabold text-[10px] text-gray-400">
            Tools
          </span>
          <SidebarItem className="text-sm" href="#" icon={HiLink}>
            Link Shortner
          </SidebarItem>
        </SidebarItemGroup>
      </SidebarItems>
    </Sidebar>
  );
}
export default Component;

import {
  Dropdown,
  DropdownDivider,
  DropdownHeader,
  DropdownItem,
} from "flowbite-react";
import { HiCog, HiCurrencyDollar, HiLogout, HiViewGrid } from "react-icons/hi";
import { CiUser } from "react-icons/ci";
import { RxLightningBolt } from "react-icons/rx";
import { FaRegCircleQuestion } from "react-icons/fa6";
import { HiOutlineLightBulb } from "react-icons/hi";
import { GoChecklist } from "react-icons/go";
import { FiPlus } from "react-icons/fi";
import { useRouter } from "next/navigation";
export function Drop() {
  return (
    <Dropdown
      renderTrigger={() => (
        <span className="px-3 py-2 text-sm hover:bg-gray-200 rounded-xl cursor-pointer">
          adityabohra619
        </span>
      )}
      label="Dropdown"
      theme={{
        arrowIcon: "ml-2 h-4 w-4",
        content: "py-1 focus:outline-none",
        floating: {
          animation: "transition-opacity",
          arrow: {
            base: "absolute z-10 h-2 w-2 rotate-45",
            style: {
              dark: "bg-gray-900 dark:bg-gray-700",
              light: "bg-white",
              auto: "bg-white dark:bg-gray-700",
            },
            placement: "-4px",
          },
          base: "z-10 w-fit divide-y divide-gray-100 rounded shadow focus:outline-none",
          content: "py-1 text-sm text-gray-700 dark:text-gray-200",
          divider: "my-1 h-px bg-gray-100 dark:bg-gray-600",
          header: "block px-4 py-2 text-sm text-gray-700 dark:text-gray-200",
          hidden: "invisible opacity-0",
          item: {
            container: "",
            base: "flex w-full cursor-pointer items-center justify-start px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:bg-gray-600 dark:focus:text-white",
            icon: "mr-2 h-4 w-4",
          },
          style: {
            dark: "bg-gray-900 text-white dark:bg-gray-700",
            light: "border border-gray-200 bg-white text-gray-900",
            auto: "border border-gray-200 bg-white text-gray-900 dark:border-none dark:bg-gray-700 dark:text-white",
          },
          target: "w-fit",
        },
        inlineWrapper: "flex items-center",
      }}
    >
      <DropdownHeader>
        <span className="block text-sm">Aditya Bohra</span>
        <span className="block truncate text-sm font-medium">
          link.hub/adityabohra619
        </span>
      </DropdownHeader>
      <DropdownItem icon={FiPlus}>Create new Linkhub</DropdownItem>
      <DropdownItem icon={CiUser}>Account</DropdownItem>
      <DropdownItem icon={RxLightningBolt}>Upgrade</DropdownItem>
      <DropdownDivider />
      <DropdownItem icon={FaRegCircleQuestion}>Ask a question</DropdownItem>
      <DropdownItem icon={GoChecklist}>Help topics</DropdownItem>
      <DropdownItem icon={HiOutlineLightBulb}>Share feedback</DropdownItem>

      <DropdownDivider />

      <DropdownItem icon={HiLogout}>Log out</DropdownItem>
    </Dropdown>
  );
}
