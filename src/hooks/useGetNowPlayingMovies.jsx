
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { TDMB_API_OPTIONS } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/movieSlice";

export const useGetNowPlayingMovies = async()=>{
    const dispatch =useDispatch();

  const getNowPlayingMovies = async()=>{

   const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1',
    TDMB_API_OPTIONS
   );
   const json =await data.json();
   console.log(json);
   dispatch(addNowPlayingMovies(json.results));
   return json.results;
  }
 
  useEffect(()=>{
    getNowPlayingMovies();

  },[])
}