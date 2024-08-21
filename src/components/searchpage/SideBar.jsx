import SideBarButton from "./SideBarButton";

export default function SideBar({ buttons, handleClick, isMenuOpen }) {
  return (
    <>
      <div className={isMenuOpen ? "showMenu" : "hideMenu"}>
        <div className="absolute top-0  px-8 py-2 overflow-y-scroll h-[calc(100vh-6rem)]">
          <ul className="flex flex-col items-center justify-between min-h-[250px]  ">
            <h2 className="text-gray-600 text-sm m-2">Sort by platform</h2>
            <hr className="h-px  bg-gray-200 border-0 dark:bg-gray-700 m-1" />
            {buttons.map((button) => (
              <li key={button.id} className="my-2">
                <SideBarButton
                  key={button.id}
                  id={button.id}
                  label={button.label}
                  isActive={button.isActive}
                  handleClick={handleClick}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="hidden lg:flex  justify-center    w-72  p-4 h-screen border-r-2 ">
        <ul className="mt-4 ">
          <h2 className="text-gray-600 text-sm m-2 ">Sort by platform</h2>
          <hr className="h-px  bg-gray-200 border-0 dark:bg-gray-700 m-1" />
          {buttons.map((button) => (
            <li key={button.id} className="mt-2 ml-3">
              <SideBarButton
                key={button.id}
                id={button.id}
                label={button.label}
                isActive={button.isActive}
                handleClick={handleClick}
              />
            </li>
          ))}
        </ul>
      </div>
      <style>{`
      .hideMenu {
        display: none;
      }
      .showMenu {
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 4rem;
        left: 0rem;
        background: white;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>
    </>
  );
}
