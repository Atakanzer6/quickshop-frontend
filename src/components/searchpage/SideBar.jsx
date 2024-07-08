import SideBarButton from "./SideBarButton";

export default function SideBar({ buttons }) {
  return (
    <div className="flex justify-center w-72  p-4 h-screen border-r-2 ">
      <ul className="mt-4">
        {buttons.map((button) => (
          <li key={button.id} className="mb-2">
            <SideBarButton
              key={button.id}
              label={button.label}
              handleClick={button.handleClick}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
