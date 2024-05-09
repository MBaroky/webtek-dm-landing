import "./App.css";
import Header from "./sections/Header";
import Industries from "./sections/Industries";
import OurWorks from "./sections/OurWorks";
import Portfolio from "./sections/Portfolio";
import Services from "./sections/Services";
import Team from "./sections/Team";
import Testimonials from "./sections/Testimonials";
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
      <Industries />
      <Testimonials />
    </main>
  );
}

export default App;
