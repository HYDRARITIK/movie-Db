import React from 'react'
import { useGlobalContext } from './context'
import { Link } from 'react-router-dom'
import MovieCard from './MovieCard'

const url =
  'https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png'

const Movies = () => {
  const {data}=useGlobalContext();


  return <>
    <section className="movies">
      
      {!data && 
      <img src={url} alt="noMovies" className="" />

      }
      
      
      {
       data && data.map((item)=>{
        const {id}=item;
          return <MovieCard  {...item} key={id} />
        })
      }

    </section>
  </>
}

export default Movies
