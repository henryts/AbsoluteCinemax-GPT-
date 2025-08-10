import { configureStore } from "@reduxjs/toolkit";
import  useReducer  from "./userSlice";
import moviesReducer from  "./movieSlice";
import gptReducer from "./gptSlice";

const appStore =configureStore({

    reducer:{

        user:useReducer,
        movies:moviesReducer,
        gptSlice:gptReducer
    }
});
export default appStore;
