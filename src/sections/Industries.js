import IndustSlider from "../components/IndustSlider";
import React from "react";

function Industries() {
  return (
    <section
      id='industries'
      className='rounded-br-3xl rounded-bl-3xl -mb-5 relative z-[6] flex flex-col justify-center items-center px-16 py-20 bg-gray-200 rounded-none max-md:px-5 z-'>
      <div className='flex flex-col mt-2.5 w-full max-w-[1202px] max-md:max-w-full'>
        <div className='flex gap-5 self-start text-6xl font-bold max-md:flex-wrap max-md:text-4xl'>
          <div className='flex-auto text-neutral-900 max-md:text-4xl'>
            Industries we{" "}
            <span className='font-outline-1 text-gray-200'>
              serve
            </span>
          </div>
        </div>
        <div className='shrink-0 mt-10 bg-violet-700 h-[3px] w-[55px]' />
        <div className='mt-4 text-sm text-neutral-900 max-md:max-w-full'>
          We take great pride in the diversity of our clientele, which
          spans a wide array of industries. Leveraging our extensive
          expertise, we have cultivated a deep understanding of the
          unique challenges and opportunities present in each sector
          we serve. Our team's comprehensive knowledge and experience
          enable us to deliver innovative solutions tailored to the
          specific needs and nuances of industries.
        </div>
        <IndustSlider />
      </div>
    </section>
  );
}

export default Industries;
