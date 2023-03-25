import { fetchTopSongs, fetchNewSongs, fetchSongs } from "./api/api";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar";

import { StyledEngineProvider } from "@mui/material";
import { Outlet } from "react-router-dom";
function App() {
  const [cards, setCards] = useState([]);
  const genrateData = async (type, source) => {
    source().then((data) => {
      setCards((prev) => {
        return { ...prev, [type]: data };
      });
    });
  };
  useEffect(() => {
    genrateData("topAlbums", fetchTopSongs);
    genrateData("newAlbums", fetchNewSongs);
    genrateData("songs", fetchSongs);
  }, []);
  // console.log(cards);
  const { topAlbums = [], newAlbums = [], songs = [] } = cards;
  return (
    <div className="App">
      <StyledEngineProvider injectFirst>
        <Navbar albums={[...topAlbums, ...newAlbums]} />
        <Outlet context={{ data: { topAlbums, newAlbums, songs } }} />
      </StyledEngineProvider>
    </div>
  );
}
export default App;
