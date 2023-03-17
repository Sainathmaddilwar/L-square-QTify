import { fetchTopSongs, fetchNewSongs } from "./api/api";
import { useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Faq from "./components/Faq/Faq";
import LineBreaker from "./components/LineBreaker/LineBreaker";
import SongTab from "./components/Tabs/SongTab";
import Section from "./components/Section/Section";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Section title={"Top Album"} dataSource={fetchTopSongs} />
      <LineBreaker />
      <Section title={"New Songs"} dataSource={fetchNewSongs} />
      <LineBreaker />

      <Faq />
    </div>
  );
}

export default App;
