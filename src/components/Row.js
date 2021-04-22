import React, { useEffect, useState } from "react";
import YouTube from "react-youtube";
import axios from "../axiosm";
import "./Row.css";
import movieTrailer from 'movie-trailer'

const baseimgurl = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl]=useState("");

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);


  const opts = {
    height : "390",
    widht: "100%",
    playVars : {
      autoplay: 1,

    },

  };

  const handleClick=(movie)=>{
    if(trailerUrl){
      setTrailerUrl("");
    }
    else{
      movieTrailer(movie?.name || "")
      .then(url =>{
          // console.log(url);
          const urlParams = new URLSearchParams(new URL(url).search)
        // const urlParse = new URLSearchParams(URL(url).search);
        // setTrailerUrl( urlParse.get('v'));
        setTrailerUrl( urlParams.get('v'));
      }).catch(error=>{
        console.log(error)
      })
    }
  };


  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row_posters">
        {movies.map((movie) => (
          <img
            key = {movie.id}
            onClick={()=> handleClick(movie)}
            className={`row_poster ${isLargeRow && "row_posterlarge"}`}
            src={`${baseimgurl}${
              isLargeRow ? movie.poster_path:
              movie.backdrop_path
              }`}
            alt={movie.name}
          ></img>
        ))}
      </div>
      {trailerUrl &&<YouTube videoId={trailerUrl} opts={opts}/>};
           
   
    </div>
  );
}

export default Row;
