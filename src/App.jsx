import NavBar from "./Component/NavBar";
import Banner from "./Component/Banner";
import Row from "./Component/Row";

import "../public/App.css";
import "../public/NavBar.css";
import "../public/Banner.css";
import "../public/Row.css"

function App() {
  return (
    <>
      <NavBar />
      <Banner />
      <Row />
      <Row />
      <Banner />
      <Row />
      <Row />
    </>
  );
}

export default App;
