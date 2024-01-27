import { useParams } from "react-router-dom";
import { BackgroundSection } from "./BackgroundSection";
import { Project } from "./Project";
import { useEffect, useState } from "react";
import { TechIcon } from "./Home/TechIcon";

export default function ProjectPage() {
  const { project } = useParams();
  const [playingVideo, setPlayingVideo] = useState("");

  let content;

  function setVideo(video: string) {
    setPlayingVideo(video);
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  switch (project) {
    case "prepaygpt":
      content = (
        <Project
          title="PrePay GPT"
          imageFile="PrePayGPT"
          content={
            <>
              PrePay GPT is a site I recently created for interfacing with Open
              AI GPT Models. The advantage it has over the over the official
              ChatGPT, is that you can access and pay for GPT-4 on a per-message
              basis, rather than having to subscribe to the more expensive
              premium service offered by Open AI. <br />
              <br />
              This project makes use of many services provided by Google
              Firebase. Some of the technologies & skills I&apos;ve used in this
              project include:
              <br />
              <br />
              <div className="flex w-full justify-around">
                <ul className="list-inside list-disc">
                  <li>Authentication</li>
                  <li>Nosql database (firestore)</li>
                  <li>Pagination</li>
                </ul>
              </div>
              <br />
              PrePay GPT is hosted on an Oracle Cloud VPS.
            </>
          }
          icons={
            <>
              <TechIcon iconName="typescript" />
              <TechIcon iconName="react" />
              <TechIcon iconName="html" />
              <TechIcon iconName="css" />
              <TechIcon iconName="firebase" />
              <TechIcon iconName="nodejs" />
              <TechIcon iconName="ubuntu" />
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
              link: "https://www.youtube.com/embed/w87836Q_MfY",
              icon: "play",
            },
            {
              type: "source",
              link: "https://github.com/Blue-Pilkinton-Ching/ChatGPT-Website/tree/main",
              icon: "github-white",
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
          icons={<></>}
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
          icons={<></>}
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
        <div className={`scroll h-full w-full ${scroll}`}>
          {content}
          {playingVideo ? (
            <button
              className="fixed left-0 top-0 z-[100] h-dvh w-full bg-neutral-400/5 backdrop-blur-xl "
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
