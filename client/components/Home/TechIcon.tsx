import { TechIconProps } from "../../../interfaces";

export function TechIcon(props: TechIconProps) {
  return (
    <img
      className="m-1 h-12 w-12 shadow-2xl"
      src={`images/tech-icons/${props.iconName}.svg`}
      alt="firebase"
      title={props.iconTitle ? props.iconTitle : props.iconName}
    />
  );
}
