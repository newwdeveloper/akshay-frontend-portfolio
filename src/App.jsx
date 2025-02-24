import NavbarMain from "./Components/navbar/NavbarMain";
import "./App.css";
import HeroMain from "./Components/heroSection/heroMain";
import HeroGradient from "./Components/heroSection/HeroGradient";
function App() {
  return (
    <main className="font-body">
      <NavbarMain />
      <HeroMain />
      <HeroGradient />
    </main>
  );
}

export default App;
