import Header from "./views/layout/header.jsx";
import Footer from "./views/layout/footer.jsx";
import AboutMe from "./views/home/about-me.jsx";
import Contact from "./views/home/contact.jsx";
import EducationSkills from "./views/home/education-skills.jsx";
import ExperienceSec from "./views/home/experience-sec.jsx";
import HeroSection from "./views/home/hero-section.jsx";
import ContactBar from "./views/home/contact-bar.jsx";
import LatestWork from "./views/home/latest-work.jsx";

function App() {
  return (
    <div className="font-bricolage">
      <Header />
      <main>
        <HeroSection />
        <ContactBar />
        <AboutMe />
        <LatestWork />
        <EducationSkills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
