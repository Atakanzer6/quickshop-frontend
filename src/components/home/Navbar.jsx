import { Link } from "react-router-dom"

export default function Navbar() {
    return (
        <nav className="flex justify-center shadow-md">
            <Link to="/">
                <h1 className="text-2xl font-sans px-4 py-2 mx-2">
                Quick<span className="text-green-500">Shop</span>
                </h1>    
            </Link>
        </nav>
    )
}