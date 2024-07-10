export default function SideBarButton({ label, handleClick, isActive, id }) {
  return (
    <button
      onClick={() => handleClick(label.toLowerCase(), id)}
      className={`${
        isActive ? "bg-green-500 text-white" : "bg-transparent text-green-500"
      } hover:bg-green-500  font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded w-24`}
    >
      {label}
    </button>
  );
}
