import Image from "next/image";
import { getServerSideProps } from "../../../../services/api";
import ContentWrapper from "@/components/common/ContentWrapper";
import Button from "@/components/common/Button";
import Accordion from "@/components/common/Accordion";

const page = async ({ params }) => {
  const productData = await getServerSideProps(
    `/api/products?filters[slug]=${params.slug}`
  );
  const product = productData?.data[0];
  console.log(product);
  return (
    <section className="text-gray-600 body-font overflow-hidden py-24">
      <ContentWrapper>
        <div className="lg:flex">
          <div className="lg:w-1/2 w-full lg:py-6 mt-6 lg:mt-0 flex flex-wrap">
            <Image
              width={500}
              height={500}
              alt="ecommerce"
              className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded p-2"
              src="https://dummyimage.com/400x400"
            />
            <Image
              width={500}
              height={500}
              alt="ecommerce"
              className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded p-2"
              src="https://dummyimage.com/400x400"
            />
            <Image
              width={500}
              height={500}
              alt="ecommerce"
              className="w-full lg:h-auto h-64 object-cover object-center rounded p-2"
              src="https://dummyimage.com/400x400"
            />
            <Image
              width={500}
              height={500}
              alt="ecommerce"
              className="lg:w-1/3 w-full lg:h-auto h-64 object-cover object-center rounded p-2"
              src="https://dummyimage.com/400x400"
            />
            <Image
              width={500}
              height={500}
              alt="ecommerce"
              className="lg:w-1/3 w-full lg:h-auto h-64 object-cover object-center rounded p-2"
              src="https://dummyimage.com/400x400"
            />
            <Image
              width={500}
              height={500}
              alt="ecommerce"
              className="lg:w-1/3 w-full lg:h-auto h-64 object-cover object-center rounded p-2"
              src="https://dummyimage.com/400x400"
            />
          </div>
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h2 className="text-sm title-font text-gray-500 tracking-widest uppercase">
              {product?.attributes?.title}
            </h2>
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1 capitalize">
              {product?.attributes?.title}
            </h1>
            <span className="title-font font-medium text-2xl text-gray-900 pt-4">
              $58.00
            </span>
            <div className="flex py-5">
              <span className="mr-3">Color</span>
              <button className="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none"></button>
              <button className="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none"></button>
              <button className="border-2 border-gray-300 ml-1 bg-indigo-500 rounded-full w-6 h-6 focus:outline-none"></button>
            </div>
            <div className="flex items-center py-5">
              <span className="mr-3">Size</span>
              <div className="relative">
                <select className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10">
                  <option>SM</option>
                  <option>M</option>
                  <option>L</option>
                  <option>XL</option>
                </select>
                <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                  >
                    <path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </div>
            </div>

            <div className="flex items-center py-5">
              <input
                type="number"
                name="quantity"
                id=""
                min={1}
                defaultValue={1}
                className="rounded border appearance-none border-gray-300 py-4 px-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base mr-5 w-2/12"
              />
              <Button className={"bg-black text-white"}>Add to cart</Button>
            </div>

            <div className="flex items-center py-5">
              <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500">
                <svg
                  fill="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                </svg>
              </button>
              <span className="font-bold text-black ml-4">Add To Wishlist</span>
            </div>

            <Accordion/>
            <Accordion/>

          </div>
        </div>
      </ContentWrapper>
    </section>
  );
};

export default page;
