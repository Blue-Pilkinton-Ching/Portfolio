import { TechIcon } from "./TechIcon";
import GitHubCalendar from "react-github-calendar";

export function AboutSection() {
  return (
    <section id="about" className="center flex min-h-dvh w-full flex-col">
      <div className="my-auto">
        <h4 className="font-display text-3xl font-bold text-green-500 sm:text-4xl">
          About Me
        </h4>
        <br />
        <div className="flex w-full flex-col">
          <div className="w-full">
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
          <div className="w-full">
            <div className="mt-[6vh] flex w-full flex-wrap justify-center">
              <TechIcon iconName="javascript" />
              <TechIcon iconName="typescript" />
              <TechIcon iconName="react" />
              <TechIcon iconName="html" />
              <TechIcon iconName="css" />
              <TechIcon iconName="firebase" />
              <TechIcon iconName="nodejs" />
              <TechIcon iconName="tailwindcss" />
              <TechIcon iconName="csharp" iconTitle="c#" />
              <TechIcon iconName="unity" />
              <TechIcon iconName="unreal-engine" iconTitle="unreal engine" />
              <TechIcon iconName="vscode" />
              <TechIcon iconName="ubuntu" />
            </div>
          </div>
        </div>
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
    </section>
  );
}
