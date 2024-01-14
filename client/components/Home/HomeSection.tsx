import { useWindowSize } from "@uidotdev/usehooks";
import { Link } from "react-router-dom";
import { useInView, animate, stagger } from "framer-motion";
import { useEffect, useRef } from "react";

export function HomeSection() {
  const { width } = useWindowSize();
  const title = useRef(null);
  const titleInView = useInView(title);

  useEffect(() => {
    if (titleInView) {
      animate(
        ".title-animate",
        { opacity: 1, y: 0 },
        { duration: 0.7, delay: stagger(0.1), ease: "circOut" },
      );
      if (width && width > 767) {
        animate(
          ".title-image-animate",
          { opacity: 1, x: 0 },
          { duration: 0.5, delay: 0.3, ease: "circOut" },
        );
      }
    } else {
      animate(".title-animate", { opacity: 0, y: 75 }, { duration: 0 });
      if (width && width > 767) {
        animate(".title-image-animate", { opacity: 0, x: 75 }, { duration: 0 });
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [titleInView, width]);

  return (
    <section id="home" className=" flex h-svh w-full flex-col pt-8">
      <div className="my-auto flex justify-between" ref={title}>
        <div className="my-auto h-fit">
          <h1
            className="title-animate font-display text-5xl font-bold
              text-white xl:text-7xl"
            data-aos="fade-up"
          >
            Blue
            <br />
            Pilkinton-Ching
          </h1>
          <h2 className="title-animate my-4 font-display text-2xl font-bold text-green-600">
            Fullstack & Interactive Developer
          </h2>
          {/* <h3 className="font-display text-lg text-white">Portfolio</h3> */}
          <div className="title-animate">
            <Link
              to={`/#contact`}
              className=" mt-3 inline-block rounded-3xl bg-green-600 px-6 py-3.5 font-display text-lg font-semibold text-white duration-300 hover:brightness-50"
            >
              Get in Touch!
            </Link>
          </div>

          <div className="title-animate mt-5 flex gap-2 *:w-9">
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
          <div className="title-image-animate ml-4 w-[30vw] max-w-[500px]">
            <img
              src="images/headshot.png"
              alt="headshot of Blue PC"
              className="aspect-square rounded-xl object-cover shadow-lg"
            />
          </div>
        ) : (
          ""
        )}
      </div>
    </section>
  );
}
