import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
// import Card from "./components/Card/Card";
import CardCarousel from "./components/CardCarousel/CardCarousel";
import Faq from "./components/Faq/Faq";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <CardCarousel />
      <Card />
      <Faq />
    </div>
  );
}

export default App;
