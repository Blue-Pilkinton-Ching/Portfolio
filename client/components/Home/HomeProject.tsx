import { Link } from "react-router-dom";
import { HomeProjectProps } from "../../../interfaces";

export function HomeProject(props: HomeProjectProps) {
  return (
    <Link
      className={`group/home-project flex h-min min-w-full flex-1 cursor-pointer flex-col rounded-xl bg-stone-900 p-5 text-white shadow-md duration-300 hover:scale-105 hover:bg-green-600 sm:w-[500px]`}
      to={"projects/" + props.page}
    >
      <div className="flex w-full items-center justify-between pt-2">
        <h5 className="pl-3 font-display text-2xl">{props.title}</h5>
        <div className="w-11 rotate-180">
          <img
            className="absolute opacity-0 duration-300 group-hover/home-project:opacity-100"
            src="/images/arrow-white.svg"
            alt="arrow"
          />
          <img src="/images/arrow.svg" alt="arrow" />
        </div>
      </div>
      <div
        className={`whitespace-pre text-wrap pl-3 pt-2 font-display text-sm text-zinc-400 duration-300 group-hover/home-project:text-white `}
      >
        {props.technologies}
      </div>
      <img
        className={`scale-105 self-end pt-3 drop-shadow`}
        src={`images/projects/${props.file}.png`}
        alt={props.file}
      />
    </Link>
  );
}
