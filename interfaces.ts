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
  title: string;
  file: string;
  page: string;
  technologies: string;
}

export interface BackgroundProbs {
  children?: JSX.Element | JSX.Element[];
}

export interface ProjectProps {
  title: string;
  file: string;
  information: string;
}
