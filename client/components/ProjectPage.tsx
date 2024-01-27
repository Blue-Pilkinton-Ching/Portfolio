import { useParams } from "react-router-dom";
import { BackgroundSection } from "./BackgroundSection";
import { Project } from "./Project";
import { useState } from "react";

export default function ProjectPage() {
  const { project } = useParams();
  const [playingVideo, setPlayingVideo] = useState("");

  let content;

  function setVideo(video: string) {
    setPlayingVideo(video);
  }

  switch (project) {
    case "prepaygpt":
      content = (
        <Project
          title="PrePay GPT"
          imageFile="PrePayGPT"
          content={
            <>
              asd j asda sdjasda sdj as da sd asdas jas sdjas a jas das d ja sda
              sdjasd asdjasd asd j asda sdjasda sdj as da sd asdas jas sdjas a
              jas das d ja sda sdjasd asdjasd asd j asda sdjasda sdj as da sd
              asdas jas sdjas a jas das d ja sda sdjasd asdjasd
            </>
          }
          playVideo={setVideo}
          demoOptions={[
            {
              type: "demo",
              link: "https://prepaygpt.xyz",
              icon: "compass",
            },
            {
              type: "video",
              link: "https://www.youtube.com/embed/tgbNymZ7vqY",
              icon: "play",
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
          content={<>asdjasd</>}
          demoOptions={[]}
          playVideo={setVideo}
        />
      );
      break;

    case "modelsrenders":
      content = (
        <Project
          title="Models & Renders"
          imageFile="PrePayGPT"
          content={<>asdjasd</>}
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
        <div className={`scroll min-h-dvh w-full ${scroll}`}>
          {content}
          {playingVideo ? (
            <button
              className="fixed left-0 top-0 z-[100] h-dvh w-full bg-neutral-400/10 backdrop-blur-xl "
              onClick={() => setPlayingVideo("")}
            >
              <div className="mx-auto aspect-video w-[95%] sm:w-[80%] lg:w-[60%]">
                <iframe
                  allowFullScreen
                  title="demo-video"
                  width="100%"
                  height="100%"
                  src={`${playingVideo}?&autoplay=1`}
                ></iframe>
              </div>
            </button>
          ) : (
            ""
          )}
        </div>
      </BackgroundSection>
    </>
  );
}
