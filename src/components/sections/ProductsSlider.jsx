"use client";
import ProductCard from "../product/ProductCard";
import ContentWrapper from "../common/ContentWrapper";

import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";

import { useState } from "react";

const ProductsSlider = ({ products }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider(
    {
      breakpoints: {
        "(min-width: 400px)": {
          slides: { perView: 2, spacing: 5 },
        },
        "(min-width: 1000px)": {
          slides: { perView: 5, spacing: 10 },
        },
      },
      slides: { perView: 1 },
      loop: true,
      initial: 0,
      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel);
      },
      created() {
        setLoaded(true);
      },
    },
    [
      (slider) => {
        let timeout;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 2000);
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );
  return (
    <ContentWrapper>
      <div ref={sliderRef} className="keen-slider pt-10">
        {products?.data?.map((item) => (
          <div className="keen-slider__slide" key={item.id}>
            <ProductCard product={item} />
          </div>
        ))}
      </div>
    </ContentWrapper>
  );
};

export default ProductsSlider;
