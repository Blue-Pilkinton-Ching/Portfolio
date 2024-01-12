import { Link, Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <header className="bg bg-blur-sm fixed flex w-screen px-24 py-8">
        <a
          className="font-display text-4xl font-light text-white"
          href="/#home"
        >
          Blue PC
        </a>
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
      </header>
      <main className="min-h-screen bg-stone-800 px-24 py-24">
        <body>
          <Outlet />
        </body>
      </main>
      {/* <footer className=" bg-neutral-900">Copyright &copy; 2038</footer> */}
    </>
  );
}
