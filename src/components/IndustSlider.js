import React from "react";
import { industriesData, slides } from "../data/industriesData";

import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  //   CarouselDots,
} from "./ui/carousel_mod";

function IndustriesItem({ label, icon }) {
  return (
    <div className='flex md:basis-4/12 max-lg:basis-6/12 gap-3.5 flex max-lg:flex-col max-lg:justify-center max-lg:items-center max-lg:self-center mt-5 max-lg:w-auto'>
      <img
        className='w-[30px] aspect-square object-contain'
        loading='lazy'
        src={icon}
        alt=''
      />
      <div className='my-auto leading-none'>{label}</div>
    </div>
  );
}
function IndustSlider() {
  return (
    <Carousel
      opts={{
        breakpoints: {
          "(min-width: 768px)": { loop: false },
        },
        align: "start",
        loop: true,
      }}
      plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}
      className=' w-full'>
      <CarouselContent className='-ml-1 md:flex-col lg:flex lg:w-full mt-9 lg:flex-row lg:items-stretch'>
        {slides.map((slide, index) => {
          return slide ? (
            <CarouselItem className='indust-slide  lg:basis-1/5 flex flex-col max-lg:flex-row max-lg:flex-wrap justify-center py-1 max-lg:w-full'>
              {industriesData
                .filter(item => item.slide === slide)
                .map((item, index) => (
                  <IndustriesItem
                    key={index}
                    label={item.label}
                    icon={item.icon}
                  />
                ))}
            </CarouselItem>
          ) : (
            <></>
          );
        })}
      </CarouselContent>
      {/* <CarouselDots /> */}
    </Carousel>
  );
}

export default IndustSlider;
