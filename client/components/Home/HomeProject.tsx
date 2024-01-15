import { HomeProjectProps } from "../../../interfaces";

const groups = [
  "absolute opacity-0 duration-300 group-hover/home-project-1:opacity-100",
  "absolute opacity-0 duration-300 group-hover/home-project-2:opacity-100",
  "absolute opacity-0 duration-300 group-hover/home-project-3:opacity-100",
  "absolute opacity-0 duration-300 group-hover/home-project-4:opacity-100",
  "absolute opacity-0 duration-300 group-hover/home-project-5:opacity-100",
  "absolute opacity-0 duration-300 group-hover/home-project-6:opacity-100",
  "absolute opacity-0 duration-300 group-hover/home-project-7:opacity-100",
  "absolute opacity-0 duration-300 group-hover/home-project-8:opacity-100",
  "absolute opacity-0 duration-300 group-hover/home-project-9:opacity-100",
];

export function HomeProject(props: HomeProjectProps) {
  return (
    <div
      className={`group/home-project-${props.id} flex h-min min-w-full max-w-[500px] flex-1 flex-col rounded-xl bg-stone-900 p-5 text-white shadow-md duration-300 hover:scale-105 hover:bg-green-600 sm:w-96 sm:min-w-96`}
    >
      <div className="flex w-full items-center justify-between pt-2">
        <h5 className="pl-3 font-display text-2xl">{props.title}</h5>
        <div className="w-11 rotate-180">
          <img
            className={groups[props.id]}
            src="images/arrow-white.svg"
            alt="arrow"
          />
          <img src="images/arrow.svg" alt="arrow" />
        </div>
      </div>
      <div
        className={`whitespace-pre pl-3 pt-2 font-display text-sm text-zinc-400 group-hover/home-project-${props.id}:text-neutral-800 duration-300 `}
      >
        {props.technologies}
      </div>
      <img
        className={`scale-105 self-end pt-3 drop-shadow`}
        src={`images/projects/${props.file}.png`}
        alt={props.file}
      />
    </div>
  );
}
