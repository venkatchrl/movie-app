import { useEffect, useState } from "react";
import requests from '../utils/requests';
import MovieItem from "./Movieitem";

const Movielist =() =>{
    const [movies, setMovies]=useState([]);
    
    //  trending movies using useeffect to render once
    useEffect(() => { 
        fetchTrendingMovies();
    },[]);

    const fetchTrendingMovies = async () =>{
        const data = await fetch(
            `https://api.themoviedb.org/3/${requests.fetchTrending.url}`
          );
        const movielist= await data.json();
    
        setMovies(movielist.results);
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
