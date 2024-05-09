import React from "react";

import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  //   CarouselDots,
} from "../components/ui/carousel_mod";

function Clients() {
  const { PUBLIC_URL } = process.env;
  const imagesList = [
    `${PUBLIC_URL}/img/clients/clients-01.png`,
    `${PUBLIC_URL}/img/clients/clients-02.png`,
    `${PUBLIC_URL}/img/clients/clients-03.png`,
    `${PUBLIC_URL}/img/clients/clients-04.png`,
    `${PUBLIC_URL}/img/clients/clients-05.png`,
    `${PUBLIC_URL}/img/clients/clients-06.png`,
    `${PUBLIC_URL}/img/clients/clients-07.png`,
    `${PUBLIC_URL}/img/clients/clients-08.png`,
  ];
  return (
    <section
      id='industries'
      className='-mb-5 relative z-[6] flex flex-col justify-center items-center px-16 py-20 bg-white rounded-none max-md:px-5 z-'>
      <div className='flex flex-col mt-2.5 w-full max-w-[1202px] max-md:max-w-full'>
        <div className='flex gap-5 self-start text-6xl font-bold max-md:flex-wrap max-md:text-4xl'>
          <div className='flex-auto text-neutral-900 max-md:text-4xl'>
            Join our growing list of{" "}
            <span className='font-outline-1 text-white'>
              happy clients
            </span>
          </div>
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
        <CarouselContent className='flex md:flex-wrap w-full mt-9 md:flex-row ml-0'>
          {imagesList.map((item, index) => (
            <CarouselItem
              key={index}
              className={`${
                ![0, 4].includes(index) ? "md:border-l-[1px]" : ""
              } ${
                ![4, 5, 6, 7].includes(index)
                  ? "md:border-b-[1px]"
                  : ""
              }
              clients-slide basis-6/12 pl-0 md:basis-1/4 flex  aspect-square justify-center items-center border-black border-solid max-md:p-3 relative`}>
              <img src={item} alt='' />
              {index % 2 === 0 ? (
                <div className='md:hidden bg-black w-[1px] absolute h-full left-[100%] top-0'></div>
              ) : (
                <></>
              )}
            </CarouselItem>
          ))}
        </CarouselContent>
        {/* <CarouselDots /> */}
      </Carousel>
    </section>
  );
}

export default Clients;
