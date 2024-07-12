export default function HamburgerMenuButton({ handleMenuClick }) {
  return (
    <div className="flex pl-1 lg:hidden">
      <button onClick={() => handleMenuClick()} className="space-y-2 ">
        <span className="block h-0.5 w-8  bg-gray-600"></span>
        <span className="block h-0.5 w-8  bg-gray-600"></span>
        <span className="block h-0.5 w-8  bg-gray-600"></span>
      </button>
    </div>
  );
}
