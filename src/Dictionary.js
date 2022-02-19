import React, { useState } from 'react'
import axios from 'axios'
import './Dictionary.css'

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState('')

  function handleResponse(response) {
    console.log(response.data[0])
    alert(`I love ${keyword}!`)
  }

  function search(event) {
    event.preventDefault()
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`
    console.log(apiUrl)
    axios.get(apiUrl).then(handleResponse)
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value)
  }

  return (
    <div className="Dictionary">
      <section>
        <form onSubmit={search}>
          <label>What words do you want to know?</label>
          <br />
          <input
            type="search"
            placeholder="Search for a word"
            defaultValue={props.defaultKeyword}
            autoFocus={true}
            className="form-control search-input"
            onChange={handleKeywordChange}
          />
        </form>
        <small className="hint">i.e. pink, cheshire, cat, with, stripe</small>
      </section>
    </div>
  )
}
