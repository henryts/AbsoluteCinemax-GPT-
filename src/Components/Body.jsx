import React, { useEffect } from 'react';
import Login from './Login';
import Browse from './Browse';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { Error } from './Error';
import Header from './Header';
import GptSearchBody from './GptSearchBody';

const AppLayout = () => {

  const gptToggle = useSelector((store)=>store.gptSlice.isGptActive);
  console.log("gptToggle===>",gptToggle);
  
  return (
    <>
      <Header />
    {gptToggle? <GptSearchBody/>: <Outlet /> }  
    </>
  );
};

const Body = () => {

  const appRouter = createBrowserRouter([
    {
      path: '/',
      element: <AppLayout />,
      errorElement: <Error />,
      children: [
        {
          path: '/',
          element: <Login />,
        },
        {
          path: '/browse',
          element: <Browse />,
        },
      ],
    },
  ]);

  return <RouterProvider router={appRouter} />;
};

export default Body;
