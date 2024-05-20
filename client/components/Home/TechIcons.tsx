import { TechIconsProps } from "../../../interfaces";
import { TechIcon } from "./TechIcon";

export function TechIcons(props: TechIconsProps) {
  return (
    <div className={`${props.classes}`}>
      <TechIcon iconName="javascript" scale={"scale-[104%]"} />
      <TechIcon iconName="typescript" scale={"scale-[110%]"} />
      <TechIcon iconName="nextjs" />
      <TechIcon iconName="react" />
      <TechIcon iconName="html" scale={"scale-[85%]"} />
      <TechIcon iconName="css" scale={"scale-[85%]"} />
      <TechIcon iconName="firebase" />
      <TechIcon iconName="nodejs" scale={"scale-[105%]"} />
      <TechIcon iconName="tailwindcss" />
      <TechIcon iconName="flutter" scale={"scale-[85%]"} />
      <TechIcon iconName="csharp" iconTitle="c#" scale={"scale-[85%]"} />
      <TechIcon iconName="unity" />
      <TechIcon iconName="unreal-engine" iconTitle="unreal engine" />
      <TechIcon iconName="vscode" scale={"scale-[95%]"} />
      <TechIcon iconName="git" scale={"scale-[110%]"} />
      <TechIcon iconName="ubuntu" />
      <TechIcon iconName="rust" scale={"scale-[125%]"} />
      <TechIcon iconName="holochain" scale={"scale-[110%]"} />
      <TechIcon iconName="svelte" scale={"scale-[90%]"} />
      <TechIcon iconName="aws" scale={"scale-[100%]"} />
    </div>
  );
}
