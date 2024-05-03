import * as React from "react";
import arrowIcon from "../assets/arrow-icon.svg";
import FixedRight from "../components/FixedRight";

const navItems = [
  { label: "About Us", href: "#" },
  { label: "Services", href: "#" },
  { label: "Our Work", href: "#" },
  { label: "Industries", href: "#" },
  { label: "Success Stories", href: "#" },
  { label: "Contact Us", href: "#" },
];

function NavItem({ label, href }) {
  return (
    <a href={href} className='text-sm'>
      {label}
    </a>
  );
}

function Header() {
  return (
    <header className='flex justify-center items-center px-16 py-4 font-medium text-white bg-neutral-900 max-md:px-5 fixed top-0 left-0 w-full'>
      <FixedRight />
      <div className='flex gap-5 items-center w-full max-w-[1196px] max-md:flex-wrap max-md:max-w-full'>
        <h1 className='flex-auto self-stretch my-auto text-xl font-semibold uppercase'>
          Digital Marketing
        </h1>
        <nav className='flex gap-5 justify-between self-stretch my-auto max-md:flex-wrap'>
          {navItems.map(item => (
            <NavItem key={item.label} {...item} />
          ))}
        </nav>
        <button className='flex gap-2 justify-center self-stretch px-3.5 py-3 text-base bg-violet-700 max-md:px-5'>
          <span>Book A Demo</span>
          <img
            loading='lazy'
            src={arrowIcon}
            alt=''
            className='shrink-0 self-start aspect-[1.59] w-[27px]'
          />
        </button>
      </div>
    </header>
  );
}

export default Header;
