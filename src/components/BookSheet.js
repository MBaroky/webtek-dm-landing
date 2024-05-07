import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useState } from "react";
import arrowIcon from "../assets/arrow-icon.svg";

import {
  Sheet,
  // SheetClose,
  SheetContent,
  SheetTrigger,
} from "./ui/sheet";

export default function BookSheet() {
  const [openBooking, setOpenBooking] = useState(false);
  return (
    <Sheet open={openBooking} onOpenChange={setOpenBooking}>
      <SheetTrigger asChild>
        <Button className='rounded-none hover:bg-white hover:text-black flex min-w-[170px] gap-2 justify-center items-center self-stretch px-3.5 py-3 text-base bg-violet-700 max-md:px-5'>
          <span>Book A Demo</span>
          <img
            loading='lazy'
            src={arrowIcon}
            alt=''
            className='shrink-0 aspect-[1.59] w-[27px]'
          />
        </Button>
      </SheetTrigger>
      <SheetContent side='top' className='bg-black text-white'>
        <section className='flex justify-center items-center px-16 md:py-16 max-md:px-5'>
          <div className='flex gap-5 justify-between w-full max-w-[1196px] max-md:flex-wrap max-md:max-w-full'>
            <div className='flex flex-col self-start mt-24 text-white max-md:mt-0'>
              <h2 className='mt-4 text-base font-medium max-md:mt-1'>
                Book Today!
              </h2>
              <p className='mt-4 text-sm max-md:mt-1'>
                Step into the Realm of Digital Innovation: Secure Your
                Exclusive Demo Experience Today!
                <br />
                Uncover the Dynamic Solutions that Drive Success. Our
                Team of Experts Awaits to Showcase the Full Spectrum
                of Possibilities, Tailored Specifically to Your
                Business Needs. Seize this Opportunity to Explore,
                Learn, and Strategize. Schedule Your Demo Now and
                Ignite Your Journey Towards Digital Excellence!
              </p>
            </div>
            <div className='flex flex-col min-w-[300px] basis-1/3 px-8 py-11 max-md:py-1 text-base font-light bg-white max-md:px-5 max-md:max-w-full'>
              <div className='flex gap-5 justify-between w-full text-4xl font-bold max-md:flex-wrap max-md:max-w-full'>
                <h1 className='text-black'>
                  Book A{" "}
                  <span className='text-white font-outline-1 '>
                    Demo
                  </span>
                </h1>
              </div>
              <form className='mt-5 max-md:mt-1'>
                <Input
                  type='text'
                  id='fullName'
                  placeholder='Full Name'
                  name='fullname'
                  className='rounded-none mt-1 md:mt-3 border-t-0 border-r-0 border-l-0 border-black'
                />

                <Input
                  type='email'
                  placeholder='Business Email'
                  id='email'
                  className='rounded-none mt-1 md:mt-3 border-t-0 border-r-0 border-l-0 border-black'
                />

                <Input
                  type='tel'
                  id='phone'
                  placeholder='Phone Number'
                  name='phone'
                  className='rounded-none mt-1 md:mt-3 border-t-0 border-r-0 border-l-0 border-black'
                />

                <Input
                  type='text'
                  id='company'
                  placeholder='Company Name'
                  name='company'
                  className='rounded-none mt-1 md:mt-3 border-t-0 border-r-0 border-l-0 border-black'
                />

                <Textarea
                  id='message'
                  placeholder='Message'
                  name='message'
                  className='rounded-none mt-1 max-md:min-h-[30px] md:mt-3 border-t-0 border-r-0 border-l-0 border-black'
                />

                <Button
                  type='submit'
                  className='rounded-none hover:bg-white hover:text-black flex gap-2 self-start px-5 py-3 mt-12 text-base font-medium text-white whitespace-nowrap bg-violet-700 max-md:px-5 max-md:mt-10'>
                  <span>Submit</span>
                  <img
                    loading='lazy'
                    src={arrowIcon}
                    alt=''
                    className='shrink-0 self-start aspect-[1.49] w-[27px]'
                  />
                </Button>
              </form>
            </div>
          </div>
        </section>
      </SheetContent>
    </Sheet>
  );
}
