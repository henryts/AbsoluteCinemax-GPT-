import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice (
{
  name:"movies",
  initialState:{
    nowPlayingMovies:null
  },
  reducers:{
    addNowPlayingMovies:(state,action)=>{
          state.nowPlayingMovies=action.payload;
    },
    addPopularMovies:(state,action)=>{
          state.popularMovies=action.payload;
    },
    addTopRatedMovies:(state,action)=>{
          state.topRatedMovies=action.payload;
    },
    addVideoId:(state,action) =>{
      state.videoId=action.payload;
    }
  }
});
export const {addNowPlayingMovies,addVideoId,addPopularMovies,addTopRatedMovies}=movieSlice.actions;
export default movieSlice.reducer;

