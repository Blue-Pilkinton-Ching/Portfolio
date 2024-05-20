import { useEffect, useRef } from "react";
import { HomeProject } from "../HomeProject";
import { animate, stagger, useInView } from "framer-motion";

export function ProjectsSection() {
  const projects = useRef(null);
  const projectsInView = useInView(projects);

  useEffect(() => {
    if (projectsInView) {
      animate(
        ".animate-projects-title",
        { opacity: 1, x: 0 },
        { duration: 0.5, ease: "circOut" },
      );
      animate(
        ".animate-projects",
        { opacity: 1, y: 0 },
        {
          duration: 0.5,
          delay: stagger(0.1, { startDelay: 0.2 }),
          ease: "circOut",
        },
      );
    } else {
      animate(".animate-projects", { opacity: 0, y: 75 }, { duration: 0 });
      animate(
        ".animate-projects-title",
        { opacity: 0, x: -75 },
        { duration: 0 },
      );
    }
  }, [projectsInView]);

  return (
    <section id="projects" className="flex min-h-dvh w-full flex-col">
      <div className="my-auto h-full">
        <h4 className="animate-projects-title text-center font-display text-3xl font-bold text-white sm:text-5xl">
          My Projects
        </h4>
        <br />
        <br />
        <div
          ref={projects}
          className="flex flex-wrap content-start justify-center gap-5"
        >
          <div className="animate-projects">
            <HomeProject
              title="Heihei Games"
              file="heihei"
              technologies="react  •  typescript  • tailwindcss  •  express  •  firebase  •  aws"
              page="heihei"
            />
          </div>
          <div className="animate-projects">
            <HomeProject
              title="PrePay GPT"
              file="PrePayGPT"
              technologies="react  •  firebase  •  typescript"
              page="prepaygpt"
            />
          </div>
          <div className="animate-projects">
            <HomeProject
              title="Games"
              file="Games"
              technologies="unity  •  c#  •  unreal"
              page="games"
            />
          </div>
          <div className="animate-projects">
            <HomeProject
              title="Models & Renders"
              file="Renders"
              technologies="maya  •  substance painter  •  blender"
              page="models-renders"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
