import { useWindowSize } from "@uidotdev/usehooks";
import { Link, Outlet } from "react-router-dom";
import { MouseEvent, useState } from "react";

export default function Layout() {
  const { width } = useWindowSize();
  const [showMenuPanel, setShowMenuPanel] = useState(false);

  function onMenuButton(event: MouseEvent<HTMLElement>) {
    event.currentTarget.classList.toggle("change");
    setShowMenuPanel((oldState) => !oldState);
  }

  if (width != null && width > 1023 && showMenuPanel) {
    setShowMenuPanel(false);
  }

  return (
    <>
      <header
        className={`bg ${
          showMenuPanel ? "bg-neutral-800/0" : "bg-neutral-800/50"
        } backdrop-brightness-70 width 1023 fixed flex w-screen justify-between  px-10
        py-8 backdrop-blur-sm lg:px-32`}
      >
        <a
          className={`font-display text-4xl font-light text-white ${
            showMenuPanel ? "opacity-0" : "opacity-100"
          }`}
          href="/#home"
        >
          Blue PC
        </a>
        {width != null && width > 1023 ? (
          <nav className="flex flex-auto justify-end *:my-auto *:px-4 *:py-0.5 *:font-display *:text-lg *:font-medium *:text-white *:duration-300 hover:*:brightness-50">
            <Link to="/#home">HOME</Link>
            <Link to="/#about">ABOUT ME</Link>
            <Link to="/#projects">PROJECTS</Link>
            <Link to="/#contact">CONTACT</Link>
            <Link
              to="/#resume"
              className="w-32 text-center last:rounded-full last:bg-green-500"
            >
              RESUME
            </Link>
          </nav>
        ) : (
          <button className="container" onClick={onMenuButton}>
            <div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
          </button>
        )}
      </header>
      <main className="">
        {showMenuPanel ? (
          <body>
            <div
              className={`h-dvh w-dvw bg-green-500 duration-1000 ${
                showMenuPanel ? "block" : "hidden"
              }`}
            ></div>
          </body>
        ) : (
          <body
            className="min-h-screen bg-neutral-800 px-10 py-24 md:px-20
          lg:px-32"
          >
            <Outlet />
          </body>
        )}
      </main>
      {/* <footer className=" bg-neutral-900">Copyright &copy; 2038</footer> */}
    </>
  );
}
