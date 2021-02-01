import React, { useEffect, useState } from "react";
import { FaCode } from "react-icons/fa";
import { API_KEY, API_URL, IMAGE_BASE_URL } from "../../Config";
import MainImage from "./Sections/MainImage";

function LandingPage() {
  const [Movies, setMovies] = useState([]);
  const [MainMovieImage, setMainMovieImage] = useState(null);

  useEffect(() => {
    const endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=ko-KR&page=1`;
    fetch(endpoint)
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        setMovies([response.results]);
        setMainMovieImage(response.results[0]);
      });
  }, []);
  return (
    <div style={{ width: "100%", margin: "0" }}>
      {MainMovieImage && (
        <MainImage
          image={`${IMAGE_BASE_URL}w1280${MainMovieImage.backdrop_path}`}
          title={MainMovieImage.title}
          text={MainMovieImage.overview}
        />
      )}

      <div style={{ width: "85%", margin: "1rem auto" }}>
        <h2>Movies by latest</h2>
        <hr />

        {/* Movie Grid Cards */}
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <button>Load More</button>
      </div>
    </div>
  );
}

export default LandingPage;
