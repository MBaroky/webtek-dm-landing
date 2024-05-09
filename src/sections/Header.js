import FixedRight from "../components/FixedRight";
import MainNav from "../components/MainNav";
import MobileNav from "../components/MobileNav";
import BookSheet from "../components/BookSheet";

function Header() {
  return (
    <header
      id='main-header'
      className='flex justify-center items-center px-16 py-4 font-medium text-white bg-neutral-900 max-md:px-5 fixed top-0 left-0 w-full z-50'>
      <div id='top' />
      <FixedRight />
      <div className='flex gap-5 items-center w-full max-w-[1196px] max-md:flex-wrap max-md:max-w-full'>
        <a
          href='/'
          className='flex-auto self-stretch my-auto text-xl font-semibold uppercase'>
          Digital Marketing
        </a>
        <MainNav />
        <MobileNav />
      </div>
      <div className='hidden lg:inline'>
        {/* <BookButton /> */}
        <BookSheet />
      </div>
    </header>
  );
}

export default Header;
