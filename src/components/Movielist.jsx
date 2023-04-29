import { useEffect, useState } from "react";
import requests from '../utils/requests';

import { useSearchParams } from "react-router-dom";
import MovieItem from "./MovieItem";

const Movielist =() =>{
    const [movies, setMovies]=useState([]);
    const [searchParams]=useSearchParams();
    const params = searchParams.get("genre");
    
    //  trending movies using useeffect to render once
    useEffect(() => { 
        fetchTrendingMovies();
    },[params]);

    const fetchTrendingMovies = async () =>{
        const data = await fetch(
            `https://api.themoviedb.org/3/${
                requests[params]?.url || requests.fetchTrending.url}`
          );
        const movielist= await data.json();
    
        setMovies(movielist?.results);
        console.log(movielist);
    }

    return (
        <div className="p-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:flex flex-wrap justify-center">
        {movies.map((movie) => {
            return <MovieItem movie={movie} key={movie?.id} />;
        })}
           
        </div>
    );
    }

export default Movielist;
