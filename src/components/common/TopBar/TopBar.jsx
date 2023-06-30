"use client";
import Link from "next/link";
import ContentWrapper from "../ContentWrapper";
import { categories } from "@/dummyData/data";
import MenuLinks from "./MenuLinks";
import Image from "next/image";

import CART from "../../../../public/assets/cartIcon.svg";
import FAV from "../../../../public/assets/heartIcon.svg";
import MENU from "../../../../public/assets/menuIcon.svg";
import { useState } from "react";

const TopBar = () => {
  const [mobileShow, setMobileShow] = useState(false);
  return (
    <div className="fixed top-0 w-full z-10 bg-white">
      <ContentWrapper>
        <nav className="flex items-center justify-between py-5">
          {/* brand name */}
          <Link href="/" className="text-black md:text-3xl">
            E-Commerce
          </Link>

          {/* category links */}
          <ul
            className={
              mobileShow
                ? `absolute top-16 right-0 w-full bg-white z-10`
                : `hidden md:flex justify-between`
            }
          >
            <MenuLinks
              categories={categories}
              mobileShow={mobileShow}
              setMobileShow={setMobileShow}
            />
          </ul>

          {/* cart & fav */}
          <ul className="flex justify-between">
            <li className="my-0 mx-5 capitalize text-lg">
              <Image height={30} width={30} src={FAV} alt="whish-list"/>
            </li>
            <li className="my-0 mx-5 capitalize text-lg">
              <Image height={30} width={30} src={CART} alt="cart"/>
            </li>
            <li
              className="block md:hidden my-0 mx-5 capitalize text-lg"
              onClick={() => setMobileShow(!mobileShow)}
            >
              <Image height={30} width={30} src={MENU} alt="menu"/>
            </li>
          </ul>
        </nav>
      </ContentWrapper>
    </div>
  );
};

export default TopBar;
