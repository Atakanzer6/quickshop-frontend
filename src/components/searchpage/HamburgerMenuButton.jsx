export default function HamburgerMenuButton({ isOpen, handleMenuClick }) {
  return (
    <div className="flex pl-1 lg:hidden p-2">
      <button onClick={() => handleMenuClick()} className="space-y-2 ">
        {isOpen ? (
          <svg
            className="h-8 w-8 text-gray-600"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        ) : (
          <>
            <span className="block h-0.5 w-8  bg-gray-600"></span>
            <span className="block h-0.5 w-8  bg-gray-600"></span>
            <span className="block h-0.5 w-8  bg-gray-600"></span>
          </>
        )}
      </button>
    </div>
  );
}
