import * as React from "react";
import rightArrowDark from "../assets/right-arrow-dark.svg";
import facebook from "../assets/facebook-f.svg";
import twitter from "../assets/x-twitter.svg";
import linkedin from "../assets/linkedin-in.svg";

const productItems = [
  { name: "Employee Database" },
  { name: "Payroll" },
  { name: "Absences" },
  { name: "Time Tracking" },
];

const informationItems = [
  { name: "FAQ" },
  { name: "Blog" },
  { name: "Support" },
];

const companyItems = [
  { name: "About Us" },
  { name: "Services" },
  { name: "Industries" },
  { name: "Success Stories" },
];

const footerLinks = [
  { label: "Terms", url: "#" },
  { label: "Privacy", url: "#" },
  { label: "Cookies", url: "#" },
];
const social = [
  { icon: facebook, link: "https://www.facebook.com" },
  { icon: twitter, link: "https://www.x.com" },
  { icon: linkedin, link: "https://www.linkedin.com" },
];
const ProductSection = () => (
  <div className='flex flex-col grow pt-2 text-sm text-white max-md:mt-10'>
    <h2 className='text-base font-bold leading-7'>Product</h2>
    {productItems.map(item => (
      <div key={item.name} className='mt-3.5'>
        <button className='w-full text-left'>{item.name}</button>
      </div>
    ))}
  </div>
);

const InformationSection = () => (
  <div className='flex flex-col pt-2 text-sm text-white whitespace-nowrap max-md:mt-10'>
    <h2 className='text-base font-bold leading-7'>Information</h2>
    {informationItems.map(item => (
      <div key={item.name} className='mt-4'>
        <button className='w-full text-left'>{item.name}</button>
      </div>
    ))}
  </div>
);

const CompanySection = () => (
  <div className='flex flex-col grow py-1.5 text-sm text-white max-md:mt-10'>
    <h2 className='text-base font-bold leading-7'>Company</h2>
    {companyItems.map(item => (
      <div key={item.name} className='mt-4'>
        <button className='w-full text-left'>{item.name}</button>
      </div>
    ))}
  </div>
);

const ContactForm = () => (
  <form className='flex flex-col pt-2 rounded-2xl border border-white border-solid max-md:max-w-full'>
    <div className='flex flex-col px-6 py-5 bg-violet-600 rounded-2xl max-md:px-5 max-md:max-w-full'>
      <div className='shrink-0 bg-orange-100 h-[3px] w-[45px]' />
      <h2 className='mt-2 text-base font-medium leading-7 text-white'>
        Contact Us
      </h2>
      <p className='mt-2 mr-7 text-sm text-white max-md:mr-2.5'>
        Reach out to us today and let's start a conversation.
      </p>
      <label htmlFor='name' className='sr-only'>
        Name
      </label>
      <input
        type='text'
        id='name'
        placeholder='Name'
        className='justify-center items-start px-4 py-3.5 mt-2 whitespace-nowrap bg-white border-2 border-gray-200 border-solid max-md:pr-5'
        aria-label='Name'
      />
      <label htmlFor='email' className='sr-only'>
        Email Address
      </label>
      <input
        type='email'
        id='email'
        placeholder='Email Address'
        className='justify-center items-start px-4 py-3.5 mt-2.5 bg-white border-2 border-gray-200 border-solid max-md:pr-5'
        aria-label='Email Address'
      />
      <label htmlFor='message' className='sr-only'>
        our Message
      </label>
      <textarea
        name='message'
        placeholder='Your Message'
        className='flex gap-5 justify-end py-1.5 pr-1.5 pl-4 mt-2.5 bg-white border-2 border-gray-200 border-solid'
        // className='justify-center items-start px-4 py-3.5 mt-2.5 bg-white border-2 border-gray-200 border-solid max-md:pr-5 max-h-[50px]'
        id=''></textarea>
      <button type='submit' className='self-end -mt-8'>
        <img
          loading='lazy'
          src={rightArrowDark}
          alt=''
          className='shrink-0 w-6 aspect-square'
        />
      </button>
    </div>
  </form>
);

function Footer() {
  return (
    <div
      id='contact'
      className='flex justify-center items-center px-16 py-20 bg-violet-700 max-md:px-5'>
      <div className='flex flex-col py-0.5 w-full max-w-[1196px] max-md:max-w-full'>
        <div className='mt-1 max-md:max-w-full'>
          <div className='flex gap-5 max-md:flex-col max-md:gap-0'>
            <div className='flex flex-col w-[61%] max-md:ml-0 max-md:w-full'>
              <div className='flex flex-col justify-center max-md:mt-10 max-md:max-w-full'>
                <div className='max-md:max-w-full'>
                  <div className='flex gap-5 max-md:flex-col max-md:gap-0'>
                    <div className='flex flex-col w-[43%] max-md:ml-0 max-md:w-full'>
                      <ProductSection />
                    </div>
                    <div className='flex flex-col ml-5 w-[34%] max-md:ml-0 max-md:w-full'>
                      <InformationSection />
                    </div>
                    <div className='flex flex-col ml-5 w-[24%] max-md:ml-0 max-md:w-full'>
                      <CompanySection />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='flex flex-col ml-5 w-[39%] max-md:ml-0 max-md:w-full'>
              <div className='flex flex-col grow justify-center px-1 text-xs text-slate-500 max-md:mt-10 max-md:max-w-full'>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
        <div className='shrink-0 mt-10 h-px bg-white max-md:mt-10 max-md:max-w-full' />
        <div className='self-end mt-6 mr-5 max-w-full aspect-[33.33] w-[135px] max-md:mr-2.5'></div>
        <footer className='flex gap-5 justify-between text-white max-md:flex-wrap'>
          <h2 className='my-auto text-2xl font-semibold uppercase'>
            Digital Marketing
          </h2>
          <nav className='flex gap-5 justify-between self-start mt-5 text-sm font-medium whitespace-nowrap'>
            {footerLinks.map(link => (
              <a key={link.label} href={link.url}>
                {link.label}
              </a>
            ))}
          </nav>
          <ul className='flex flex-row'>
            {social.map((item, index) => (
              <li key={index}>
                <a
                  target='_blank'
                  rel='noreferrer'
                  style={{ filter: "grayscale(1) invert(1)" }}
                  className='ml-3 flex items-center justify-center aspect-square w-[40px] rounded-full border-solid border-2 border-neutral-500'
                  href={item.link}>
                  <img
                    src={item.icon}
                    className='w-[20px] h-[20px]'
                    alt=''
                  />
                </a>
              </li>
            ))}
          </ul>
        </footer>
      </div>
    </div>
  );
}

export default Footer;
