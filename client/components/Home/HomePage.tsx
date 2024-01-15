import { AboutSection } from "./AboutSection";
import { ContactSection } from "./ContactSection";
import { HomeSection } from "./HomeSection";
import { ProjectsSection } from "./ProjectsSection";

function HomePage() {
  return (
    <>
      <HomeSection />
      <br />
      <AboutSection />
      <br />
      <ProjectsSection />
      <br />
      <ContactSection />
      <br />
    </>
  );
}

export default HomePage;
