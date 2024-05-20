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
    case "heihei":
      content = (
        <Project
          title="Heihei/NZGDA Games"
          imageFile="heihei"
          content={
            <>
              This project was my first contract work. It comprises of two
              NextJS/React websites designed for children to play online
              computer games developed by local New Zealand studios. Both sites,
              run on the same code, but have separate branding. The website in
              the images above is Heihei Games. The New Zealand Game Developers
              Association (NZGDA) also runs there own version of this website.
              <br />
              <br />
              This project was a bit of a difficult one! The stack of the site
              quite complex, it uses Firebase as its database and authentication
              provider, but the games themselves, and website deployment is
              handled by AWS. Juggling these different services became a bit of
              a challenge and added to that, halfway through the project I
              learned that regular static routes wouldn`&apos;t be able to
              handle the sheer file size of the games being uploaded, so I had
              to build an entire separate ExpressJS backend as well!
              <br />
              <br />
              Some of the technologies, services & skills I&apos;ve used in this
              project include:
              <br />
              <br />
              <div className="flex w-full justify-around text-left *:*:max-w-96 *:list-inside *:list-disc">
                <ul>
                  <li>Authentication</li>
                  <li>Cloud Firestore</li>
                </ul>
                <ul>
                  <li>AWS Amplify</li>
                  <li>AWS EC2</li>
                  <li>AWS S3</li>
                </ul>
                <ul>
                  <li>ExpressJS w Multer</li>
                  <li>Handling of BLOBs</li>
                </ul>
              </div>
              <br />
            </>
          }
          icons={
            <>
              <TechIcon iconName="nextjs" />
              <TechIcon iconName="react" />
              <TechIcon scale="scale-[107%]" iconName="typescript" />
              <TechIcon iconName="tailwindcss" />
              <TechIcon scale="scale-[85%]" iconName="css" />
              <TechIcon scale="scale-[80%]" iconName="html" />
              <TechIcon iconName="firebase" />
              <TechIcon iconName="nodejs" />
              <TechIcon iconName="aws" />
            </>
          }
          playVideo={setVideo}
          demoOptions={[
            {
              type: "demo",
              link: "https://main.dsxdz6ba6r834.amplifyapp.com/",
              icon: "compass",
            },
            // {
            //   type: "video",
            //   link: "https://www.youtube.com/embed/w87836Q_MfY",
            //   icon: "play",
            // },
          ]}
        />
      );
      break;

    case "prepaygpt":
      content = (
        <Project
          title="PrePay GPT"
          imageFile="PrePayGPT"
          content={
            <>
              PrePay GPT is a site I recently created for interfacing with Open
              AI GPT Models. The advantage it has over the official ChatGPT, is
              that you can access and pay for GPT-4 on a per-message basis,
              rather than having to subscribe to the more expensive premium
              service offered by Open AI. <br />
              <br />
              This project makes use of many services provided by Google
              Firebase. Some of the technologies & skills I&apos;ve used in this
              project include:
              <br />
              <br />
              <div className="flex w-full justify-around text-left *:*:max-w-96 *:list-inside *:list-disc">
                <ul>
                  <li>Authentication</li>
                  <li>Nosql database (firestore)</li>
                  <li>Pagination</li>
                </ul>
              </div>
              <br />
            </>
          }
          icons={
            <>
              <TechIcon scale="scale-[107%]" iconName="typescript" />
              <TechIcon iconName="react" />
              <TechIcon scale="scale-[80%]" iconName="html" />
              <TechIcon scale="scale-[85%]" iconName="css" />
              <TechIcon iconName="firebase" />
              <TechIcon iconName="nodejs" />
            </>
          }
          playVideo={setVideo}
          demoOptions={[
            {
              type: "demo",
              link: "https://www.prepaygpt.xyz",
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
          imageFile="Games"
          content={
            <>
              A large amount of my time spent programming has been working on
              games. Most of this takes place inside the Unity Engine, but
              I&apos;ve also worked with Unreal, and a tiny bit of PhaserJS.
              I&apos;ve developed a large variety of games of different styles
              including low poly, tilemap based, hyper relistic, and 2d & 3d.
              Some of the skills and technologies I&apos;ve utilized in my Game
              Development journey includes:
              <br />
              <br />
              <div className="flex w-full justify-around text-left *:*:max-w-60 *:list-inside *:list-disc">
                <ul>
                  <li>Unity Gaming Services</li>
                  <li>Authentication</li>
                  <li>Multiplayer Networking</li>
                  <li>Multiplayer Matchmaking</li>
                  <li>Online voice chat</li>
                </ul>
                <ul>
                  <li>Unreal Material Editor</li>
                  <li>Unreal Blueprints</li>
                  <li>Unity Shader, VFX Graph</li>
                  <li>3d animations, models & textures</li>
                </ul>
                <ul>
                  <li>Compute Shaders</li>
                  <li>Multithreaded code</li>
                  <li>C# debugging & breakpoints</li>
                </ul>
              </div>
              <br />
              I&apos;ve been in involved in a number of Game Jams, and worked in
              small teams on multiple game related projects. I go into further
              detail on a few specific games I&apos;ve made (inlcuding renders
              of mine) can be found on my instagram below.
            </>
          }
          demoOptions={[
            {
              icon: "instagram-icon",
              link: "https://www.instagram.com/blues_profile/",
              type: "instagram",
            },
          ]}
          playVideo={setVideo}
          icons={
            <>
              <TechIcon scale="scale-[85%]" iconName="csharp" iconTitle="c#" />
              <TechIcon iconName="unity" />
              <TechIcon iconName="unreal-engine" iconTitle="unreal engine" />
            </>
          }
        />
      );
      break;

    case "models-renders":
      content = (
        <Project
          title="Models & Renders"
          imageFile="Renders"
          content={
            <>
              For 12 months I studied for an animation diploma at Yoobee
              Colleges in Wellington. At this course I learnt the fundementals
              of digital 3d modeling, rendering, texturing, and 2d & 3d
              animation. <br />
              <br />
              These digital skills are not the main ones I focus on. I am more
              interested and knowlegable in programming, however this course has
              done a good job at teaching me how to work with and manipulate 3d
              objects, as well as giving me a deeper level of understanding of
              design and the full game development workflow.
              <br />
              <br />
              Many of the models & renders I&apos;ve made (inlcuding other
              game-related projects) can be found on my instagram below.
            </>
          }
          demoOptions={[
            {
              icon: "instagram-icon",
              link: "https://www.instagram.com/blues_profile/",
              type: "instagram",
            },
          ]}
          icons={
            <>
              <TechIcon scale="scale-[90%]" iconName="blender" />
              <TechIcon
                scale="scale-[85%]"
                iconName="maya"
                iconTitle="autodesk maya"
              />
              <TechIcon
                scale="scale-[90%]"
                iconName="substance"
                iconTitle="substance painter"
              />
              <TechIcon
                scale="scale-[85%]"
                iconName="adobe"
                iconTitle="adobe creative suite"
              />
            </>
          }
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
