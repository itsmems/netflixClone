import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import WatchTrailer from "./WatchTrailer";

const Moviedetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=401dea9884f055ff9022d7695c0b7df1`
      );
      setMovie(response.data);
    };
    fetchData();
  }, [id]);

  return (
    <>
      <div className="w-full h-[550px] text-white">
        <div className="w-full h-full">
          <div className=" absolute w-full h-[550px]  bg-gradient-to-r from-black"></div>
          <img
            className="w-full h-full object-cover"
            src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
            alt={movie?.title}
          />
          <div className="absolute w-full top-[15%] p-4 md:p-8">
            <h1 className="text-3xl font-bold md:text-5xl">{movie?.title}</h1>
            <p className="mt-4 text-gray-300 text-sm">{movie?.release_date}</p>
            <p className="text-sm mt-2 mb-2 text-gray-100">{movie?.overview}</p>
    
              <button className="box-border bg-red-600 hover:bg-red-500 p-1 mt-2 rounded">
                Watch Trailor
              </button>
            
          </div>
        </div>
        <h1 className="mt-8 ml-4 font-bold text-[20px] tracking-[1.5px]">
          Recommended Movies
        </h1>
      </div>
      <WatchTrailer id={id}/>
    </>
  );
};

export default Moviedetails;
