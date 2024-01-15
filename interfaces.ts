export interface NavBarProps {
  lastItemClasses: string;
  classes: string;
  onItemClick: () => void;
}

export interface TechIconProps {
  iconName: string;
  iconTitle?: string;
}

export interface TechIconsProps {
  classes: string;
}

export interface HomeProjectProps {
  id: number;
  title: string;
  file: string;
  technologies: string;
}
