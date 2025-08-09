import { useState } from 'react';
import React from 'react'; 
import Body  from './Components/Body';
import { Provider } from 'react-redux';
import appStore from './utils/appStore';

function App() {
 
  return (
    <Provider store={appStore}>
    <Body></Body>
   </Provider>
  )
}

export default App
