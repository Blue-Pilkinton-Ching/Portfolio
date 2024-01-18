import { ProjectProps } from "../../interfaces";

export function Project(props: ProjectProps) {
  return (
    <section>
      <img
        src={`/images/projects/${props.file}.png`}
        alt={`${props.title}`}
        className="mx-auto w-full max-w-[800px]"
      />
      <h1 className="text-center font-display text-4xl font-semibold text-white">
        {props.title}
      </h1>
    </section>
  );
}
