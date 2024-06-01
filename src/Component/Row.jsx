import { useState, useEffect } from "react";
import YouTube from "react-youtube";
import axios from "axios";
import { Row_Shimming } from "./Shimming";
import { imageUrl, baseUrl, API_KEY } from "../Config/config";

const opts = {
  height: '390',
  width: '100%',
  playerVars: {
    autoplay: 0,
  },
};

function Row({ category, catName }) {
  const [movies, setMovies] = useState([]);
  const [trailer, setTrailer] = useState(null);

  useEffect(() => {
    axios
      .get(`${baseUrl}/${category}?api_key=${API_KEY}`)
      .then((res) => {
        setMovies(res.data.results);
      })
      .catch((error) => console.error("Error fetching movies:", error));
  }, [category]);

  const openYoutube = (videoID) => {
    axios
      .get(`${baseUrl}/movie/${videoID}/videos?api_key=${API_KEY}&language=en-US`)
      .then((response) => {
        if (response.data.results.length !== 0) {
          setTrailer(response.data.results[0]);
        } else {
          console.log("No videos found for this movie.");
          // alert("This video is currently not available.");
        }
      })
      .catch((error) => {
        console.error("Error fetching video:", error);
        // alert("Something went wrong. Please try again later.");
      });
  };

  return (
    <div className="row-div">
      <h3 style={{ color: "white" }}>{catName}</h3>
      <div className="row-container">
        <div className="row_container_child">
          {movies.length === 0 ? (
            <Row_Shimming />
          ) : (
            movies.map((movie) => (
              <div
                className="row_container_child"
                onClick={() => openYoutube(movie.id)}
                key={movie.id}
                style={{
                  backgroundImage: `url(${imageUrl}w1280${movie.backdrop_path})`,
                }}
              ></div>
            ))
          )}
        </div>
      </div>
      {trailer && (
        <div className="youtube_container">
          <button className="youtube_button" onClick={() => setTrailer(null)}>Close</button>
          <YouTube videoId={trailer.key} opts={opts} />
        </div>
      )}
    </div>
  );
}

export default Row;
