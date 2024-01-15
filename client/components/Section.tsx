import { BackgroundProbs as BackgroundProps } from "../../interfaces";

export function Section(props: BackgroundProps) {
  return (
    <div className="bg-neutral-800 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]">
      <div
        className="background-fade border-[#808080]/[.12]
        px-5 sm:px-10 md:px-20 lg:px-32"
      >
        {props.children}
      </div>
    </div>
  );
}
