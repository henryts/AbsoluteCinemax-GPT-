import React, { useEffect } from 'react'
import { signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { removeUser } from '../utils/userSlice';
import { TDMB_API_OPTIONS } from '../utils/constants';
import { addNowPlayingMovies } from '../utils/movieSlice';
import { useGetNowPlayingMovies } from '../hooks/useGetNowPlayingMovies.jsx';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
function Browse() {


  //call api fetch movie data ,store in RTKstore ,return movie data;
    useGetNowPlayingMovies();


  return (
    <div>
   <MainContainer></MainContainer>
   <SecondaryContainer></SecondaryContainer>
   </div>
  )
}

export default Browse