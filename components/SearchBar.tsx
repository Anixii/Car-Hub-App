'use client'
import React from 'react'
import { SearchManufacture } from './index'
import { useState } from 'react'
const SearchBar = () => {  
  const [manufacturer, setManufacturer] = useState('')
  const handleSearch = () =>{ 

  }
  return (
    <form className='searchbar' onSubmit={handleSearch}> 
      <div className='searchbar__item'>
        <SearchManufacture
          manufacturer={manufacturer} 
          setManufacturer={setManufacturer}
        />
      </div>
    </form>
  )
}

export default SearchBar