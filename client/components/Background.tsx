import { BackgroundProbs as BackgroundProps } from "../../interfaces";

export function Background(props: BackgroundProps) {
  return (
    <div className="bg-neutral-800 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]">
      <div className="background-fade">{props.children}</div>
    </div>
  );
}
