import { BackgroundSection } from "../BackgroundSection";
import { AboutSection } from "./Sections/AboutSection";
import { ContactSection } from "./Sections/ContactSection";
import { HomeSection } from "./Sections/HomeSection";
import { ProjectsSection } from "./Sections/ProjectsSection";

function HomePage() {
  return (
    <>
      <BackgroundSection>
        <HomeSection />
        <br />
      </BackgroundSection>
      <BackgroundSection>
        <AboutSection />
        <br />
      </BackgroundSection>
      <BackgroundSection>
        <ProjectsSection />
        <br />
      </BackgroundSection>
      <BackgroundSection>
        <ContactSection />
        <br />
      </BackgroundSection>
    </>
  );
}

export default HomePage;
