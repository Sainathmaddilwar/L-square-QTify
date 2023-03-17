import { fetchTopSongs, fetchNewSongs } from "./api/api";
import { useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
// import CardCarousel from "./components/CardCarousel/CardCarousel";
// import Faq from "./components/Faq/Faq";
// import Grid from "./components/Grid/Grid";
import Section from "./components/Section/Section";
function App() {
  useEffect(() => {
    fetchNewSongs().then((result) => {
      console.log("new songs", result);
    });
  }, []);
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Section title={"top album"} dataSource={fetchTopSongs} />
    </div>
  );
}

export default App;
