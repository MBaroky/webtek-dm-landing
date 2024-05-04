import * as React from "react";
import arrowRight from "../assets/works-arrow-right.svg";
import arrowLeft from "../assets/works-arrow-left.svg";

function HeroSection({ title, backgroundImage }) {
  return (
    <section className='aspect-video flex flex-col w-6/12 max-md:ml-0 max-md:w-full'>
      <div className='flex flex-col grow justify-center text-3xl font-bold leading-10 text-white max-md:mt-8 max-md:max-w-full'>
        <div className='overflow-hidden relative flex-col px-0 max-md:pt-10 max-md:pr-8 max-md:pl-5 max-md:max-w-full'>
          <img
            src={backgroundImage}
            alt=''
            className='  inset-0 w-full'
          />
          <h2 className='z-10 absolute bottom-5 px-5 text-xl'>
            {title}
          </h2>
        </div>
      </div>
    </section>
  );
}

export default function PortfolioSlider() {
  const { PUBLIC_URL } = process.env;
  const heroSections = [
    {
      title: "The Spiarl Code Official Website",
      backgroundImage: `${PUBLIC_URL}/img/works-1.png`,
    },
    {
      title: "Pulse website ui ux case study",
      backgroundImage: `${PUBLIC_URL}/img/works-2.png`,
    },
  ];

  return (
    <div className='flex flex-col'>
      <div className='w-full max-md:max-w-full'>
        <div className='flex gap-5 max-md:flex-col max-md:gap-0'>
          {heroSections.map((section, index) => (
            <HeroSection
              key={index}
              title={section.title}
              backgroundImage={section.backgroundImage}
            />
          ))}
        </div>
      </div>
      <div className='flex max-w-[350px] mx-auto mt-10 gap-10'>
        <img className='max-w-[120px]' src={arrowLeft} alt='' />
        <img className='max-w-[120px]' src={arrowRight} alt='' />
      </div>
    </div>
  );
}
