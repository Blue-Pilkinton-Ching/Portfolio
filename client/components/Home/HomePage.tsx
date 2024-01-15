import { Section } from "../Section";
import { AboutSection } from "./Sections/AboutSection";
import { ContactSection } from "./Sections/ContactSection";
import { HomeSection } from "./Sections/HomeSection";
import { ProjectsSection } from "./Sections/ProjectsSection";

function HomePage() {
  return (
    <>
      <Section>
        <HomeSection />
        <br />
      </Section>
      <Section>
        <AboutSection />
        <br />
      </Section>
      <Section>
        <ProjectsSection />
        <br />
      </Section>
      <Section>
        <ContactSection />
        <br />
      </Section>
    </>
  );
}

export default HomePage;
