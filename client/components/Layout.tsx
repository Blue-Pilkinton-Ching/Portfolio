import { useWindowSize } from "@uidotdev/usehooks";
import { Link, Outlet } from "react-router-dom";

export default function Layout() {
  const { width } = useWindowSize();

  return (
    <>
      <header
        className="bg backdrop-brightness-70 width 1023 fixed flex w-screen bg-neutral-800/50 px-10 py-8
        backdrop-blur-sm lg:px-32"
      >
        <a
          className="font-display text-4xl font-light text-white"
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
          ""
        )}
      </header>
      <main
        className="min-h-screen bg-neutral-800 px-10 py-24 md:px-20
        lg:px-32"
      >
        <body>
          <Outlet />
        </body>
      </main>
      {/* <footer className=" bg-neutral-900">Copyright &copy; 2038</footer> */}
    </>
  );
}
