import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { API_ENDPOINT } from './context'


const MovieCard = ({Title,Poster,Type,imdbID,Year}) => {
  const [visibility,setVisibility]=useState("hidden");

  const defaultStyle={
    visibility:"hidden"
  }

  const handleOver=()=>{
    // visibility:hidden
    // defaultStyle.visibility='visible'
    setVisibility('visible')

  }

  
  const handleOut=()=>{
    // defaultStyle.visibility="hidden"
    setVisibility('hidden')
  }

  return <>
    <div key={imdbID} onMouseOver={handleOver} onMouseOut={handleOut}>
    <Link to={`/single/${imdbID}`} className="movie" >
      <article key={imdbID} >
        <img src={Poster} alt={Title} className="" />
        <div className="movie-info" style={{visibility:`${visibility}`}}>
          <h4 className="title">
            {Title}
          </h4>
          <p>
            {Type}
          </p>
        </div>
      </article>
    </Link>
    </div>
  </>
}

export default MovieCard
