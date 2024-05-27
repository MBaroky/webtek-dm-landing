import React from "react";
import { logos } from "../data/logos";
import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselDots,
} from "../components/ui/carousel_mod";

function Clients() {
  return (
    <section
      id='clients'
      className=' rounded-br-3xl rounded-bl-3xl -mb-5 relative z-[4] flex flex-col justify-center items-center px-16 py-20 bg-white rounded-none max-md:px-5 z-'>
      <div className='flex items-center flex-col mt-2.5 w-full max-w-[1200px] max-md:max-w-full'>
        <div className='flex gap-5 text-6xl font-bold max-md:flex-wrap max-md:text-4xl'>
          <div className='flex-auto text-center text-neutral-900 max-md:text-4xl'>
            Join our growing list of{" "}
            <span className='font-outline-1 text-white'>
              happy clients
            </span>
          </div>
        </div>
        <Carousel
          opts={{
            breakpoints: {
              "(min-width: 768px)": { loop: false },
            },
            align: "start",
            loop: true,
            slidesToScroll: 2,
          }}
          plugins={[
            Autoplay({
              delay: 2000,
            }),
          ]}
          className='-ml-1 w-full'>
          <CarouselContent className=' md:flex-wrap  w-full mt-9  ml-0'>
            {logos.map((item, index) => (
              <CarouselItem
                key={index}
                className={`
                ${index % 4 !== 0 ? "md:border-l-[1px]" : ""}
                ${index < 4 ? "md:border-b-[1px]" : ""}
              clients-slide basis-6/12 pl-0 md:basis-1/4 flex   aspect-square justify-center items-center border-black border-solid max-md:p-3 relative`}>
                <img src={item} alt='' />
                {index % 2 === 0 ? (
                  <div className='md:hidden bg-black w-[1px] absolute h-full left-[100%] top-0'></div>
                ) : (
                  <></>
                )}
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselDots className='mt-5' />
        </Carousel>
      </div>
    </section>
  );
}

export default Clients;
