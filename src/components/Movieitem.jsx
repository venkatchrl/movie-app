/* eslint-disable react/prop-types */
import { BASE_URL } from "../constants/imgConstant";

const MovieItem = ({movie}) => {
    return (
        <div className="cursor-pointer p-3 ">
            <img className="group transition duration-150 ease-in  
            transform hover:z-50 sm:hover:scale-105" 
            src={`${BASE_URL}/${movie?.backdrop_path}`}/>
            <div className="p-2">
                <p className="truncate max-w-md">{movie?.overview}</p>
                <h1 className="group transition duration-150 ease-in  transform hover:z-50 sm:hover:scale-105">
                 {movie?.original_title || movie?.title || movie?.original_name}
                 </h1>
                <p >
                    {movie?.release_date} 👍{movie?.vote_count}
                </p>
            </div>
            

        </div>
    );
}

export default MovieItem;
