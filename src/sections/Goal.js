import * as React from "react";
import arrowIcon from "../assets/right-arrow.svg";

export default function Goal() {
  return (
    <section className='rounded-br-3xl rounded-bl-3xl -mb-5 relative z-[3] flex flex-col bg-black flex overflow-hidden relative flex-col justify-center items-center px-16 py-20 min-h-[442px] max-md:px-5'>
      <img
        src={`${process.env.PUBLIC_URL}/img/goal.png`}
        alt=''
        className='object-cover absolute inset-0 size-full'
      />
      <div className='relative mt-2.5 w-full max-w-[1187px] max-md:max-w-full'>
        <div className='flex gap-5 max-md:flex-col max-md:gap-0'>
          <div className='flex flex-col w-[66%] max-md:ml-0 max-md:w-full'>
            <h1 className='flex relative flex-col grow text-6xl font-bold max-md:mt-10 max-md:max-w-full max-md:text-4xl'>
              <span className='text-white max-md:max-w-full max-md:text-4xl'>
                Talk to a Full-Service Digital Marketing Agency About
                Your{" "}
                <span className='text-[#252524] font-outline-2'>
                  Business Goal
                </span>
              </span>
            </h1>
          </div>
          <div className='flex flex-col ml-5 w-[34%] max-md:ml-0 max-md:w-full'>
            <div className='flex relative flex-col items-start mt-2 text-white max-md:mt-10'>
              <div className='shrink-0 bg-orange-100 h-[3px] w-[45px]' />
              <p className='self-stretch mt-5 text-sm'>
                we're passionate about helping businesses reach their
                maximum potential online. Tell us a little about your
                brand and what you hope to achieve, and we'll be in
                touch to discuss how we can help you grow.
              </p>
              <button className='flex gap-2 items-center mt-4 text-base font-medium'>
                <span>Book A Demo</span>
                <img
                  src={arrowIcon}
                  alt=''
                  className='shrink-0 w-5 aspect-square'
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
