import { ProjectProps } from "../../interfaces";

export function Project(props: ProjectProps) {
  return (
    <section className="pt-28">
      <div className="mx-auto w-[95%] max-w-[900px] sm:w-[80%]">
        <h1 className="pb-5 pt-10 text-center font-display text-4xl font-semibold text-white sm:text-7xl">
          {props.title}
        </h1>
        <img
          src={`/images/projects/${props.imageFile}.png`}
          alt={`${props.title}`}
          className=""
        />
        <div className="flex flex-wrap justify-center">{props.icons}</div>

        <br />
        <div className="max-w-full text-wrap text-justify font-display text-lg font-semibold text-white">
          {props.content}
        </div>
        <div className="flex max-w-[500] flex-wrap justify-center gap-5 py-10">
          {props.demoOptions.map((element, index) => {
            let content;

            switch (element.type) {
              case "instagram":
                content = (
                  <a href={element.link}>
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
                    Live Demo
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
