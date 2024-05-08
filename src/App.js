import "./App.css";
import Header from "./sections/Header";
import OurWorks from "./sections/OurWorks";
import Portfolio from "./sections/Portfolio";
import Services from "./sections/Services";
import Team from "./sections/Team";
import WelcomeSection from "./sections/WelcomeSection";

function App() {
  return (
    <main>
      <Header />
      <WelcomeSection />
      <Portfolio />
      <Team />
      <Services />
      <OurWorks />
    </main>
  );
}

export default App;
