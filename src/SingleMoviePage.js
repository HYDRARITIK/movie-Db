import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useGlobalContext } from './context';
// import { API_ENDPOINT } from './context'

// http://www.omdbapi.com/?i=tt3896198&apikey=739c3927        ===> for single movie

const api_key='739c3927';

const SingleMoviePage = ({year,url,title,info}) => {
    const {setLoading}=useGlobalContext();
    const {singleData,setSingleData}=useState({});


  const {id}=useParams();

    console.log(id);

    const url_=`http://www.omdbapi.com/?i=${id}&apikey=${api_key}&`;
 

    useEffect(()=>{
        const fetchData=async()=>{
     
            try {
             
               setLoading(true);
              const response=await fetch(url_);
              const singleData=await response.json();
              setSingleData(singleData);
              console.log(singleData);

              
          
              console.log(singleData);
              // console.log('items are',data.Search.length);
              setLoading(false);
        
              
            } catch (error) {
              console.log(error);
              setLoading(false);
            }
          }
      
        fetchData();
    },[])

 const {Title,Poster,Plot,imdbID,Year}=singleData || {};
    // console.log(Title,Poster,Plot,imdbID,Year);

  return (
    <>
        <section className="single-movie" >
            <img src={Poster} alt={Title} className="" />
            <div className="single-movie-info">

                <h2>{Title}</h2>
                <p>{Plot}</p>
                <h4>{Year}</h4>
                <Link to='/' className="btn">back to home page</Link>

            </div>
        </section>
    </>
  )
}

export default SingleMoviePage







// {
//     "Title": "Batman Begins",
//     "Year": "2005",
//     "Rated": "PG-13",
//     "Released": "15 Jun 2005",
//     "Runtime": "140 min",
//     "Genre": "Action, Crime, Drama",
//     "Director": "Christopher Nolan",
//     "Writer": "Bob Kane, David S. Goyer, Christopher Nolan",
//     "Actors": "Christian Bale, Michael Caine, Ken Watanabe",
//     "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from corruption.",
//     "Language": "English, Mandarin",
//     "Country": "United States, United Kingdom",
//     "Awards": "Nominated for 1 Oscar. 13 wins & 79 nominations total",
//     "Poster": "https://m.media-amazon.com/images/M/MV5BOTY4YjI2N2MtYmFlMC00ZjcyLTg3YjEtMDQyM2ZjYzQ5YWFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
//     "Ratings": [
//         {
//             "Source": "Internet Movie Database",
//             "Value": "8.2/10"
//         },
//         {
//             "Source": "Rotten Tomatoes",
//             "Value": "84%"
//         },
//         {
//             "Source": "Metacritic",
//             "Value": "70/100"
//         }
//     ],
//     "Metascore": "70",
//     "imdbRating": "8.2",
//     "imdbVotes": "1,468,798",
//     "imdbID": "tt0372784",
//     "Type": "movie",
//     "DVD": "18 Oct 2005",
//     "BoxOffice": "$206,863,479",
//     "Production": "N/A",
//     "Website": "N/A",
//     "Response": "True"
// }