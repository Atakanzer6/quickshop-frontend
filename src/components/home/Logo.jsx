import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <Link to="/">
      <h1 className="text-2xl font-sans px-4 py-2 mx-2">
        Quick<span className="text-green-500">Shop</span>
      </h1>
    </Link>
  );
}
