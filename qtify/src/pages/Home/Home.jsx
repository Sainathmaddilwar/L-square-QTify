import React from "react";
import { useOutletContext } from "react-router-dom";
import Hero from "../../components/Hero/Hero";
import Faq from "../../components/Faq/Faq";
import LineBreaker from "../../components/LineBreaker/LineBreaker";
import Section from "../../components/Section/Section";
import { fetchFilters } from "../../api/api";
function Home() {
  const data = useOutletContext();
  const { newAlbums, songs, topAlbums } = data.data;
  // console.log("top from home", topAlbums);
  return (
    <div>
      <Hero />
      <Section title={"Top Album"} cards={topAlbums} type="album" />
      <br />
      <Section title={"New Songs"} cards={newAlbums} type="album" />
      <LineBreaker />
      <Section
        title={"Songs"}
        cards={songs}
        filterSource={fetchFilters}
        type="song"
      />
      <LineBreaker />
      <Faq />
    </div>
  );
}

export default Home;
