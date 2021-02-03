import React, { useEffect, useState } from "react";
import { API_KEY, API_URL } from "../../Config";

function MovieDetail(props) {
  const movieId = props.match.params.movieId;
  useEffect(() => {
    console.log(props.match);
    const endpointCrew = `${API_URL}movie/${movieId}/credits?api_key=${API_KEY}&language=ko-KR`;
    const endpointInfo = `${API_URL}movie/${movieId}?api_key=${API_KEY}&language=ko-KR`;
    fetch(endpointInfo)
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
      });
  }, []);

  return <div></div>;
}

export default MovieDetail;
