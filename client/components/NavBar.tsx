import { Link } from "react-router-dom";
import { NavBarProps } from "../../interfaces";

export function NavBar(props: NavBarProps) {
  function onItemClick() {
    props.onItemClick();
  }

  return (
    <nav className={props.classes}>
      <Link onClick={onItemClick} to="/#home">
        HOME
      </Link>
      <Link onClick={onItemClick} to="/#about">
        ABOUT ME
      </Link>
      <Link onClick={onItemClick} to="/#projects">
        PROJECTS
      </Link>
      <Link onClick={onItemClick} to="/#contact">
        CONTACT
      </Link>
      <a
        onClick={onItemClick}
        href="https://drive.google.com/file/d/1AHePSyyLN01eJtzaTdFhzOUR9aPQRW_W/view?usp=sharing"
        target="_blank"
        rel="noreferrer"
      >
        RESUME
      </a>
    </nav>
  );
}
