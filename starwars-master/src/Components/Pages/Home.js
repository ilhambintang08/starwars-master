import React, { useState } from 'react'

import SeacrhBar from "../SearchBar/SeacrhBar"
import Result from "../Result/Result"



const Home = () => {
   
    const [movieList, setMovieList] = useState([])
    
    return (
    <>
        <SeacrhBar setMovieList={setMovieList}/>
        <Result movieList={movieList}/>
      </>
  )

}

export default Home