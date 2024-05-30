import { useState, useEffect } from "react";
import axios from "axios";
import { Row_Shimming } from "./Shimming";
import { imageUrl, baseUrl } from "../Config/config";

function Row({ category, catName }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get(`${baseUrl}/${category}`)
      .then((res) => setMovies(res.data.results));
  });

  return (
    <div className="row-div">
      <h3 style={{ color: "white" }}>{catName}</h3>
      <div className="row-container">
        <div className="row_container_child">
          {movies.length == 0 ? (
            <Row_Shimming />
          ) : (
            movies.map((movie) => {
              return (
                <div
                  className="row_container_child"
                  key={movie.id}
                  style={{
                    backgroundImage: `url(${imageUrl}w1280${movie.backdrop_path})`,
                  }}
                ></div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}

export default Row;
