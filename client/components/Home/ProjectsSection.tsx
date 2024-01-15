import { HomeProject } from "./HomeProject";

export function ProjectsSection() {
  return (
    <section id="projects" className="flex min-h-dvh w-full flex-col">
      <div className="my-auto h-full">
        <h4 className="text-center font-display text-3xl font-bold text-white sm:text-5xl">
          My Projects
        </h4>
        <br />
        <br />
        <div className="flex flex-wrap content-start justify-center gap-5">
          <HomeProject
            id={1}
            title="PrePay GPT"
            file="PrePayGPT"
            technologies="react  •  firebase  •  typescript  •  nodejs"
          />
          <HomeProject
            id={2}
            title="Games"
            file="PrePayGPT"
            technologies="unity  •  c#  •  unreal"
          />
          <HomeProject
            id={3}
            title="Models & Renders"
            file="PrePayGPT"
            technologies="maya  •  substance painter  •  blender"
          />
        </div>
      </div>
    </section>
  );
}
