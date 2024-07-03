import Search from "../home/Search"
import Logo from "../home/Logo"

export default function SearchPageNavbar() {
    return (
        <nav className="flex justify-between shadow-md">
            <Logo />
            <Search />
            <Logo />
        </nav>
    )
}