import * as React from "react";

// import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  CarouselDots,
} from "./ui/carousel_mod";

import arrowRight from "../assets/works-arrow-right.svg";
import arrowLeft from "../assets/works-arrow-left.svg";

function WorksSlider() {
  const { PUBLIC_URL } = process.env;
  const heroSections = [
    {
      title: "Pulse website ui ux case study",
      backgroundImage: `${PUBLIC_URL}/img/works/works-2.png`,
    },
    {
      title: "The Spiarl Code Official Website",
      backgroundImage: `${PUBLIC_URL}/img/works/works-1.png`,
    },
    {
      title: "Pulse website ui ux case study",
      backgroundImage: `${PUBLIC_URL}/img/works/works-2.png`,
    },
    {
      title: "The Spiarl Code Official Website",
      backgroundImage: `${PUBLIC_URL}/img/works/works-1.png`,
    },
  ];

  return (
    <div className='flex flex-col'>
      <div className='w-full max-md:max-w-full'>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={
            [
              // Autoplay({
              //   delay: 2000,
              // }),
            ]
          }
          className='w-full  -mt-5'>
          <CarouselContent className='-ml-1'>
            {heroSections.map((section, index) => (
              <CarouselItem
                key={index}
                className='pl-1 max-md:flex-wrap flex w-full items-end'>
                <div className='flex flex-col md:w-[50%] max-md:ml-0 max-md:w-full'>
                  <img
                    loading='lazy'
                    src={`${process.env.PUBLIC_URL}/img/works/our_works_01.jpg`}
                    className='w-full aspect-[1.2] object-cover object-right max-md:mt-6 max-md:max-w-full'
                    alt=''
                  />
                </div>
                <div className='max-md:order-first flex flex-col ml-5 md:w-[50%] max-md:ml-0 max-md:w-full'>
                  <div className='flex flex-col grow mt-80 text-2xl font-bold max-md:mt-10 max-md:max-w-full'>
                    <div className='text-4xl text-violet-700 max-md:max-w-full'>
                      Website Development
                      <br />
                    </div>
                    <div className='mt-2.5 text-neutral-900 max-md:max-w-full'>
                      Attract the focus of key decision-makers and
                      enhance your brand's presence in{" "}
                    </div>
                    <div className='font-outline-1 text-white mt-1.5 max-md:max-w-full'>
                      The business-to-business realm through our
                      specialized expertise.
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          {/* <CarouselPrevious />
          <CarouselNext /> */}
          <div className='flex flex-row justify-center items-center'>
            <div className='flex w-[50%]  items-center justify-center mt-10 gap-10 max-md:hidden'>
              <CarouselPrevious className='relative mt-0 left-auto ml-0 bg-transparent border-none w-[120px] bg-image'>
                <img
                  className='max-w-[120px]'
                  src={arrowLeft}
                  alt=''
                />
              </CarouselPrevious>
              <CarouselNext className='relative right-auto mr-0 bg-transparent border-none w-[120px] bg-image'>
                <img
                  className='max-w-[120px]'
                  src={arrowRight}
                  alt=''
                />
              </CarouselNext>
            </div>
            <div className='flex md:w-[50%] flex-col min-h-[60px] justify-center'>
              <CarouselDots className=' gap-2 md:self-end' />
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
}

export default WorksSlider;
