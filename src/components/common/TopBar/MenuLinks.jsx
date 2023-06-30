import Link from "next/link";
import ContentWrapper from "../ContentWrapper";
import Image from "next/image";

import DOWNARROW from "../../../../public/assets/downArrow.svg";

const MenuLinks = ({ categories }) => {
  return (
    <>
      {categories?.map((category, index) => {
        return (
          <div className="group">
            <li className="my-0 md:mx-5 capitalize text-lg font-semibold flex items-center cursor-pointer" key={index}>
              <Link href="/">{category.label}</Link> 
              <Image src={DOWNARROW} height={30} width={30} alt=""/>
            </li>
            {category.submenu && (
              <div className="md:absolute left-0 w-full hidden group-hover:block bg-white z-10 py-10">
                <ContentWrapper>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
                    {category?.sublinks?.map((mainsublink, i) => (
                      <div key={mainsublink.Head}>
                        <h1 className="font-bold">{mainsublink.Head}</h1>
                        {mainsublink.sublink.map((item, i) => (
                          <div className="my-5">
                            <Link href={item.link} key={item.name}>
                              {item.name}
                            </Link>
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                </ContentWrapper>
              </div>
            )}
          </div>
        );
      })}
    </>
  );
};

export default MenuLinks;
