import "./App.css";
import Header from "./sections/Header";
import Portfolio from "./sections/Portfolio";
import Team from "./sections/Team";
import WelcomeSection from "./sections/WelcomeSection";

function App() {
  return (
    <main>
      <Header />
      <WelcomeSection />
      <Portfolio />
      <Team />
    </main>
  );
}

export default App;
