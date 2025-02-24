import NavbarMain from "./Components/navbar/NavbarMain";
import "./App.css";
import HeroMain from "./Components/heroSection/heroMain";
import HeroGradient from "./Components/heroSection/HeroGradient";
import SubHeroSection from "./Components/heroSection/SubHeroSection";
import AboutMeMain from "./Components/aboutMeSection/AboutMeMain";
function App() {
  return (
    <main className="font-body">
      <NavbarMain />
      <HeroMain />
      <HeroGradient />
      <SubHeroSection />
      <AboutMeMain />
    </main>
  );
}

export default App;
