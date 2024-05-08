import * as React from "react";
import ServiceSlider from "../components/ServiceSlider";

export default function Services() {
  return (
    <secion
      id='services'
      className='-mb-5 relative z-[8] flex flex-col items-center p-20 text-white  rounded-br-3xl rounded-bl-3xl bg-neutral-900 max-md:px-5'>
      <div className='shrink-0 self-start mt-2 bg-orange-100 h-[3px] w-[45px] max-md:ml-2.5'></div>
      <div className='mt-4 self-start text-left font-medium max-md:max-w-full'>
        Our Digital Marketing Services
      </div>
      <div className='mt-4 text-sm max-md:max-w-full'>
        We’re experts in all things marketing. Business-to-business,
        cryptocurrency, NFT, and high-growth startup brands are our
        sweet spot. Discover how we can scale your business to new
        heights through our strategic services below:
        <br />
      </div>
      {/* <div className=''> */}
      <div className='max-w-full'>
        <ServiceSlider />
      </div>
      {/* </div> */}
    </secion>
  );
}
