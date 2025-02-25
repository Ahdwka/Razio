import Header from "./components/1-header/Header.jsx";
import Hero from "./components/2-hero/Hero.jsx";
import Cards from "./components/3-cards/Cards.jsx";
import Footer from "./components/4-footer/Footer.jsx";

function App() {
  return (
    <div className="container">
      <div className="container2">
        <Header />
        <Hero />
        <div className="divider" />
        <Cards />
        <div className="divider" />
        <Footer />
      </div>
    </div>
  );
}

export default App;