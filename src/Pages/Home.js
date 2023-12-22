import About from "../components/Home/About";
import Education from "../components/Home/Education";
import Experiance from "../components/Home/Experiance";
import Features from "../components/Home/Features";
import Hero from "../components/Home/Hero";
import OurTeam from "../components/Home/OurTeam";
import Plans from "../components/Home/Plans";
import Services from "../components/Home/Services";
import Team from "../components/Home/Team";
import Work from "../components/Home/Work";
function Home() {
  return (
    <>
      <Hero />
      <Features />
      <About />
      <Services />
      <Experiance />
      <Work />
      <Education />
      <Team />
      <OurTeam />
      <Plans />
    </>
  );
}
export default Home;
