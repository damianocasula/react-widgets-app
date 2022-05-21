import React, { useState, useEffect } from 'react'

const Search = props => {
  const [term, setTerm] = useState('')

  useEffect(() => {
    console.log('asdfghj')
  })

  return (
    <div>
      <div className='ui form'>
        <div className='field'>
          <label>Search</label>
          <input
            className='input'
            value={term}
            onChange={e => setTerm(e.target.value)}
          />
        </div>
      </div>
    </div>
  )
}

export default Search
