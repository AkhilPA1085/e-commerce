import Button from "@/components/common/Button";
import ContentWrapper from "@/components/common/ContentWrapper";
import FormInput from "@/components/common/FormInput";
import ProgressBar from "@/components/common/ProgressBar";
import Link from "next/link";
import React from "react";

const Checkout = () => {
  return (
    <div className="pt-24">
      <ProgressBar steps={["Step 1", "Step 2", "Step 3"]} currentStep={2} />

      <ContentWrapper>
        <p className="pt-24">
          <span className="text-[#9B9B9B] ">Return to customer? </span>
          <span className="font-semibold text-black">
            <Link href="#">Click here to login</Link>
          </span>
        </p>
        <p className="pt-4">
          <span className="text-[#9B9B9B] ">Have a coupon? </span>
          <span className="font-semibold text-black">
            <Link href="#">Click here to enter your code</Link>
          </span>
        </p>

        <div className="grid grid-row-2 md:grid-cols-2 pt-10">
          <div>
            <h2 className="font-bold text-2xl">Billing Details</h2>

            <form>
              <label
                className="block text-[#707070] text-sm pb-2 pt-3"
                for="name"
              >
                Name*
              </label>
              <FormInput id={"name"} type={"text"} />
              <label
                className="block text-[#707070] text-sm pb-2 pt-3"
                for="country"
              >
                Country*
              </label>
              <FormInput id={"country"} type={"text"} />
              <label
                className="block text-[#707070] text-sm pb-2 pt-3"
                for="street"
              >
                Street address*
              </label>
              <FormInput id={"street"} type={"text"} />
              <label
                className="block text-[#707070] text-sm pb-2 pt-3"
                for="town"
              >
                Town/City*
              </label>
              <FormInput id={"town"} type={"text"} />
              <label
                className="block text-[#707070] text-sm pb-2 pt-3"
                for="state"
              >
                State/Country*
              </label>
              <FormInput id={"state"} type={"text"} />
              <label
                className="block text-[#707070] text-sm pb-2 pt-3"
                for="postcode"
              >
                Postcode/ZIP*
              </label>
              <FormInput id={"postcode"} type={"text"} />
              <label
                className="block text-[#707070] text-sm pb-2 pt-3"
                for="phone"
              >
                Phone*
              </label>
              <FormInput id={"phone"} type={"number"} />
              <label
                className="block text-[#707070] text-sm pb-2 pt-3"
                for="email"
              >
                Email*
              </label>
              <FormInput id={"email"} type={"email"} />
            </form>

            <ul>
              <li className="font-semibold flex items-center my-4">
                <input type="checkbox" className="mr-4" />
                <Link href="#">Create an account?</Link>
              </li>
              <li className="font-semibold flex items-center">
                <input type="checkbox" className="mr-4" />
                <Link href="#">Ship to a different address?</Link>
              </li>
            </ul>
          </div>
          <div className="pt-8 md:pt-0">
            <h2 className="font-bold text-2xl">Your Orders</h2>

            <ul className="pt-6">
              <li className="bg-gray-200 grid grid-cols-2 p-8 border-b-2 border-white">
                <h4 className="font-semibold tracking-wide">Product</h4>
                <h3 className="mx-4 font-semibold text-start">Total</h3>
              </li>
              <li className="bg-gray-200 grid grid-cols-2 p-8 border-b-2 border-white">
                <h4 className="tracking-wide">Hair oil</h4>
                <h3 className="mx-4 text-start">INR 900</h3>
              </li>
              <li className="bg-gray-200 grid grid-cols-2 p-8 border-b-2 border-white">
                <h4 className="font-semibold tracking-wide">Total</h4>
                <h3 className="mx-4 font-semibold text-start">INR 900</h3>
              </li>
            </ul>

            <div className="payment-method bg-[#E5E5E5] p-10 mt-24">
              <ul>
                <li className="mb-4">
                  <div className="relative flex items-baseline">
                    <input
                      type="checkbox"
                      value="checked"
                      class="form-checkbox text-gray appearance-none rounded-full h-3 w-3 border-2 border-black bg-white focus:outline-none focus:bg-black"
                      id="checkbox"
                    />
                    <div className="flex flex-col">
                      <label
                        for="checkbox"
                        className="ml-2 text-lg font-semibold"
                      >
                        Cash on delivery
                      </label>
                      <span className="text-[#707070] ml-2">
                        Lorem ipsum dolor sit amet.
                      </span>
                    </div>
                  </div>
                </li>

                <li className="mb-4">
                  <div className="relative flex items-baseline">
                    <input
                      type="checkbox"
                      value="checked"
                      class="form-checkbox text-gray appearance-none rounded-full h-3 w-3 border-2 border-black bg-white focus:outline-none focus:bg-black"
                      id="checkbox"
                    />
                    <div className="flex flex-col">
                      <label
                        for="checkbox"
                        className="ml-2 text-lg font-semibold"
                      >
                        Credit/Debit Card
                      </label>
                      <span className="text-[#707070] ml-2">
                        Lorem ipsum dolor sit amet.
                      </span>
                    </div>
                  </div>
                </li>

                <li className="text-[#707070] ml-6 text-start pt-20">
                  Your personal data will be used to process your order, support
                  your experience throughout this website, and for other
                  purposes described in our privacy policy.
                </li>

                <li className="pt-10">
                  <form className="flex items-center">
                    <input type="checkbox" value="checked" className="mr-4" />
                    <span className="text-[#707070]">
                      I have read and agree to the website terms and conditions
                      *
                    </span>
                  </form>
                </li>
              </ul>
            </div>

            <Button className={"mt-10 bg-black text-white w-full"}>
              place order
            </Button>
          </div>
        </div>
      </ContentWrapper>
    </div>
  );
};

export default Checkout;
