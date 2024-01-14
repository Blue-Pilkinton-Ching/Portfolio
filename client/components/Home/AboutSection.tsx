import { useEffect, useState } from "react";
import GitHubCalendar from "react-github-calendar";
import { useWindowSize } from "@uidotdev/usehooks";
import { TechIcons } from "./TechIcons";

export function AboutSection() {
  const { width } = useWindowSize();
  const [shouldScroll, setShouldScroll] = useState(false);

  useEffect(() => {
    if (shouldScroll) {
      setTimeout(() => {
        document
          .getElementsByClassName(
            "react-activity-calendar__scroll-container",
          )[0]
          .scrollTo(10000, 0);
      }, 1000);
    }
  }, [shouldScroll]);

  useEffect(() => {
    if (width && width < 884) {
      setShouldScroll(true);
    } else {
      setShouldScroll(false);
    }
  }, [width]);

  return (
    <section id="about" className="center flex min-h-dvh w-full flex-col">
      <div className="my-auto">
        <div className="flex w-full flex-col gap-12 sm:gap-16 lg:flex-row lg:gap-20">
          <div className="">
            <h4 className="font-display text-3xl font-bold text-green-500 sm:text-4xl">
              About Me
            </h4>
            <br />
            <p className="text-md text-justify font-display font-semibold text-white sm:text-xl">
              Kia ora! I&apos;m Blue. Since the age of ten or eleven, I have
              been programming. I started with scratch, the visual block-based
              programming language, and since then have gone to develop games
              and web apps, both independently and in groups of teams. <br />
              <br />I love to learn, and get a kick out of building interactive
              and practical products. Solving problems is my specialty! I thrive
              on jumping into a challenge and devising creative solutions for
              it. I am also very passionate and curious about the possibilities
              of tech, recently I have been developing a web app for interfacing
              with GPT models. <br />
              <br />
              With my most recent study at Dev Academy, alongside the
              development of technical skills there has been a very strong
              emphasis on Human Skills when working in teams. I&apos;m all for
              it! I have a strong value for kindness, empathy, and
              communication. Any place I work at, or situation I&apos;m in, I
              strive for inclusivity and diversity.
            </p>
          </div>
          <div className="flex lg:w-fit lg:flex-col">
            <div className="h-min whitespace-nowrap">
              <h4 className="font-display text-3xl font-bold text-green-500 sm:text-4xl">
                Skills
              </h4>
              <br />
              <div className="text-md text-justify font-display  font-semibold text-white sm:text-xl">
                <ul className="list-disc text-left">
                  <li>Authentication</li>
                  <li>REST API calls</li>
                  <li>Databases</li>
                  <br />
                  <li>3d & 2d games</li>
                  <li>Multithreaded Code</li>
                  <li>Compute Shaders</li>
                  <li>Multiplayer Networking (Unity NGO)</li>
                  <li>Multiplayer Matchmaking (Unity Lobby)</li>
                  <li>Online voice chat (Vivox)</li>
                  <li>Unity VFX & Shader Graph</li>
                  <li>C# Debugging & Breakpoints</li>
                </ul>
              </div>
            </div>
            {width && width < 1400 && width > 640 ? (
              <TechIcons classes="px-[5%] flex w-fit flex-wrap flex-grow content-center justify-center" />
            ) : (
              ""
            )}
          </div>
        </div>
        <div className="w-full">
          {width && (width > 1399 || width < 641) ? (
            <TechIcons classes="flex flex-wrap justify-center mt-[6vh]" />
          ) : (
            ""
          )}
          <div className="mx-auto mt-[6vh] max-w-fit overflow-hidden text-white">
            <GitHubCalendar
              username="blue-pilkinton-ching"
              colorScheme="dark"
              blockSize={10}
              blockMargin={3}
              showWeekdayLabels
            />
          </div>
        </div>
      </div>
    </section>
  );
}
