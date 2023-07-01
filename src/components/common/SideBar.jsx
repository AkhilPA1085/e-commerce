import Image from "next/image";
import React from "react";

import CLOSEICON from "../../../public/assets/closeIcon.svg";
import Button from "./Button";
import Link from "next/link";

const SideBar = ({ sideBarShow, setSideBarShow }) => {
  return (
    <aside className="fixed top-0 right-0 z-40 lg:w-80 h-screen transition-transform translate-x-0 sm:translate-x-0 bg-white border flex justify-between items-center flex-col h-screen p-5">
      <div className="w-full">
        <div className="flex flex-wrap items-center justify-between border-b-2 pb-5">
          <h4 className="font-bold text-black uppercase">shopping cart</h4>
          <button onClick={() => setSideBarShow(false)}>
            <Image height={30} width={30} src={CLOSEICON} />
          </button>
        </div>
        <ul className="list p-0 list-none">
          <li className="flex items-center justify-between border-b-1 py-4">
            <div className="desc">
              <p className="title capitalize text-gray-400">Product Name</p>
              <div className="quantity text-gray-400">4 x 1200</div>
            </div>
            <Image
              width={100}
              height={150}
              src={"https://dummyimage.com/720x400"}
            />
          </li>
        </ul>
      </div>

      <div className="buttons-container flex justify-between flex-col w-full gap-5">
        <h4 className="font-bold text-black uppercase flex justify-between items-center">
          sub total: <span>900</span>
        </h4>
        <Link href={"/cart"}>
          <Button className={"w-full"}>view cart</Button>
        </Link>
        <Link href={"/checkout"}>
          <Button className={"bg-black text-white w-full"}>checkout</Button>
        </Link>
      </div>
    </aside>
  );
};

export default SideBar;
