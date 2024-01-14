import { useEffect, useRef, useState } from "react";
import GitHubCalendar from "react-github-calendar";
import { useWindowSize } from "@uidotdev/usehooks";
import { TechIcons } from "./TechIcons";
import { animate, stagger, useInView } from "framer-motion";

export function AboutSection() {
  const { width } = useWindowSize();
  const [shouldScroll, setShouldScroll] = useState(false);
  const about = useRef(null);
  const skills = useRef(null);
  const github = useRef(null);
  const aboutInView = useInView(about);
  const skillsInView = useInView(skills);
  const githubInView = useInView(github);

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

  useEffect(() => {
    if (skillsInView) {
      animate(
        ".about-skills-animate",
        { opacity: 1, x: 0 },
        { duration: 0.5, delay: 0.4, ease: "circOut" },
      );
      animate(
        ".about-skills-text-animate",
        { opacity: 1, x: 0 },
        {
          duration: 0.5,
          delay: stagger(0.1, { startDelay: 0.5 }),
          ease: "circOut",
        },
      );
      animate(
        ".about-skills-icons-animate",
        { opacity: 1, y: 0 },
        {
          duration: 0.5,
          delay: 0.5,
          ease: "circOut",
        },
      );
    } else {
      animate(".about-skills-animate", { opacity: 0, x: 75 }, { duration: 0 });
      animate(
        ".about-skills-text-animate",
        { opacity: 0, x: 75 },
        { duration: 0 },
      );
      if (width) {
        animate(
          ".about-skills-icons-animate",
          { opacity: 0, y: 75 },
          { duration: 0 },
        );
      }
    }
  }, [width, skillsInView]);

  useEffect(() => {
    if (githubInView) {
      animate(
        ".about-github-animate",
        { opacity: 1, y: 0 },
        {
          duration: 0.5,
          delay: 0.6,
          ease: "circOut",
        },
      );
    } else {
      animate(".about-github-animate", { opacity: 0, y: 75 }, { duration: 0 });
    }
  }, [width, githubInView]);

  useEffect(() => {
    if (aboutInView) {
      animate(
        ".about-animate",
        { opacity: 1, y: 0 },
        { duration: 0.5, delay: stagger(0.1), ease: "circOut" },
      );
      animate(
        ".about-me-animate",
        { opacity: 1, x: 0 },
        { duration: 0.5, delay: 0.3, ease: "circOut" },
      );
    } else {
      animate(".about-animate", { opacity: 0, y: 75 }, { duration: 0 });
      animate(".about-me-animate", { opacity: 0, x: -75 }, { duration: 0 });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [aboutInView, width]);

  return (
    <section id="about" className="center flex min-h-dvh w-full flex-col">
      <div className="my-auto">
        <div
          ref={about}
          className="flex w-full flex-col gap-12 sm:gap-16 lg:flex-row lg:gap-20"
        >
          <div className="">
            <h4 className="about-me-animate font-display text-3xl font-bold text-green-600 sm:text-4xl">
              About Me
            </h4>
            <br />
            <div className="text-md text-justify font-display font-semibold text-white sm:text-xl">
              <p className="about-animate">
                Kia ora! I&apos;m Blue. Since the age of ten or eleven, I have
                been programming. I started with scratch, the visual block-based
                programming language, and since then have gone to develop games
                and web apps, both independently and in groups of teams.
              </p>
              <br />
              <p className="about-animate">
                I love to learn, and get a kick out of building interactive and
                practical products. Solving problems is my specialty! I thrive
                on jumping into a challenge and devising creative solutions for
                it. I am also very passionate and curious about the
                possibilities of tech, recently I have been developing a web app
                for interfacing with GPT models.
              </p>
              <br />
              <p className="about-animate">
                With my most recent study at Dev Academy, alongside the
                development of technical skills there has been a very strong
                emphasis on Human Skills when working in teams. I&apos;m all for
                it! I have a strong value for kindness, empathy, and
                communication. Any place I work at, or situation I&apos;m in, I
                strive for inclusivity and diversity.
              </p>
            </div>
          </div>
          <div ref={skills} className="flex lg:w-fit lg:flex-col">
            <div className="h-min whitespace-nowrap">
              <h4 className="about-skills-animate font-display text-3xl font-bold text-green-600 sm:text-4xl">
                Skills
              </h4>
              <br />
              <div className="text-md font-display font-semibold text-white sm:text-xl xl:min-w-[320px]">
                <ul className="about-skills-text-animate list-disc text-left">
                  <li>Authentication</li>
                  <li>REST API calls</li>
                  <li>Databases</li>
                </ul>
                <br />
                <ul className="about-skills-text-animate list-disc text-left">
                  <li>3d & 2d games</li>
                  <li>Multithreaded Code</li>
                  <li>Compute Shaders</li>
                  <li>Multiplayer Networking (Unity)</li>
                </ul>
                <ul className="about-skills-text-animate list-disc text-left">
                  <li>Multiplayer Matchmaking (Unity)</li>
                  <li>Online voice chat with Vivox</li>
                  <li>Unity VFX & Shader Graph</li>
                  <li>C# Debugging & Breakpoints</li>
                </ul>
              </div>
            </div>
            {width && width < 1400 && width > 640 ? (
              <div className=" about-skills-icons-animate">
                <TechIcons classes="px-[5%] min-h-48 flex w-fit flex-wrap flex-grow content-center justify-center" />
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
        <div className="w-full" ref={github}>
          {width && (width > 1399 || width < 641) ? (
            <div className="about-skills-icons-animate">
              <TechIcons classes="flex flex-wrap justify-center mt-[6vh]" />
            </div>
          ) : (
            ""
          )}
          <div className="about-github-animate mx-auto mt-[6vh] max-w-fit overflow-hidden text-white">
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
