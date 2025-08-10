import { createSlice } from "@reduxjs/toolkit";


const gptSlice = createSlice({
name: "gptSlice",
initialState: {
  isGptActive:false  
},
reducers:{
   toggleGpt: (state,action)=>{
     state.isGptActive = !state.isGptActive
   }
}

});
export const {toggleGpt}=gptSlice.actions;
export default gptSlice.reducer;