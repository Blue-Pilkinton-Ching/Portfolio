import { ProjectProps } from "../../interfaces";

export function Project(props: ProjectProps) {
  return (
    <section className="pt-28">
      <h1 className="text-center font-display text-5xl font-semibold text-white">
        {props.title}
      </h1>
      <br />
      <div className="mx-auto flex w-full max-w-[900px] flex-col-reverse items-center justify-center gap-10">
        <p className="max-w-full flex-1 text-wrap text-justify font-display text-lg font-semibold text-white">
          {props.information}
        </p>
        <div className="flex-1">
          <img
            src={`/images/projects/${props.imageFile}.png`}
            alt={`${props.title}`}
            className=""
          />
        </div>
      </div>
      <br />
      <div className="flex max-w-[500] flex-wrap justify-center gap-5">
        {props.demoOptions.map((element, index) => {
          let content;

          switch (element.type) {
            case "instagram":
              content = (
                <>
                  <a href={element.link} className="flex items-center gap-3">
                    <img
                      className="w-10"
                      src={`/images/${element.file}.svg`}
                      alt=""
                    />
                    Digital Projects
                  </a>
                </>
              );
              break;

            case "demo":
              content = <a href={element.link}>Live Demo</a>;
              break;

            case "video":
              content = <a href={element.link}>Video Demo</a>;
              break;
          }

          return (
            <div
              className="font-display text-white *:flex *:w-56 *:rounded-2xl *:bg-green-600 *:px-5 *:py-2 hover:*:brightness-50"
              key={index}
            >
              {content}
            </div>
          );
        })}
      </div>
      <br />
    </section>
  );
}
