import React, { useRef } from 'react'
import { useGlobalContext } from './context'
const SearchForm = () => {

  const {loading,statement,setSearchStr,searchStr}=useGlobalContext();
  const input_ref = useRef(null);

  const handleChange=()=>{
    setSearchStr(input_ref.current.value);
  }

  return <>
    <form action="" className="search-form">
      <h2>search movies</h2>
      <input type="text" className='form-input'  value={searchStr} ref={input_ref} onChange={handleChange}/>
     {loading && <div className="error">{statement}</div>}

    </form>
  </>
}

export default SearchForm
