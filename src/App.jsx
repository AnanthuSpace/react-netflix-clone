import NavBar from "./Component/NavBar";
import Banner from "./Component/Banner";
import Row from "./Component/Row";
import {
  originals,
  animeMovies,
  Anime,
  horror,
  action,
  romance,
} from "./Config/config";

import "../public/App.css";
import "../public/NavBar.css";
import "../public/Banner.css";
import "../public/Row.css";

function App() {
  return (
    <>
      <NavBar />
      <Banner indexOfPoster={3} />
      <Row category={originals} catName={"Trending"} />
      <Row category={Anime} catName={"Anime"} />
      <Row category={romance} catName={"Romance"} />
      <Banner indexOfPoster={1} />
      <Row category={horror} catName={"Horror"} />
      <Row category={action} catName={"Action"} />
      <Row category={animeMovies} catName={"Animations"} />
    </>
  );
}

export default App;
