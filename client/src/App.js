import React from 'react';
import {Routes, Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from './components/Home';
import About from './components/About';

import Login from './components/Login';
import Signup from './components/Signup';

const App = () =>{
  return (
    <div>
      <Navbar />

     
      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />
        
        
    
        <Route path="/login" element={<Login />} />
    
        <Route path="/signup" element={<Signup />} />
       
      </Routes>
      
  
    </div>
  )
}

export default App;
