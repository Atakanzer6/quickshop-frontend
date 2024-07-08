export default function SideBarButton({ label, handleClick }) {
  return (
    <button
      onClick={handleClick}
      className="bg-transparent hover:bg-green-500 text-green-500 font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded w-24"
    >
      {label}
    </button>
  );
}
