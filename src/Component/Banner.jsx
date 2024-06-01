import { useState, useEffect } from "react";
import axios from "axios";

import { baseUrl, imageUrl, originals } from "../Config/config";
import { Poster_Shimming } from "../Component/Shimming";

function Banner({ indexOfPoster }) {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    axios.get(`${baseUrl}/${originals}`).then((res) => {
      // console.log(res.data.results[0]);
      setMovie(res.data.results[indexOfPoster]);
    });
  });

  return (
    <>
      {!movie ? (
        <Poster_Shimming />
      ) : (
        <div
          className="movie_poster"
          style={{
            backgroundImage: `url(${imageUrl}w1280${movie.backdrop_path})`,
          }}
        >
          <div className="text-fields">
            <h1>{movie.original_name}</h1>
            <div className="buttons">
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="12"
                  width="9"
                  viewBox="0 0 384 512"
                >
                  <path
                    fill="#ffffff"
                    d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"
                  />
                  Play
                </svg>
              </button>
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="12"
                  width="10.5"
                  viewBox="0 0 448 512"
                >
                  <path
                    fill="#ffffff"
                    d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"
                  />
                </svg>
                My List
              </button>
            </div>
            <p>{movie.overview}</p>
          </div>
        </div>
      )}
    </>
  );
}

export default Banner;
