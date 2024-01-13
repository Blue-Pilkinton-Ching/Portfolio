import { useWindowSize } from "@uidotdev/usehooks";
import { Link } from "react-router-dom";

export function HomeSection() {
  const { width } = useWindowSize();

  return (
    <section id="home" className="flex h-dvh w-full flex-col pt-8">
      <div className="my-auto flex justify-between">
        <div className="my-auto h-fit">
          <h1
            className="font-display text-5xl font-bold
              text-white xl:text-7xl"
          >
            Blue
            <br />
            Pilkinton-Ching
          </h1>
          <h2 className="my-4 font-display text-2xl font-bold text-green-500">
            Fullstack & Interactive Developer
          </h2>
          {/* <h3 className="font-display text-lg text-white">Portfolio</h3> */}
          <Link
            to={`/#contact`}
            className="mt-3 inline-block rounded-3xl bg-green-500 px-6 py-3.5 font-display text-lg font-semibold text-white duration-300 hover:brightness-50"
          >
            Get in Touch!
          </Link>
          <div className="mt-5 flex gap-2 *:w-9">
            <a href="https://linkedin.com/in/blue-pilkinton-ching">
              <img src="images/linkedin.svg" alt="link to linkedin" />
            </a>
            <a href="https://github.com/Blue-Pilkinton-Ching">
              <img src="images/github.svg" alt="link to github" />
            </a>
            <a className="p-1" href="https://www.instagram.com/blues_profile/">
              <img src="images/instagram.svg" alt="link to instagram" />
            </a>
          </div>
        </div>

        {width != null && width > 767 ? (
          <div className="ml-4 w-[30vw] max-w-[500px]">
            <img
              src="images/headshot.png"
              alt="headshot of Blue PC"
              className="aspect-square rounded-xl object-cover shadow-xl"
            />
          </div>
        ) : (
          ""
        )}
      </div>
    </section>
  );
}
