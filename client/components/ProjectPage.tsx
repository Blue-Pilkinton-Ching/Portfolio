import { useParams } from "react-router-dom";
import { BackgroundSection } from "./BackgroundSection";
import { Project } from "./Project";

export default function ProjectPage() {
  const { project } = useParams();

  let content;

  switch (project) {
    case "prepaygpt":
      content = (
        <Project
          title="PrePay GPT"
          imageFile="PrePayGPT"
          information="asd j asda  sdjasda sdj as da sd asdas jas  sdjas  a  jas das d ja sda sdjasd asdjasd asd j asda  sdjasda sdj as da sd asdas jas  sdjas  a  jas das d ja sda sdjasd asdjasd asd j asda  sdjasda sdj as da sd asdas jas  sdjas  a  jas das d ja sda sdjasd asdjasd "
          demoOptions={[
            {
              type: "instagram",
              link: "https://www.instagram.com/blues_profile/",
              file: "instagram-icon",
            },
            {
              type: "demo",
              link: "https://prepaygpt.xyz",
              file: "",
            },
            {
              type: "video",
              link: "https://youtube.com",
              file: "",
            },
          ]}
        />
      );
      break;

    case "games":
      content = (
        <Project
          title="2d & 3d Games"
          imageFile="PrePayGPT"
          information="asdjasd"
          demoOptions={[]}
        />
      );
      break;

    case "modelsrenders":
      content = (
        <Project
          title="Models & Renders"
          imageFile="PrePayGPT"
          information="asdjasd"
          demoOptions={[]}
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
