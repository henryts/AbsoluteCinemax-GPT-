import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { TDMB_API_OPTIONS } from "../utils/constants";
import { addVideoId } from "../utils/movieSlice";


export  const useFetchVideo = ({id}) => {

    
  const dispatch = useDispatch();
  const fetchVideo = async (id ) => {
    console.log("id====>", id);
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
      TDMB_API_OPTIONS
    );
    const jsondata = await data.json();
    console.log("jsondata==>", jsondata.results[0].key);
    dispatch(addVideoId(jsondata.results[0].key));
  };

  useEffect(() => {
    fetchVideo(id);
  }, [id]);
};
