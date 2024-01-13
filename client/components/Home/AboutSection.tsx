import { TechIcon } from "./TechIcon";

export function AboutSection() {
  return (
    <section id="about" className="flex h-dvh w-full flex-col">
      <h4 className="font-display text-4xl font-bold text-green-500">
        About Me
      </h4>
      <br />
      <div className="flex w-full">
        <div className="w-[60%]">
          <p className="font-display text-xl font-semibold text-white">
            Kia ora! I&apos;m Blue. Since the age of ten or eleven, I have been
            programming. I started with scratch, the visual block-based
            programming language, and since then have gone to develop games and
            web apps, both independently and in groups of teams. <br />
            <br />I love to learn, and get a kick out of building interactive
            and practical products. Solving problems is my specialty! I thrive
            on jumping into a challenge and devising creative solutions for it.
            I am also very passionate and curious about the possibilities of
            tech, recently I have been developing a web app for interfacing with
            GPT models. <br />
            <br />
            With my most recent study at Dev Academy, alongside the development
            of technical skills there has been a very strong emphasis on Human
            Skills when working in teams. I&apos;m all for it! I have a strong
            value for kindness, empathy, and communication. Any place I work at,
            or situation I&apos;m in, I strive for inclusivity and diversity.
          </p>
        </div>
        <div className="w-[40%]">
          <div className="flex w-full flex-wrap">
            <TechIcon iconName="firebase" />
            <TechIcon iconName="react" />
            <TechIcon iconName="unity" />
            <TechIcon iconName="ubuntu" />
            <TechIcon iconName="javascript" />
            <TechIcon iconName="nodejs" />
            <TechIcon iconName="typescript" />
            <TechIcon iconName="tailwindcss" />
            <TechIcon iconName="css" />
            <TechIcon iconName="vscode" />
            <TechIcon iconName="html" />
            <TechIcon iconName="unreal-engine" iconTitle="unreal engine" />
            <TechIcon iconName="csharp" iconTitle="c#" />
          </div>
        </div>
      </div>
    </section>
  );
}
