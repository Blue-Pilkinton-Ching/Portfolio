import { TechIconProps } from "../../../interfaces";

export function TechIcon(props: TechIconProps) {
  return (
    <div className="m-1 flex h-12 w-12 items-center justify-center">
      <img
        className={props.scale}
        src={`/images/tech-icons/${props.iconName}.svg`}
        alt={props.iconTitle ? props.iconTitle : props.iconName}
        title={props.iconTitle ? props.iconTitle : props.iconName}
      />
    </div>
  );
}
