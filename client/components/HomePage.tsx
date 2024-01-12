import { Link } from "react-router-dom";

function HomePage() {
  return (
    <>
      <section className="home my-[20vh]">
        <h1 className="font-display text-7xl font-bold text-white">
          Blue
          <br />
          Pilkinton-Ching
        </h1>
        <h2 className="my-4 font-display text-2xl font-bold text-green-500">
          Fullstack & Interactive Developer
        </h2>
        <h3 className="font-display text-lg text-white">Portfolio</h3>
        <Link
          to={`/#contact`}
          className="mt-8 inline-block rounded-3xl bg-green-500 px-6 py-3.5 font-display text-lg font-semibold text-white duration-300 hover:brightness-50"
        >
          Get in Touch!
        </Link>
      </section>
    </>
  );
}

export default HomePage;
