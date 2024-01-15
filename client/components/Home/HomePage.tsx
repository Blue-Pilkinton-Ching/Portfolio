import { Section } from "../Section";
import { AboutSection } from "./AboutSection";
import { ContactSection } from "./ContactSection";
import { HomeSection } from "./HomeSection";
import { ProjectsSection } from "./ProjectsSection";

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
