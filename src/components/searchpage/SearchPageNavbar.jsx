import Search from "../home/Search";
import Logo from "../home/Logo";

export default function SearchPageNavbar() {
  return (
    <nav className="justify-center w-full flex md:justify-between shadow-md">
      <div className="hidden md:flex justify-items-center">
        <Logo />
      </div>
      <Search />
      <div className="invisible"></div>
    </nav>
  );
}
