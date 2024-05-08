import WorksSlider from "../components/WorksSlider";
import * as React from "react";

export default function OurWorks() {
  return (
    <section
      id='works'
      className='-mb-5 relative z-[7] rounded-br-3xl rounded-bl-3xl flex flex-col p-3 md:p-20 md:pl-0 bg-white'>
      <div className='max-md:max-w-full flex flex-col relative md:absolute md:w-[33.333%] self-end rounded-none text-neutral-900 max-md:px-5'>
        <div className='mt-11 self-start bg-violet-700 h-[3px] w-[45px] max-md:mt-10 max-md:mr-2.5' />
        <div className='mt-4 text-base font-medium max-md:mr-2.5'>
          Our Work
        </div>
        <div className='mt-4 text-sm w-auto max-md:mr-2.5'>
          Our dynamic digital marketing agency has empowered a wide
          array of businesses and organizations to meet their
          advertising goals. Drawing from rich experience across
          various industries, we possess the insights and skills to
          unlock your true potential.
          <br />
        </div>
      </div>
      <WorksSlider />
    </section>
  );
}
