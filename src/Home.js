import React, { useEffect } from 'react'
import Form from './SearchForm'
import Movies from './Movies'
import SingleMoviePage from './SingleMoviePage'
import { useGlobalContext } from './context'


const Home = () => {
  const {loading}=useGlobalContext();
  return <>
    <main>

    <Form/>

    {!loading && <Movies/>}

    </main>
  </>
}

export default Home
