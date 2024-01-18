import { useParams } from "react-router-dom";
import { BackgroundSection } from "./BackgroundSection";
import { Project } from "./Project";

export default function ProjectPage() {
  const { project } = useParams();

  let content;

  switch (project) {
    case "prepaygpt":
      content = (
        <Project title="PrePay GPT" file="PrePayGPT" information="asdjasd" />
      );
      break;

    case "games":
      content = (
        <Project title="2d & 3d Games" file="PrePayGPT" information="asdjasd" />
      );
      break;

    case "modelsrenders":
      content = (
        <Project
          title="Models & Renders"
          file="PrePayGPT"
          information="asdjasd"
        />
      );
      break;

    default:
      content = "404 not found";
      break;
  }

  return (
    <>
      <BackgroundSection>
        <div className="min-h-dvh w-full">
          <section>{content}</section>
        </div>
      </BackgroundSection>
    </>
  );
}
