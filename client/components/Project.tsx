import { useEffect, useState } from "react";
import { ProjectProps } from "../../interfaces";
import { animate } from "framer-motion";

export function Project(props: ProjectProps) {
  const [triggerAnimate, setTriggerAnimate] = useState(false);

  useEffect(() => {
    if (triggerAnimate) {
      animate(
        ".animate-title",
        { opacity: 1, x: 0 },
        { duration: 0.5, ease: "circOut" },
      );

      animate(
        ".animate-image",
        { opacity: 1, y: 0 },
        { duration: 0.5, delay: 0.1, ease: "circOut" },
      );

      animate(
        ".animate-icons",
        { opacity: 1, x: 0 },
        {
          duration: 0.5,
          delay: 0.2,
          ease: "circOut",
        },
      );

      animate(
        ".animate-content",
        { opacity: 1, y: 0 },
        {
          duration: 0.5,
          delay: 0.3,
          ease: "circOut",
        },
      );

      animate(
        ".animate-demo",
        { opacity: 1, y: 0 },
        {
          duration: 0.5,
          delay: 0.4,
          ease: "circOut",
        },
      );

      setTriggerAnimate(true);
    } else {
      animate(".animate-title", { opacity: 0, x: -75 }, { duration: 0 });
      animate(".animate-image", { opacity: 0, y: 75 }, { duration: 0 });
      animate(".animate-icons", { opacity: 0, x: 75 }, { duration: 0 });
      animate(".animate-content", { opacity: 0, y: 75 }, { duration: 0 });
      animate(".animate-demo", { opacity: 0, y: 75 }, { duration: 0 });
    }

    setTriggerAnimate(true);
  }, [triggerAnimate]);

  return (
    <section className="pt-28">
      <div className="mx-auto w-[95%] max-w-[900px] sm:w-[80%]">
        <h1 className="animate-title pb-5 pt-10 text-center font-display text-4xl font-semibold text-white sm:text-7xl">
          {props.title}
        </h1>
        <img
          src={`/images/projects/${props.imageFile}.png`}
          alt={`${props.title}`}
          className="animate-image"
        />
        <div className="animate-icons flex flex-wrap items-center justify-center ">
          {props.icons}
        </div>
        <br />
        <div className="animate-content max-w-full text-wrap text-justify font-display text-lg font-semibold text-white">
          {props.content}
        </div>
        <div className="animate-demo flex max-w-[500] flex-wrap justify-center gap-5 py-10">
          {props.demoOptions.map((element, index) => {
            let content;

            switch (element.type) {
              case "instagram":
                content = (
                  <a href={element.link} target="_blank" rel="noreferrer">
                    <img
                      className="w-10"
                      src={`/images/${element.icon}.svg`}
                      alt=""
                    />
                    Digital Projects
                  </a>
                );
                break;

              case "demo":
                content = (
                  <a href={element.link} target="_blank" rel="noreferrer">
                    <img
                      className="w-10"
                      src={`/images/${element.icon}.svg`}
                      alt=""
                    />
                    Live Preview
                  </a>
                );
                break;

              case "video":
                content = (
                  <button
                    onClick={() =>
                      props.playVideo ? props.playVideo(element.link) : ""
                    }
                  >
                    <img
                      className="w-10"
                      src={`/images/${element.icon}.svg`}
                      alt=""
                    />
                    Video Demo
                  </button>
                );
                break;

              case "source":
                content = (
                  <a href={element.link} target="_blank" rel="noreferrer">
                    <img
                      className="w-10"
                      src={`/images/${element.icon}.svg`}
                      alt=""
                    />
                    Source Code
                  </a>
                );
            }

            return (
              <div
                className="font-display text-white *:flex *:w-56 *:items-center *:gap-3 *:rounded-2xl *:bg-green-600 *:px-5 *:py-2 hover:*:brightness-50"
                key={index}
              >
                {content}
              </div>
            );
          })}
        </div>
      </div>
      <br />
      <br />
    </section>
  );
}
