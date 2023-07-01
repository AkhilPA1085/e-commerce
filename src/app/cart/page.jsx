import ContentWrapper from "@/components/common/ContentWrapper";
import ProgressBar from "@/components/common/ProgressBar";
import Image from "next/image";
import React from "react";

import CLOSEICON from "../../../public/assets/closeIcon.svg";
import Button from "@/components/common/Button";
import Link from "next/link";

const Cart = () => {
  return (
    <div className="py-24">
      <ContentWrapper>
        <ProgressBar steps={["Step 1", "Step 2", "Step 3"]} currentStep={2} />

        <div className="lg:flex items-baseline">
          <ul className="list-none pt-24 lg:w-3/5 lg:mr-5">
            <li className="flex flex-col lg:flex-row items-center mb-5">
              <div className="flex items-center lg:w-1/3">
                <Image width={30} height={30} src={CLOSEICON} />
                <Image
                  width={150}
                  height={160}
                  src={"https://dummyimage.com/720x400"}
                />
              </div>

              <div className="flex items-center justify-between lg:w-2/3">
                <h6 className="font-bold text-black capitalize mt-5 lg:mt-0 mr-5 lg:mr-0">
                  title
                </h6>

                <input
                  type="number"
                  name="quantity"
                  id=""
                  min={1}
                  defaultValue={1}
                  className="rounded border appearance-none border-gray-300 py-4 px-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base w-14  mt-5 lg:mt-0 mr-5 lg:mr-0"
                />

                <h4 className="font-bold text-black uppercase flex justify-between items-center mt-5 lg:mt-0 mr-5 lg:mr-0">
                  900
                </h4>
              </div>
            </li>
            <li className="flex flex-col lg:flex-row items-center mb-5">
              <div className="flex items-center lg:w-1/3">
                <Image width={30} height={30} src={CLOSEICON} />
                <Image
                  width={150}
                  height={160}
                  src={"https://dummyimage.com/720x400"}
                />
              </div>

              <div className="flex items-center justify-between lg:w-2/3">
                <h6 className="font-bold text-black capitalize mt-5 lg:mt-0 mr-5 lg:mr-0">
                  title
                </h6>

                <input
                  type="number"
                  name="quantity"
                  id=""
                  min={1}
                  defaultValue={1}
                  className="rounded border appearance-none border-gray-300 py-4 px-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base w-14  mt-5 lg:mt-0 mr-5 lg:mr-0"
                />

                <h4 className="font-bold text-black uppercase flex justify-between items-center mt-5 lg:mt-0 mr-5 lg:mr-0">
                  900
                </h4>
              </div>
            </li>
            <li className="flex flex-col lg:flex-row items-center mb-5">
              <div className="flex items-center lg:w-1/3">
                <Image width={30} height={30} src={CLOSEICON} />
                <Image
                  width={150}
                  height={160}
                  src={"https://dummyimage.com/720x400"}
                />
              </div>

              <div className="flex items-center justify-between lg:w-2/3">
                <h6 className="font-bold text-black capitalize mt-5 lg:mt-0 mr-5 lg:mr-0">
                  title
                </h6>

                <input
                  type="number"
                  name="quantity"
                  id=""
                  min={1}
                  defaultValue={1}
                  className="rounded border appearance-none border-gray-300 py-4 px-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base w-14  mt-5 lg:mt-0 mr-5 lg:mr-0"
                />

                <h4 className="font-bold text-black uppercase flex justify-between items-center mt-5 lg:mt-0 mr-5 lg:mr-0">
                  900
                </h4>
              </div>
            </li>
          </ul>

          <div className="cart-description lg:w-2/5">
            <ul className="list-none">
              <li className="py-5 px-5 bg-gray-200  font-bold text-black flex justify-between items-center uppercase my-5">
                <span>sub total</span>
                <span>9090</span>
              </li>
              <li className="py-5 px-5 bg-gray-200  font-bold text-black flex justify-between items-center uppercase my-5">
                <span>shipping</span>
                <span>9090</span>
              </li>
              <li className="py-5 px-5 bg-gray-200  font-bold text-black flex justify-between items-center uppercase my-5">
                <span>total</span>
                <span>9090</span>
              </li>

              <Link href={"/checkout"}>
              <Button className={"mt-10 bg-black text-white w-full"}>
                proceed to checkout
              </Button>
              </Link>  
            </ul>
          </div>
        </div>
      </ContentWrapper>
    </div>
  );
};

export default Cart;
