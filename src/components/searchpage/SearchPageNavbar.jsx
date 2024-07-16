import Search from "../home/Search";
import Logo from "../home/Logo";
import HamburgerMenuButton from "./HamburgerMenuButton";

export default function SearchPageNavbar({ isOpen, handleMenuClick }) {
  return (
    <nav className=" w-full flex justify-between shadow-md">
      <div className="flex lg:hidden justify-items-center">
        <HamburgerMenuButton
          handleMenuClick={handleMenuClick}
          isOpen={isOpen}
        />
      </div>
      <div className="hidden lg:flex justify-items-center">
        <Logo />
      </div>
      <Search />
      <div className="invisible"></div>
    </nav>
  );
}
