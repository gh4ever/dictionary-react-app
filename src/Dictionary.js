import React, { useState } from 'react'
import './Dictionary.css'

export default function Dictionary() {
  let [keyword, setKeyword] = useState('')

  function handleSubmit(event) {
    event.preventDefault()
    alert(`Searching for the word!`)
  }

  function handleKeywordChange(event) {
    event.preventDefault()
    console.log(event.target.value)
  }

  return (
    <div className="Dictionary">
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="Search for a word"
          autoFocus={true}
          className="form-control search-input"
          onChange={handleKeywordChange}
        />
      </form>
      <small className="hint">i.e. pink, cheshire, cat, with, stripe</small>
    </div>
  )
}
