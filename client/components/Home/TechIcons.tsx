import { TechIconsProps } from "../../../interfaces";
import { TechIcon } from "./TechIcon";

export function TechIcons(props: TechIconsProps) {
  return (
    <div className={`${props.classes}`}>
      <TechIcon iconName="javascript" />
      <TechIcon iconName="typescript" />
      <TechIcon iconName="nextjs" />
      <TechIcon iconName="react" />
      <TechIcon iconName="html" />
      <TechIcon iconName="css" />
      <TechIcon iconName="firebase" />
      <TechIcon iconName="nodejs" />
      <TechIcon iconName="tailwindcss" />
      <TechIcon iconName="csharp" iconTitle="c#" />
      <TechIcon iconName="unity" />
      <TechIcon iconName="unreal-engine" iconTitle="unreal engine" />
      <TechIcon iconName="vscode" />
      <TechIcon iconName="git" />
      <TechIcon iconName="ubuntu" />
    </div>
  );
}
