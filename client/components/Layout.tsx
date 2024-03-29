import { useWindowSize } from "@uidotdev/usehooks";
import { Outlet } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { NavBar } from "./NavBar";
import { useLocation } from "react-router-dom";

const headerOffset = 40;

export default function Layout() {
  const { width } = useWindowSize();
  const [showMenuPanel, setShowMenuPanel] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);
  const location = useLocation();

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

  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        const elementPosition = element.getBoundingClientRect().top; // get the position relative to the viewport

        const offsetPosition = elementPosition + window.scrollY - headerOffset;
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }
  }, [location]);

  return (
    <>
      <header
        className={`fixed z-50 ${
          showMenuPanel ? "bg-neutral-800/0" : "bg-neutral-800/50"
        } backdrop-brightness-70 width 1023  flex w-screen justify-between px-5 py-4 backdrop-blur-sm
        sm:px-10 sm:py-8 lg:px-32`}
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
          <div className={`h-dvh w-screen bg-green-600 duration-300`}>
            <NavBar
              onItemClick={onNavBarItemClicked}
              classes="h-full flex justify-center items-center flex-col *:px-2 *:py-0.5 *:font-display *:text-lg *:font-medium *:text-white *:duration-300 hover:*:brightness-50"
            />
          </div>
        ) : (
          <Outlet />
        )}
      </main>
      {showMenuPanel ? (
        ""
      ) : (
        <footer className="flex h-28 items-center justify-evenly bg-neutral-900 px-[10vw] font-display text-white shadow-md sm:justify-between">
          <a className="scroll-smooth text-2xl" href="/#home">
            bluepc.me
          </a>
          <div className="mx-auto hidden text-lg sm:block">
            <div className="flex items-center">
              <p className="mr-5 hidden xl:block">
                This website was built with
              </p>
              <div className="flex flex-row gap-2 *:w-9">
                <img src="/images/tech-icons/typescript.svg" alt="typescript" />
                <img
                  src="/images/tech-icons/tailwindcss.svg"
                  alt="tailwindcss"
                />
                <img src="/images/tech-icons/react.svg" alt="react" />
              </div>
            </div>
          </div>
          <div className="flex flex-row gap-2">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://linkedin.com/in/blue-pilkinton-ching"
            >
              <img
                className="w-9"
                src="/images/linkedin.svg"
                alt="link to linkedin"
              />
            </a>
            <a
              href="https://github.com/Blue-Pilkinton-Ching"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="w-9"
                src="/images/github.svg"
                alt="link to github"
              />
            </a>
            <a
              href="https://www.instagram.com/blues_profile/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="w-9 scale-90"
                src="/images/instagram.svg"
                alt="link to instagram"
              />
            </a>
          </div>
        </footer>
      )}
    </>
  );
}
