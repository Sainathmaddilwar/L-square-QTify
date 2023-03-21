import {
  fetchTopSongs,
  fetchNewSongs,
  fetchFilters,
  fetchSongs,
} from "./api/api";
import { useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Faq from "./components/Faq/Faq";
import LineBreaker from "./components/LineBreaker/LineBreaker";
import Section from "./components/Section/Section";
import { StyledEngineProvider } from "@mui/material";
/*
  
      <SongTab />
      
*/
function App() {
  return (
    <div className="App">
      <StyledEngineProvider injectFirst>
        <Navbar />
        <Hero />
        <Section title={"Top Album"} dataSource={fetchTopSongs} type="album" />
        <br />
        <Section title={"New Songs"} dataSource={fetchNewSongs} type="album" />
        <LineBreaker />
        <Section
          title={"Songs"}
          dataSource={fetchSongs}
          filterSource={fetchFilters}
          type="song"
        />
        <LineBreaker />
        <Faq />
      </StyledEngineProvider>
    </div>
  );
}
export default App;
