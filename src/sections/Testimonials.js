import TestSlider from "../components/TestSlider";
import React from "react";

function Testimonials() {
  return (
    <section
      id='testimonials'
      className='-mb-5 relative z-[5] rounded-br-3xl rounded-bl-3xl  flex flex-col justify-center items-center px-16 py-16 rounded-none bg-[#121212] max-md:px-5'>
      <div className='flex flex-col items-start mt-4 w-full max-w-[1195px] max-md:max-w-full'>
        <div className='shrink-0 bg-orange-100 h-[3px] w-[45px]' />
        <div className='mt-4 text-base font-medium text-white max-md:max-w-full'>
          Success Stories
        </div>
        <div className='mt-4 text-sm text-white max-md:max-w-full'>
          Discover what our clients have to say about their experience
          partnering with us.
        </div>
      </div>
      <TestSlider />
    </section>
  );
}

export default Testimonials;
