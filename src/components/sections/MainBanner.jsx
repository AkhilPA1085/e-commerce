'use client';
import React, { useState } from "react";
import ContentWrapper from "../common/ContentWrapper";

import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";

import CategoryCard from "../common/CategoryCard";

const MainBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider(
    {
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
      <div ref={sliderRef} className="keen-slider">
        <div className="keen-slider__slide">
          <CategoryCard/>
        </div>
        <div className="keen-slider__slide">
          <CategoryCard/>
        </div>
        <div className="keen-slider__slide">
          <CategoryCard/>
        </div>
      </div>
    </ContentWrapper>
  );
};

export default MainBanner;
