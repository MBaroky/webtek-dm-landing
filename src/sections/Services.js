import * as React from "react";
const { PUBLIC_URL } = process.env;
const servicesList = [
  {
    title: "",
    desc: "",
    icon: `${PUBLIC_URL}/img/services-icon-01.svg`,
    img: `${PUBLIC_URL}/img/services-01.png`,
  },
];
function Service() {
  return (
    <div className='flex flex-col pt-7 bg-white max-w-[274px]'>
      <div className='flex flex-col px-7 w-full text-neutral-900'>
        <div className='flex gap-2.5 text-base font-medium'>
          <img
            loading='lazy'
            src={servicesList[0].icon}
            className='shrink-0 aspect-square w-[34px]'
            alt=''
          />
          <div className='my-auto'>Social Media</div>
        </div>
        <div className='mt-6 ml-3 text-xs'>
          Elevate your brand's presence with captivating content and
          strategic engagement across social platforms.
          <br />
        </div>
      </div>
      <div className='flex overflow-hidden relative flex-col pb-12 mt-14 w-full aspect-[1.2]'>
        <img
          loading='lazy'
          src={servicesList[0].img}
          className='object-cover absolute inset-0 size-full'
          alt=''
        />
        <div className='relative w-full min-h-[178px]' />
      </div>
    </div>
  );
}

export default function Services() {
  return (
    <div className='flex flex-col items-center p-20 text-white rounded-none bg-neutral-900 max-md:px-5'>
      <div className='shrink-0 self-start mt-2 ml-9 bg-orange-100 h-[3px] w-[45px] max-md:ml-2.5' />
      <div className='mt-4 text-base font-medium max-md:max-w-full'>
        Our Digital Marketing Services
      </div>
      <div className='mt-4 text-sm max-md:max-w-full'>
        We’re experts in all things marketing. Business-to-business,
        cryptocurrency, NFT, and high-growth startup brands are our
        sweet spot. Discover how we can scale your business to new
        heights through our strategic services below:
        <br />
      </div>
      <Service />
    </div>
  );
}
