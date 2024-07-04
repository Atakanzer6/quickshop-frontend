export default function SideBar() {
  return (
    <div className=" justify-center w-72  p-4 h-screen border-r-2 ">
      <ul className="mt-4">
        <li className="mb-2">
          <a href="#" className="hover:underline">
            Link 1
          </a>
        </li>
        <li className="mb-2">
          <a href="#" className="hover:underline">
            Link 2
          </a>
        </li>
        <li className="mb-2">
          <a href="#" className="hover:underline">
            Link 3
          </a>
        </li>
      </ul>
    </div>
  );
}
