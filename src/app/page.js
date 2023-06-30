import CategoriesSection from "@/components/sections/CategoriesSection";
import MainBanner from "@/components/sections/MainBanner";
import ProductsSlider from "@/components/sections/ProductsSlider";
import { getServerSideProps } from "../../services/api";

export default async function Home() {
  const products = await getServerSideProps('/api/products?populate=*');
  
  return (
    <>
      <MainBanner />
      {/* <CategoriesSection cols={2}/> */}
      <ProductsSlider products={products}/>
    </>
  );
}


