import React, { useState } from 'react';
import './App.css';
import Buttons from './components/Buttons';
import { useSelector } from 'react-redux';

function App() {
 
  const backgroundColor = useSelector(state => state);

 

  let backGround = backgroundColor.buttonColor.primary;
  return (
    <div className='app' style={{background: backGround}}>
     <Buttons />
    </div>
  );
}

export default App;
