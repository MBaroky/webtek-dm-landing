import * as React from "react";
import rightArrow from "../assets/right-arrow.svg";

export default function Team() {
  const { PUBLIC_URL } = process.env;
  return (
    <section
      id='team'
      className='-mb-5 relative z-[9] rounded-br-3xl rounded-bl-3xl flex justify-center items-center px-16 py-20 text-base font-medium rounded-none bg-[linear-gradient(180deg,#F9E1D0_0%,#EEEEFD_100%)] text-neutral-900 max-md:px-5 rounded-br-3xl rounded-bl-3xl '>
      <div className='flex flex-col w-full max-w-[1214px] max-md:max-w-full'>
        <div className='shrink-0 w-12 bg-violet-700 h-[3px]' />
        <div className='mt-4 max-md:max-w-full'>About Us</div>
        <div className='mt-4 text-4xl font-bold max-md:max-w-full'>
          Our team of seasoned experts brings a wealth of experience
          and expertise to the table, working tirelessly to understand
          your unique challenges and goals. Whether you're a startup
          looking to make a splash or an established brand aiming to
          stay ahead of the curve,
          <span className='font-outline-1 text-[#EEEEFD]'>
            &nbsp; we're here to be your trusted partner every step of
            the way.
          </span>
          <br />
        </div>
        <div className='flex gap-2 self-start mt-4'>
          <div>Read More</div>
          <img
            loading='lazy'
            src={rightArrow}
            className='shrink-0 w-5 aspect-square'
            alt=''
          />
        </div>
        <img
          loading='lazy'
          src={`${PUBLIC_URL}/img/team-bg.png`}
          className='mt-12 w-full aspect-[3.7] max-md:mt-10 max-md:max-w-full'
          alt=''
        />
      </div>
    </section>
  );
}
