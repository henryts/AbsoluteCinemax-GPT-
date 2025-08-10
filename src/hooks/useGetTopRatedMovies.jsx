
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { TDMB_API_OPTIONS } from "../utils/constants";
import { addTopRatedMovies } from "../utils/movieSlice";

export const useGetTopRatedMovies = async()=>{
    const dispatch =useDispatch();

  const gettopRatedMovies = async()=>{

   const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1',
    TDMB_API_OPTIONS
   );
   const json =await data.json();
   console.log(json);
   dispatch(addTopRatedMovies(json.results));
   return json.results;
  }
 
  useEffect(()=>{
    gettopRatedMovies();

  },[])
}