import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "./Components/Pages/Home"


import './main.css'

import Header from "./Components/Header/Header"
import Movie from "./Components/Pages/Movie"

const App = () => {
  
  return (
    <div className="app_container">
      
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/movie/:id" element={ <Movie/>}/>
      </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App;
