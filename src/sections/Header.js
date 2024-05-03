import * as React from "react";
import arrowIcon from "../assets/arrow-icon.svg";

export default function Header() {
  return (
    <div className='flex justify-center items-center px-16 py-4 font-medium text-white bg-neutral-900 max-md:px-5'>
      <div className='flex gap-5 items-center w-full max-w-[1196px] max-md:flex-wrap max-md:max-w-full'>
        <div className='flex-auto self-stretch my-auto text-xl font-semibold uppercase'>
          Digital Marketing
        </div>
        <div className='flex gap-5 justify-between self-stretch my-auto text-sm max-md:flex-wrap'>
          <div>About Us</div>
          <div>Services</div>
          <div>Our Work</div>
          <div>Industries</div>
          <div>Success Stories</div>
          <div>Contact Us</div>
        </div>
        <div className='flex gap-2 justify-center self-stretch px-3.5 py-3 text-base bg-violet-700 max-md:px-5'>
          <div>Book A Demo</div>
          <img
            loading='lazy'
            src={arrowIcon}
            className='shrink-0 self-start aspect-[1.59] w-[27px]'
            alt='arrow-icon'
          />
        </div>
      </div>
    </div>
  );
}
