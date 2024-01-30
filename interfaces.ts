export interface NavBarProps {
  classes: string;
  onItemClick: () => void;
}

export interface TechIconProps {
  iconName: string;
  iconTitle?: string;
  sm?: boolean;
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
  imageFile: string;
  content: JSX.Element;
  demoOptions: DemoOptionData[];
  playVideo?: (video: string) => void;
  icons: JSX.Element;
}

export interface DemoOptionData {
  type: "instagram" | "demo" | "video" | "source";
  icon: string;
  link: string;
}
