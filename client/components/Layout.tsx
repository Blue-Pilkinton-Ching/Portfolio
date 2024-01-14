import { useWindowSize } from "@uidotdev/usehooks";
import { Outlet } from "react-router-dom";
import { useRef, useState } from "react";
import { NavBar } from "./NavBar";

export default function Layout() {
  const { width } = useWindowSize();
  const [showMenuPanel, setShowMenuPanel] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);

  function onMenuButton() {
    menuButton.current?.classList.toggle("change");
    setShowMenuPanel((oldState) => !oldState);
  }

  function onNavBarItemClicked() {
    setShowMenuPanel(false);
    menuButton.current?.classList.toggle("change");
  }

  if (width != null && width > 1023 && showMenuPanel) {
    setShowMenuPanel(false);
  }

  return (
    <>
      <header
        className={`bg z-50 ${
          showMenuPanel ? "bg-neutral-800/0" : "bg-neutral-800/50"
        } backdrop-brightness-70 width 1023 fixed flex w-screen justify-between  px-10
        py-8 backdrop-blur-sm lg:px-32`}
      >
        <a
          className={`font-display text-4xl font-light text-white  ${
            showMenuPanel ? "invisible" : "visible"
          }`}
          href="/#home"
        >
          Blue PC
        </a>
        {width != null && width > 1023 ? (
          <NavBar
            onItemClick={onNavBarItemClicked}
            classes="flex flex-auto justify-end *:my-auto *:px-4 *:py-0.5 *:font-display *:text-lg *:font-medium *:text-white *:duration-300 hover:*:brightness-50"
            lastItemClasses="p w-32 rounded-full bg-green-500 text-center"
          />
        ) : (
          <button className="container" onClick={onMenuButton} ref={menuButton}>
            <div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
          </button>
        )}
      </header>
      <main>
        {showMenuPanel ? (
          <div className={`h-svh w-screen bg-green-500 duration-300`}>
            <NavBar
              onItemClick={onNavBarItemClicked}
              classes=" h-full flex justify-center items-center flex-col *:px-2 *:py-0.5 *:font-display *:text-lg *:font-medium *:text-white *:duration-300 hover:*:brightness-50"
              lastItemClasses="p w-32 rounded-full bg-neutral-800 text-center"
            />
          </div>
        ) : (
          <div
            className=" bg-neutral-800 px-10 md:px-20
          lg:px-32"
          >
            <Outlet />
          </div>
        )}
      </main>
      {/* <footer className=" bg-neutral-900">Copyright &copy; 2038</footer> */}
    </>
  );
}
