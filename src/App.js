import "./App.css";
import Clients from "./sections/Clients";
import FAQ from "./sections/FAQ";
import Footer from "./sections/Footer";
import Goal from "./sections/Goal";
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
      <Clients />
      <Goal />
      <FAQ />
      <Footer />
    </main>
  );
}

export default App;
