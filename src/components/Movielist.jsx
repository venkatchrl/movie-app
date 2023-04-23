import { useEffect, useState } from "react";
import Movieitem from "./Movieitem";
import requests from '../utils/requests';

const Movielist =() =>{
    const [movies, setMovies]=useState([]);
    
    //  trending movies using useeffect to ender once
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
        <div>
        {movies.map((movie) => {
            return <Movieitem movie={movie} key={movie?.id} />;
        })}
           
        </div>
    );
    }

export default Movielist;
