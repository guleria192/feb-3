import React from 'react'

function Search({search,searchThis}) {
  return (
    <div>
     <input type="text" placeholder='Search..' value={search} onChange={searchThis}/>
    </div>
  )
}

export default Search
