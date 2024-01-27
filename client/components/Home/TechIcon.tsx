import { TechIconProps } from "../../../interfaces";

export function TechIcon(props: TechIconProps) {
  return (
    <img
      className={`m-1 ${props.sm ? "h-10 w-10" : "h-12 w-12"}`}
      src={`/images/tech-icons/${props.iconName}.svg`}
      alt={props.iconTitle ? props.iconTitle : props.iconName}
      title={props.iconTitle ? props.iconTitle : props.iconName}
    />
  );
}
