import * as React from "react";
import rightArrow from "../assets/right-arrow.svg";
import coverImg from "../assets/cover-image.svg";
import { LogosCarousel } from "../components/LogosCarousel";

function WelcomeSection() {
  return (
    <section className='flex justify-center items-center px-16 py-20 rounded-none bg-neutral-900 max-md:px-5 rounded-br-3xl rounded-bl-3xl'>
      <div className='mt-24 w-full max-w-[1223px] max-md:mt-10 max-md:max-w-full'>
        <div className='flex gap-5 max-md:flex-col max-md:gap-0'>
          <div className='flex flex-col min-h-[300px] w-[67%] max-md:ml-0 max-md:w-full relative z-10'>
            <h1 className='text-6xl max-w-[556px] font-bold text-white  max-md:mt-10 max-md:max-w-full max-md:text-4xl'>
              Welcome to Your Ultimate
              <span className='text-black font-outline-2 '>
                &nbsp;Digital Marketing Solution
              </span>
            </h1>
            <img
              src={coverImg}
              className='absolute right-0 w-auto h-full bottom-0 max-md:w-full max-md:h-auto -z-10'
              alt='cover'
            />
          </div>
          <div className='flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full'>
            <div className='flex flex-col items-start self-stretch my-auto text-white max-md:mt-10'>
              <div className='shrink-0 bg-orange-100 h-[3px] w-[45px]' />
              <p className='self-stretch mt-4 text-sm'>
                Are you ready to skyrocket your online presence and
                drive unstoppable growth for your business? Look no
                further! Our cutting-edge digital marketing services
                are tailored to elevate your brand, engage your
                audience, and maximize your ROI. Whether you're a
                startup aiming to make a splash or an established
                enterprise seeking to dominate your market, we've got
                the expertise and passion to make it happen.
              </p>
              <a
                href='/'
                className='flex gap-2 mt-4 text-base font-medium'>
                <span>Success Stories</span>
                <img
                  loading='lazy'
                  src={rightArrow}
                  alt='Arrow icon'
                  className='shrink-0 w-5 aspect-square'
                />
              </a>
            </div>
          </div>
        </div>
        <LogosCarousel />
      </div>
    </section>
  );
}

export default WelcomeSection;
