"use client";

import {
  Button,
  CloseIcon,
  Drawer,
  DrawerHeader,
  DrawerItems,
} from "flowbite-react";
import { useState } from "react";
import CopyToClipboard from "./CopyToClipboard";

export function BottomDrawer({
  isOpen,
  handleClose,
}: {
  isOpen: boolean;
  handleClose: () => void;
}) {
  return (
    <>
      {/* <div className="flex min-h-[50vh] items-center justify-center">
        <Button onClick={() => setIsOpen(true)}>Show bottom drawer</Button>
      </div> */}
      <Drawer
        open={isOpen}
        onClose={handleClose}
        position="bottom"
        className="h-[80%]"
      >
        <DrawerItems>
          <div className="flex justify-center">
            <CloseIcon className="absolute right-5" onClick={handleClose} />
            <p className="text-center font-extrabold">Share your Linkhub</p>
          </div>
          <div className="flex flex-row align-middle justify-center m-10">
            <CopyToClipboard />
          </div>
        </DrawerItems>
      </Drawer>
    </>
  );
}
