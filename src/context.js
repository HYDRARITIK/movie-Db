import React, { useState, useContext, useEffect } from 'react'
// make sure to use https


// export const API_ENDPOINT = `http://www.omdbapi.com/?s=${search_str}&apikey=${api_key}&`
const AppContext = React.createContext()


const AppProvider = ({ children }) => {
  
  const [loading,setLoading]=useState(false);
  const [data,setData]=useState(false);
  const [statement,setStatement]=useState('data is coming wait');
  const [searchStr,setSearchStr]=useState('batman');

  const url_=`http://www.omdbapi.com/?s=${searchStr}&apikey=${process.env.REACT_APP_MOVIE_API_KEY}&`;

  
  const fetchData=async()=>{
    
    setLoading(true);
    try {
      const response=await fetch(url_);
      const data=await response.json();
      
      setData(data.Search);
      console.log(data.Search);
      console.log('items are',data.Search.length);
      setLoading(false);

      
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }

  useEffect(()=>{
    fetchData();
  },[searchStr])










  

  return <AppContext.Provider 
  value={{
      loading,data,statement,searchStr,setSearchStr,setLoading

  }}>{children}</AppContext.Provider>
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
